const { ObjectId } = require("mongodb");
class OrderService {
  constructor(client) {
    this.Order = client.db().collection("orders");
  }
  extractOrderData(payload) {
    const order = {
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      address: payload.address,
      car_name: payload.nameCar,
      dateCreate: new Date().toLocaleString("vi-VN", {
        timeZone: "Asia/Ho_Chi_Minh",
      }),
    };

    // remove undefined fields
    Object.keys(order).forEach(
      (key) => order[key] === undefined && delete order[key]
    );
    return order;
  }

  async create(payload) {
    const order = this.extractOrderData(payload);
    const result = await this.Order.insertOne(order);

    return result;
  }

  async findAll() {
    const cursor = await this.Order.aggregate([
      {
        $lookup: {
          from: "products",
          localField: "car_name",
          foreignField: "name",
          as: "product",
        },
      },
      { $unwind: "$product" },
    ]);
    return await cursor.toArray();
  }

  async findByPhone(phone) {
    return await this.Order.aggregate([
      {
        $lookup: {
          from: "products",
          let: { nameCar: "$car_name", phone: "$phone" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
                    { $eq: ["$name", "$$nameCar"] },
                    { $eq: ["$$phone", phone] },
                  ],
                },
              },
            },
          ],
          as: "product",
        },
      },
      { $unwind: "$product" },
    ]).toArray();

    // find({
    //   phone: { $regex: new RegExp(phone), $options: "i" },
    // }).toArray();
  }

  async findById(name) {
    return await this.Order.findOne({
      name: name,
    });
  }

  async update(id, payload) {
    const filter = {
      _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
    };
    const result = await this.Order.findOneAndUpdate(
      filter,
      {
        $set: {
          ...payload,
          updateAt: new Date().toLocaleString("vi-VN", {
            timeZone: "Asia/Ho_Chi_Minh",
          }),
        },
      },
      { returnDocument: "after" }
    );
    if (result.value.status == "Đã xác nhận") {
      const nodemailer = require("nodemailer");
      var transporter = nodemailer.createTransport({
        // config mail server
        service: "Gmail",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASS,
        },
      });
      var mainOptions = {
        from: "Thao Ghi",
        to: result.value.email,
        subject: "MERCEDES RESPONSE",
        text: "You recieved message from Thao Ghi",
        html:
          "<h6>Xin chào" +
          result.value.name +
          "!</h6><br/><p>Chúng tôi đã xem thông tin đăng ký từ bạn, Chúng tôi sẽ sớm sắp lịch và thông báo cho bạn sau</p>",
      };
      transporter.sendMail(mainOptions, function (err, info) {
        if (err) {
          console.log(err);
        } else {
          console.log("Message sent: " + info.response);
        }
      });
    }

    return result;
  }

  async delete(id) {
    const result = await this.Order.findOneAndDelete({
      _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
    });

    return result.value;
  }
}

module.exports = OrderService;

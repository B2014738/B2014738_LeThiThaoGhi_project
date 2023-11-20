const { ObjectId } = require("mongodb");

class ProductService {
  constructor(client) {
    this.Product = client.db().collection("products");
  }
  extractProductData(payload) {
    const product = {
      type_id: payload.type_id,
      name: payload.name,
      price: parseInt(payload.price) ,
      image: payload.image,
      details: {
        loaiSo: payload['details[loaiSo]'],
        fuel: payload['details[fuel]'],
        color: {
          inSide: payload['details[color][inSide]'],
          outSide: payload['details[color][outSide]'],
        },
        volume: payload['details[volume]'],
        soXiLanh: parseInt(payload['details[soXiLanh]']) ,
        chieuRong: parseInt(payload['details[chieuRong]']) ,
        weight: parseInt(payload['details[trongLuong]']) ,
        tocDo: parseInt(payload['details[tocDo]']) ,
        soCho: parseInt(payload['details[soCho]']) ,
        dungTich: parseInt(payload['details[dungTich]']) ,
        chieuDai: parseInt(payload['details[chieuDai]']) ,
        chieuCao: parseInt(payload['details[chieuCao]']) ,
        trongLuong: parseInt(payload['details[trongLuong]']) ,
        soCua: parseInt(payload['details[soCua]']) ,
      },
    };

    // remove undefined fields
    Object.keys(product).forEach(
      (key) => product[key] === undefined && delete product[key]
    );
    return product;
  }

  async create(file, payload) {
    const product = this.extractProductData({...payload,image:file.name});
    const fs = require('fs');
        let folderPath = "D:\\PTUDWeb\\frontend\\src\\assets\\Images\\Mercedes";
        try {
            
            if (!fs.existsSync(folderPath)) {
                fs.mkdirSync(folderPath);
            }
            
        } catch (err) {
            console.error(err);
        }
        console.log(file.name);
        file.mv(`${folderPath}/${file.name}`, function (err) {
            if (err) {
                console.log(err)
                return res.status(500).send({ msg: "Error occured" });
            }
        });
    const result = await this.Product.insertOne(
      product
    );
    return result.value;
  }

  async find(filter) {
    const cursor = await this.Product.find(filter);
    return await cursor.toArray();
  }

  async findByName(name) {
    return await this.find({
      name: { $regex: new RegExp(name), $options: "i" },
    });
  }

  async findById(id) {
    return await this.Product.findOne({
      _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
    });
  }

  async update(id,file, payload) {
    const filter = {
      _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
    };
    var update={};
    if(!file){
      update = this.extractProductData(payload);
    }else{
      update= this.extractProductData({...payload,image:file.name});
        let folderPath = "D:\\PTUDWeb\\frontend\\src\\assets\\Images\\Mercedes";
        file.mv(`${folderPath}/${file.name}`, function (err) {
            if (err) {
                console.log(err)
                return res.status(500).send({ msg: "Error occured" });
            }
        });
    }
    const result = await this.Product.findOneAndUpdate(
      filter,
      { $set: update },
      { returnDocument: "after" }
    );
    return result.value;
  }

  async delete(id) {
    const result = await this.Product.findOneAndDelete({
      _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
    });

    return result.value;
  }
}

module.exports = ProductService;

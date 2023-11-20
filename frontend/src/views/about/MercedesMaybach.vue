<style scoped>

.banner-title {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: beige;
}

.title {
  position: relative;
  top: 100px;
  left: 100px;
  width: 300px;
}

.title h4 {
  font-size: 2em;
}

.btn {
  padding: 10px 20px;
  background-color: rgba(0, 0, 0, 0.815);
  color: aliceblue;
}

.img-title {
  font-size: 1em;
  font-weight: 600;
  margin-top: 20px;
}
</style>
<script>
import OrderService from '@/services/order.service';
import { useUserStore } from "@/stores/UserStore";
export default {
  data() {
    const userStore = useUserStore();
    return {
      userStore,
      data: {}
    }
  },
  methods: {
    async getData() {
      this.data = this.userStore.user
    },
    async handleSubmit() {
      try {
        await OrderService.create({ ...this.data, nameCar: "Mercedes-Maybach S-Class"});
        alert("Đã gửi! Hãy đợi chúng tôi liên lạc")
      } catch (error) {
        alert('Gửi không thành công')
      }
    }
  },
  created() {
    this.getData();
  }

}
</script>
<template>
  <main>
    <div class="container-fluid mb-5 position-relative p-0">
      <div class="row m-0">
        <img src="@/assets/Images/Mercedes_MAYBACH/z223.webp" class="p-0" />
      </div>
      <div class="banner-title row m-0">
        <div class="title">
          <h4>Mercedes-Benz EQE SUV</h4>
          <h6>Định nghĩa một tuyệt tác</h6>
          <p class="fw-bold mt-4">Giá: 9.399.000.000 <i class="fa-solid fa-dong-sign"></i></p>
          <div class="mt-5">
            <button class="btn" data-bs-toggle="modal" data-bs-target="#addUser">
              Gửi yêu cầu mua hàng
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="addUser" tabindex="-1" aria-labelledby="addUserLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="addUserLabel">Product</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-4 px-5">
            <div class="">
              <div class="form-floating mb-3">
                <input v-model="this.data.name" type="text" class="form-control rounded-0" id="floatingInput"
                  placeholder="">
                <label for="floatingInput">Họ tên</label>
              </div>
            </div>
            <div class="">
              <div class="form-floating mb-3">
                <input v-model="this.data.phone" type="text" class="form-control rounded-0" id="floatingInput"
                  placeholder="">
                <label for="floatingInput">Số điện thoại</label>
              </div>
            </div>
            <div class="">
              <div class="form-floating mb-3">
                <input v-model="this.data.email" type="email" class="form-control rounded-0" id="floatingInput"
                  placeholder="">
                <label for="floatingInput">Email</label>
              </div>
            </div>
            <div class="">
              <div class="form-floating mb-3">
                <input v-model="this.data.address" type="text" class="form-control rounded-0" id="floatingInput"
                  placeholder="">
                <label for="floatingInput">Địa chỉ</label>
              </div>
            </div>
            <div>
              <h6 class="text-primary border-primary" style="border-bottom: 1px solid ;width:fit-content">Chính sách bảo
                vệ dữ
                liệu</h6>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" checked id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  Tôi đã đọc và đồng ý với chính sách bảo vệ dữ liệu*
                </label>
              </div>
              <div class="mt-4">
                <p class="m-0">Tôi đồng ý nhận thông tin qua</p>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" checked>
                  <label class="form-check-label" for="inlineCheckbox1">SĐT</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" checked>
                  <label class="form-check-label" for="inlineCheckbox2">SMS/MMS</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" checked>
                  <label class="form-check-label" for="inlineCheckbox2">Email</label>
                </div>
              </div>

            </div>


          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary rounded-0" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary  rounded-0" data-bs-dismiss="modal"
              @click="this.handleSubmit()">Xác nhận</button>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="mb-5">
          <h6>Điểm nổi bật</h6>
          <h5>Vượt tầm kiệt tác</h5>
          Hoàn mỹ trong việc lựa chọn chất liệu đến sự tinh tế của từng đường
          chỉ may tương phản đầy ấn tượng, <br />Mercedes-Maybach S-Class mới
          tái thiết chuẩn mực sang trọng.<br />
          Trợ lý cá nhân MBUX với những công nghệ ưu việt đánh dấu khởi nguyên
          của một trải nghiệm lái xe bậc nhất.
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="row justify-content-end ms-auto mb-5" style="width: 75%">
              <img src="@/assets/Images/Mercedes_MAYBACH/z223-1.webp" />
              <p class="img-title">
                Thiết kế mâm xe mang dấu ấn Mercedes-Maybach độc quyền.
              </p>
            </div>
            <div class="row mb-5">
              <img src="@/assets/Images/Mercedes_MAYBACH/z223-2.webp" />
              <p class="img-title">
                Ốp gỗ nội thất designo màu nâu với các đường viền aluminium
                trang trí độc đáo.
              </p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row mb-5">
              <img src="@/assets/Images/Mercedes_MAYBACH/z223-3.webp" />
              <p class="img-title">
                Tuyên ngôn của thiết kế duy mỹ với các chi tiết mạ crôm sang
                trọng.
              </p>
            </div>
            <div class="row mb-5" style="width: 60%">
              <img src="@/assets/Images/Mercedes_MAYBACH/z223-4.webp" />
              <p class="img-title">
                Trực quan tối ưu với hệ thống thông tin giải trí MBUX cho hàng
                ghế sau.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-5">
        <div class="mb-5">
          <h6>Thiết kế</h6>
          <h5>Sang trọng thuần khiết</h5>
          Vẻ lịch lãm truyền thống cùng tiện nghi hiện đại bậc nhất được thể
          hiện ở mọi góc độ. Khả năng vận hành<br />
          vượt trội của chiếc xe gây ấn tượng mạnh ngay từ cái nhìn đầu tiên.
        </div>
        <div class="row">
          <div class="col-md-6">
            <img src="@/assets/Images/Mercedes_MAYBACH/z223-5.webp" style="width: 100%" />
            <p class="img-title">Vè thiết kế ngoại thất</p>
          </div>
          <div class="col-md-6">
            <img src="@/assets/Images/Mercedes_MAYBACH/z223-6.webp" style="width: 100%" />
            <p class="img-title">Về thiết kế nội thất</p>
          </div>
        </div>
      </div>
      <div class="mb-5">
        <div class="mb-5">
          <h6>Tiện nghi</h6>
          <h5>Đẳng cấp thương gia</h5>
          Sự hoàn mỹ trong phong cách di chuyển thời thượng chính là chuẩn mực
          của Mercedes-Maybach S-Class.<br />
          Lịch lãm, sang trọng cùng trang bị tiện nghi đẳng cấp mang đến những
          trải nghiệm lái độc đáo khó quên
        </div>
        <div class="row">
          <div class="col-md-7">
            <img
              src="https://mercedes-vietnam.com.vn/wp-content/uploads/2022/01/Mercedes-EQE-2023-M%E1%BA%ABu-SUV-m%E1%BB%9Bi-%C4%91%C6%B0%E1%BB%A3c-th%E1%BB%AD-nghi%E1%BB%87m-2.jpg"
              style="width: 100%" />
          </div>
          <div class="col-md-5">
            <p class="h4 ps-4">Tiện nghi nổi bật</p>
            <ul style="font-weight: 600">
              <li>
                Hệ thống giải trí MBUX thế hệ mới với màn hình cảm ứng trung tâm
                12,8-inch công nghệ OLED.
              </li>
              <li>
                Chức năng điều khiển bằng cử chỉ MBUX Interior Assistant cho
                hàng ghế trước và hàng ghế sau.
              </li>
              <li>
                Gói trang bị Warmth Comfort với chức năng sưởi ấm cho tựa tay ở
                cửa trước và sau, tựa tay trung tâm phía trước và vô lăng.
              </li>
              <li>
                Chức năng sưởi ấm cổ và vai cho hàng ghế sauHệ thống lọc không
                khí, bụi bẩn và vi khuẩn cao cấp ENERGIZING AIR CONTROL.
              </li>
              <li>Cửa sau đóng mở bằng điện.</li>
              <li>
                Kính an toàn nhiều lớp cao cấp với chức năng cách âm, cách nhiệt
                & phản xạ tia hồng ngoại.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mb-5">
        <div class="mb-5">
          <h6>Thông số</h6>
          <h5>Công suất vượt trội cho trải nghiệm độc đáo.</h5>
          Động cơ của Mercedes-Maybach S-Class: kiệt tác của tinh hoa công nghệ
          Đức. <br />Đó là sự kết hợp hài hoà giữa khả năng di chuyển êm mượt và
          hiệu suất lái vượt trội.
        </div>
        <div class="row">
          <div class="col-md-5">
            <p class="pb-3">công suất 385kW và mô-men xoắn 855Nm</p>
            <h2 class="pb-3">pin 90,6kWh</h2>
            <p class="pb-3">tại 5000 vòng/phút</p>
            <hr />
            <h2 class="pb-3">Động cơ</h2>
            <p class="pb-3">Hai mẫu SUV này sẽ được hỗ trợ bởi Kiến trúc xe điện (EVA) chuyên dụng của Mercedes, dùng chung với mẫu sedan EQE và xe nâng EQS, sử dụng kiến ​​trúc điện 400V.</p>
            
          </div>
          <div class="col-md-7">
            <img
              src="https://images.carexpert.com.au/resize/3000/-/app/uploads/2021/09/mercedes-maybach-eqs-suv-concept-10.jpg"
              style="width: 100%" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

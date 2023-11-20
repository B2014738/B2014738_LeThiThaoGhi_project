<style scoped>

.banner-title {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
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
        await OrderService.create({ ...this.data, nameCar: "Mercedes-Maybach S-Class" });
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
        <img src="@/assets/Images/Mercedes_AMG_GT/1.webp" class="p-0" />
      </div>
      <div class="banner-title row m-0">
        <div class="title">
          <h4>Mercedes AMG GT</h4>
          <h6>Chế tác từ những bậc thầy tốc độ</h6>
          <p class="fw-bold mt-4">Giá: 11.590.000.000 <i class="fa-solid fa-dong-sign"></i></p>
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
          <h5>Ấn tượng không ngừng</h5>
          Mercedes-AMG GT là một chiếc Gran Turismo đầy uy lực với động cơ AMG 4.0L V8 tăng áp kép. Điều<br />
          này được thể hiện rõ nét qua bộ đôi AMG GT C và AMG GT R, giúp nâng trải nghiệm<br />
          lái hiệu suất cao lên một tầm cao mới.
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="row justify-content-end ms-auto mb-5" style="width: 75%">
              <img src="@/assets/Images/Mercedes_AMG_GT/2.jpeg" />
              <p class="img-title">
                Mercedes-AMG GT R
              </p>
            </div>
            <div class="row mb-5">
              <img src="@/assets/Images/Mercedes_AMG_GT/4.jpeg" />
              <p class="img-title">
                Mercedes-AMG GT R
              </p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row mb-5">
              <img src="@/assets/Images/Mercedes_AMG_GT/3.jpeg" />
              <p class="img-title">
                Mercedes-AMG GT R
              </p>
            </div>
            <div class="row mb-5" style="width: 60%">
              <img src="@/assets/Images/Mercedes_AMG_GT/5.jpeg" />
              <p class="img-title">
                Mercedes-AMG GT R
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-5">
        <div class="mb-5">
          <h6>Thiết kế</h6>
          <h5>Sức mạnh của tốc độ trong diện mạo thuần khiết nhất.</h5>
          Mercedes-AMG GT: ngoại hình năng động, khoang lái thể thao.
        </div>
        <div class="row">
          <div class="col-md-6">
            <img src="@/assets/Images/Mercedes_AMG_GT/6.webp" style="width: 100%" />
            <p class="img-title">Về thiết kế ngoại thất</p>
          </div>
          <div class="col-md-6">
            <img src="@/assets/Images/Mercedes_AMG_GT/7.webp" style="width: 100%" />
            <p class="img-title">Về thiết kế nội thất</p>
          </div>
        </div>
      </div>
      <div class="mb-5">
        <div class="mb-5">
          <h6>Tiện nghi</h6>
          <h5>Tốc độ và an toàn. Tuy hai mà một. </h5>
          Bên cạnh hiệu suất vượt trội, Mercedes-AMG GT còn chú tâm đến sự an toàn của bạn. Với hàng loạt <br />hệ thống
          an
          toàn và hỗ trợ trên xe, bạn không chỉ đến nơi nhanh hơn, mà còn an tâm và thư thái hơn.
        </div>
        <div class="row">
          <div class="col-md-7">
            <p class="h4 fw-bold">Tích năng nổi bật</p>
            <ul style="font-weight: 600">
              <li>
                Hệ thống phanh thích ứng ADAPTIVE BRAKE
              </li>
              <li>
                Hệ thống phanh hiệu suất cao AMG.
              </li>
              <li>
                Hệ thống an toàn PRE-SAFE.
              </li>
              <li>
                Hệ thống ổn định thân xe điện tử ESP và hỗ trợ ổn định khi gió thổi ngang.
              </li>
              <li>Hệ thống phanh ADAPTIVE với chức năng hỗ trợ dừng xe (HOLD) và hỗ trợ khởi hành ngang dốc (Hill-Start
                Assist)</li>
              <li>
                Phanh tay điều khiển điện với chức năng nhả phanh thông minh
              </li>
              <li>
                Hệ thống khóa cửa trung tâm với chức năng tự động khóa khi xe chạy và mở khóa trong trường hợp khẩn cấp
              </li>
              <li>
                Hệ thống cảm biến hỗ trợ đỗ xe PARKTRONIC
              </li>
            </ul>
          </div>
          <div class="col-md-5">

            <img src="@/assets/Images/Mercedes_AMG_GT/8.webp" style="width: 100%" />
          </div>
        </div>
      </div>
      <div class="mb-5">
        <div class="mb-5">
          <h6>Thông số</h6>
          <h5>Thông số lý tưởng của một vận động viên cừ khôi</h5>
          Mọi thông số kỹ thuật, dữ kiện và thông tin của Mercedes-AMG GT R.
        </div>
        <div class="row">
          <div class="col-md-4">
            <p class="pb-3">Công suất cực đại</p>
            <h2 class="pb-3">430 kW (585 HP)</h2>
            <p class="pb-3">tại 5000 vòng/phút</p>
            <hr />
            <p class="pb-3">Khả năng tăng tốc từ 0-100 km/h:</p>
            <h2 class="pb-3">3,6 giây</h2>
          </div>
          <div class="col-md-8">
            <img src="@/assets/Images/Mercedes_AMG_GT/9.webp" style="width: 100%" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

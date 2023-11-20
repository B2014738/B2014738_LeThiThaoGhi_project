<style scoped>
.title-banner {
  position: absolute;
  top: 0px;
  color: aliceblue;
  background-color: rgba(0, 0, 0, 0.568);
  width: 100%;
  height: 100%;
}

.title-banner .title {
  width: 400px;
  position: relative;
  top: 150px;
  left: 100px;
}

button {
  border: 0;
  border-radius: 20px;
}
</style>
<template>
  <main class="">
    <div class="container-fluid p-0 position-relative">
      <div class="row m-0">
        <img
          src="https://sales.mercedes-autoforum.ru/images/content/merc_benz_s_680_salon_1.jpg"
          alt="" class="p-0" />
      </div>
      <div class="title-banner row m-0">
        <div class="title">
          <h4>Buổi ra mắt thế giới kỹ thuật số</h4>
          <h2>Mercedes-Benz EQE SUV</h2>
          <button class="bg-white py-2 px-4 fw-bold">
            <router-link class="text-decoration-none text-dark" to="/about">Xem chi tiết <i
                class="fa-solid fa-chevron-right"></i></router-link>
          </button>
        </div>
      </div>
    </div>
    

    <div class="container">
      <div class="row py-5">
        <div class="col-lg-6 d-flex flex-column">
          
          <div class="mt-5">
            <img
              src="https://dorsiafinance.co.uk/wp-content/uploads/10-Facts-About-Mercedes-Benz.webp"
              alt="" class="w-100" />
          </div>
          <div class="mt-auto">
            <p>
              Mercedes-Benz thực sự là một thương hiệu toàn cầu, với các cơ sở sản xuất và đại lý ở các nước trên toàn thế giới. Thương hiệu này có mặt ở hơn 200 quốc gia và bán được hơn hai triệu xe mỗi năm.
            </p>
            <button class="bg-dark text-white py-2 px-4 fw-bold mt-4">
              Tìm hiểu thêm <i class="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
        <div class="col-lg-6 text-left">
          <p>G-Class, còn được gọi là G-Wagon, đã trở thành một biểu tượng trong thế giới xe SUV hạng sang. Mercedes sản xuất chiếc xe này lần đầu tiên vào năm 1979 và thiết kế của nó vẫn không thay đổi trong hơn bốn thập kỷ. Dù có vẻ ngoài hình hộp nhưng G-Class lại được đánh giá cao nhờ khả năng off-road và nội thất sang trọng.</p>
          <img
            src="https://dorsiafinance.co.uk/wp-content/uploads/Mercedes-G-Wagon.webp"
            alt="" class="w-100" />
        </div>
      </div>
    </div>
    <div style="background-color: gray;" class="text-white py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h5>EQS : S-Class trong phân khúc xe điện</h5>
            <img
              src="https://img.tinxe.vn/resize/1000x-/2022/10/26/uU7VvIGZ/eqs5803-3d4b.jpg"
              alt="" style="width: 85%" />
          </div>
          <div class="col-md-6 mt-auto">
            <h5>CLK GTR AMG Roadster - Mercedes đắt nhất thế giới</h5>

            <img
              src="https://mercedesdanang.com/wp-content/uploads/2021/12/Truy-lung-cac-sieu-xe-Mercedes-dat-nhat-the-gioi-10.jpg"
              alt="" style="width: 100%" />
          </div>
        </div>
      </div>
    </div>
    
  </main>
</template>
<script></script>

<template>
  <div class="pt-3 d-flex align-items-center justify-content-center">
          <img src="@/assets/svg/Logo.svg" width="40" />
    <h3 class="m-0 ms-2"> Mercedes-Benz</h3>
  </div>
  <hr />
  <div>
    <div class="ms-4">
      
      <div class=" mb-3">
        <router-link to="/admin"><i class="fas fa-box me-3"></i>Quản lý Sản Phẩm</router-link>
      </div>
      <div class=" mb-3">
        <router-link to="/admin/request"><i class="fas fa-file me-3"></i>Quản lý Yêu Cầu</router-link>
      </div>
      <div class=" mb-3">
        <router-link to="/admin/customer"><i class="fas fa-user-circle me-3"></i>Quản lý Người Dùng</router-link>
      </div>

    </div>
  </div>

</template>

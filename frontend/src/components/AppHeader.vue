<template>
  <header>
    <div class="logo">
      <router-link to="/">
        <h2 class="text-black text-center pt-3 text-uppercase" style="font-weight: bold">
          <img src="@/assets/svg/Logo.svg" width="50" />
        </h2>
      </router-link>
      <div class="row m-0 align-items-center">
        <div class="col">
          <form role="search" method="POST" class="search-form" action="/search" name="search-form">
            <label>
              <input type="search" class="search-field" placeholder="What are you looking for?" value=""
                name="search" />
            </label>
            <input type="submit" class="search-submit" value="Search" />
          </form>
        </div>

        <div v-if="this.userStore.user.name" class="col-sm-12 col-md-5 col-lg-3 user-login text-end">
          <div class="user">
            <i class="far fa-user text-dark"></i>
            {{ this.userStore.user.name }} |
            <a @click="onSignOut" class="text-danger fw-bold sign-out">
              Sign Out
            </a>
          </div>
        </div>
        <div v-else class="col-sm-12 col-md-5 col-lg-3 user-login text-end">
          <div class="user">
            <i class="far fa-user text-dark"></i>
            <router-link to="/login" class="ms-2 text-dark fw-bold">Đăng nhập</router-link>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="position-sticky" style="top: 0; z-index: 1000">
    <nav class="navbar navbar-expand-lg " style="background-color:rgba(255,255,255,0.9)">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul class="navbar-nav" style="font-size: 18px;">
            <li class="nav-item me-4">
              <router-link class="nav-link text-black" to="/">TRANG CHỦ</router-link>
            </li>
            <li class="nav-item me-4">
              <router-link class="nav-link text-black" to="/product">SẢN PHẨM</router-link>
            </li>
            <li class="nav-item me-4">
              <router-link class="nav-link text-black" to="/about">BỘ SƯU TẬP 2023</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-black" to="/order">ĐÃ ĐẶT
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import { useUserStore } from "@/stores/UserStore";
export default {
  data() {
    const userStore = useUserStore();
    return {
      userStore,
    };
  },
  methods: {
    async onSignOut() {
      this.userStore.user = {};
    },
  },
};
</script>
<style scoped>
.sign-out {
  cursor: pointer;
}
</style>

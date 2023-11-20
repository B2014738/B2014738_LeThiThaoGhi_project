<script>
import AppHeader from "@/components/AdminHeader.vue";
import SideBar from "@/components/AdminSidebar.vue";

export default {
  components: {
    AppHeader,
    SideBar,
  },
};
</script>

<template>
  <div>
    <div class="container-fluid p-0">
      <div class="row p-0 m-0">
        <div class="col-3 bg-dark text-light sidebars">
          <SideBar />
        </div>
        <div class="col-9 main-admin p-0">
          <AppHeader />
          <router-view />
          <div class="container-fluid footer-admin text-center m-0">
            <p class="py-3 m-0">Copyright © Designed By Thao Ghi - B2014738</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
@import "@/assets/css/admin.css";
</style>

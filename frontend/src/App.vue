<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<template>
  <router-view />
</template>

<style>
@import "@/assets/css/home.css";
* {
  font-family: Nunito,sans-serif;
  /* font-family: Aguafina Script!important; */
    /* font-family: Lemon!important; */
    /* font-family: "MBCorpo Title", "DaimlerCAC-Regular", "DaimlerCACArab-Regular", serif; */
}
h1,h2,h3,h4,h5,h6{
  font-weight: bold !important;;
}
</style>

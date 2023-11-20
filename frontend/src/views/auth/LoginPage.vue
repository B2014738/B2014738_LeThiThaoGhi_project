<style>
@import "@/assets/css/login.css";
</style>

<template>
  <main class="py-5 main">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="form col-sm-12 col-md-8 col-lg-4">
          <p class="text-center mb-4 content_signin fw-bold">Mercedes-Benz</p>
          
          <form
            id="signinForm"
            method="post"
            class="form-horizontal"
            @submit.prevent="onSubmit(this.account)"
          >
            <div class="form-group mb-3">
              <label for="username" class="form-label">Username:</label>
              <input
                type="text"
                class="form-control py-2"
                id="username"
                placeholder="Enter your username"
                required
                v-model="this.account.username"
              />
            </div>
            <div class="form-group mb-3 passw">
              <label for="pwd" class="form-label">Password:</label>
              <input
                type="password"
                class="form-control py-2"
                id="password"
                placeholder="Enter your password"
                name="password"
                v-model="this.account.password"
                required
              />
            </div>
            {{ this.error }}
            <div class="text-end mb-3">
              
              <label class="text-primary fw-bold">Forget Password?</label>
            </div>
            <button
              type="submit"
              class="btn btn-dark col-12 btn_submit py-2 mb-3"
            >
              LOGIN
            </button>
          </form>
          <button
            type="button"
            class="btn btn-dark col-12 btn_create py-2 mb-3"
          >
            <router-link to="/register">CREATE ACCOUNT</router-link>
          </button>
          <p class="text-center" style="font-size: 16px">OR</p>

          <button class="btn btn-light mb-3 col-12 btn_gg">
            <img
              src="@/assets/picture/Google_logo.webp"
              alt=""
              style="height: 40px"
            />
            <router-link to="https://www.google.com/"
              >CONTINUTE WITH GOOGLE</router-link
            >
          </button>
          <button class="btn btn-light mb-4 col-12 btn_fb">
            <img
              src="@/assets/picture/facebook_logo.webp"
              alt=""
              style="height: 40px"
            />
            <router-link to="https://www.facebookcom/"
              >CONTINUTE WITH FACEBOOK</router-link
            >
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { useUserStore } from "@/stores/UserStore";
import User from "@/services/user.service";
export default {
  data() {
    const userStore = useUserStore();
    return {
      account: {
        username: "",
        password: "",
      },
      error: null,
      userStore,
    };
  },
  methods: {
    async onSubmit(data) {
      try {
        this.userStore.user = await User.login(data);
        this.userStore.isLogin = true;
        if (this.userStore.user.account.permission === 0) {
          this.$router.push("/admin");
        } else {
          this.$router.push("/");
        }
      } catch (err) {
        this.error = err.response.data.message;
      }
    },
  },
};
</script>

<style>
@import "@/assets/css/login.css";
</style>
<template>
  <main class="py-5 main">
    <div class="container">
      <div class="row justify-content-center">
        <div class="form col-sm-12 col-md-8 col-lg-4">
          <p class="text-center mb-3 content_signin fw-bold">Sign Up</p>
          <form @submit.prevent="onSubmit(this.data)" class="form-horizontal">
            <div class="form-group mb-3 ps-0">
              <label for="username" class="form-label">Username:</label>
              <input
                type="text"
                class="form-control py-2"
                id="username"
                placeholder="Enter username"
                v-model="this.data.account.username"
              />
            </div>
            <div class="form-group mb-3 pe-0">
              <label for="phone" class="form-label">Phone:</label>
              <input
                type="text"
                class="form-control py-2"
                id="phone"
                placeholder="Enter phone"
                v-model="this.data.phone"
              />
            </div>
            <div class="form-group mb-3 passw">
              <label for="pwd" class="form-label">Password:</label>
              <input
                type="password"
                class="form-control py-2"
                id="pwd"
                placeholder="Enter password"
                v-model="this.data.account.password"
              />
            </div>

            <div class="form-group mb-3 passw1">
              <label for="cpwd" class="form-label">Confirm Password:</label>
              <input
                type="password"
                class="form-control py-2"
                id="cpwd"
                placeholder="Confirm password"
                v-model="this.confirmPass"
              />
            </div>
            <div class="mb-3">
              <label>
                By Signing up you argee to our <strong>Terms Conditions & privacy policies</strong>.
              </label>
            </div>
            <!-- <p class="text-danger fw-bold">Lỗi</p> -->

            <button
              type="submit"
              class="btn btn-dark col-12 btn_submit py-2 mb-4 text-uppercase"
            >
              Create account
            </button>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import User from "@/services/user.service"
export default {
  data() {
    return {
      data: {
        phone: "",
        account: {
          username: "",
          password: "",
        },
      },
      confirmPass: "",
    };
  },
  methods: {
    async onSubmit(data) {
      await User.create(data);
    },
  },
};
</script>

<style scoped>
.dropdown-menu {
  left: -90px;
  min-width: 10rem;
}
.dropdown {
  cursor: pointer;
}
.icon {
  font-size: 1rem;
}
</style>

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
      this.$router.push("/login");
    },
  },
};
</script>

<template>
  <nav class="navbar navbar-light bg-white shadow justify-content-end pe-5">
    <div class="icon-menu d-flex align-items-center">
      <i class="far fa-bell"></i>
      <div class="dropdown">
        <a data-bs-toggle="dropdown">
          <img
            src="@/assets/picture/admin.jpg"
            width="40"
            height="40"
            class="rounded-circle border border-3"
          />
        </a>

        <ul class="dropdown-menu px-3 rounded-0">
          <li><i class="fa-regular fa-user icon"></i> Admin</li>

          <hr />
          <li><i class="fa-solid fa-gear icon"></i> Setting</li>
          <li class="text-danger" @click="onSignOut">
            <i class="fa-solid fa-arrow-right-from-bracket icon"></i> Log out
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

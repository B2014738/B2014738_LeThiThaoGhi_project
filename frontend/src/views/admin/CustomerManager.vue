<script>
import UserService from '@/services/user.service';
export default {
  data() {
    return {
      users: [],
      productsTemp: [],
      filter: '',
      data: {
        account: {
        }
      },
    }
  },
  methods: {
    async getData() {
      this.users = await UserService.getAll();
      this.users = this.users.reverse();
    },
    async handleAdd() {
      await UserService.create(this.data);
      this.getData();
    },
    async handleUpdate() {
      try {
        if (confirm('Xác nhận cập nhật??')) {
        const rs = await UserService.update(this.data._id, this.data);
        alert(rs.message);
      }
      this.getData();
      } catch (error) {
        alert(error)
      }
    },
    async delete(id) {
      try {
        if(confirm('Chắc chắn xóa??')){
        const rs = await UserService.delete(id);
        alert(rs.message);
      }
      this.getData();
      } catch (error) {
        alert(error)
      }
    }
  },

  mounted() {
    this.getData();
  }

}
</script>
<template>
  <div class="container ps-0" style="min-height: 100vh">
    <div class="row san-pham mt-4 ms-0">
      <div class="thong-ke text-center mb-3">
        <h4 class="fw-bold">DANH SÁCH NGƯỜI DÙNG</h4>
      </div>
      <div class="mb-4 text-end">
        <button type="button" class="btn btn-outline-dark rounded-0" data-bs-toggle="modal" data-bs-target="#addUser">
          <i class="fa-solid fa-plus"></i> Thêm Người Dùng
        </button>
        <button type="button" class="btn btn-dark rounded-0" @click="this.getData()">
          Cập Nhật
        </button>
      </div>
      <div class="modal fade" id="addUser" tabindex="-1" aria-labelledby="addUserLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="addUserLabel">User</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-floating mb-3">
                    <input v-model="this.data.name" type="text" class="form-control rounded-0" id="floatingInput"
                      placeholder="">
                    <label for="floatingInput">Họ tên</label>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-floating mb-3">
                    <input v-model="this.data.phone" type="text" class="form-control rounded-0" id="floatingInput"
                      placeholder="">
                    <label for="floatingInput">Số điện thoại</label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-floating mb-3">
                    <input v-model="this.data.email" type="text" class="form-control rounded-0" id="floatingInput"
                      placeholder="">
                    <label for="floatingInput">Email</label>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-floating mb-3">
                    <input v-model="this.data.address" type="text" class="form-control rounded-0" id="floatingInput"
                      placeholder="">
                    <label for="floatingInput">Địa chỉ</label>
                  </div>
                </div>

              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-floating mb-3">
                    <input v-model="this.data.account.username" type="text" class="form-control rounded-0"
                      id="floatingInput" placeholder="">
                    <label for="floatingInput">Username</label>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-floating mb-3">
                    <input v-model="this.data.account.password" type="password" class="form-control rounded-0"
                      id="floatingInput" placeholder="">
                    <label for="floatingInput">Mật khẩu</label>
                  </div>
                </div>

              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary rounded-0" data-bs-dismiss="modal">Close</button>
              <button v-if="this.data._id != null" type="button" class="btn btn-primary  rounded-0"
                data-bs-dismiss="modal" @click="this.handleUpdate()">Cập nhật</button>
              <button v-else type="button" class="btn btn-primary  rounded-0" data-bs-dismiss="modal"
                @click="this.handleAdd()">Thêm</button>
            </div>
          </div>
        </div>
      </div>
      <table class="table table-light table-hover text-center">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">HỌ TÊN</th>
            <th scope="col">SỐ ĐIỆN THOẠI</th>
            <th scope="col">EMAIL</th>
            <th scope="col">USERNAME</th>
            <th scope="col">THAO TÁC</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(e, i) in this.users">
            <th scope="row">{{ i + 1 }}</th>
            <td>{{ e.name }}</td>
            <td>{{ e.phone }}</td>
            <td>{{ e.email }}</td>
            <td>{{ e.account.username }}</td>
            <td><button type="button" class="btn btn-outline-dark me-1 px-2 rounded-0" @click="this.data = e"
                data-bs-toggle="modal" data-bs-target="#addUser">
                <i class="fas fa-edit"></i></button>
              <button class="btn btn-dark px-2 rounded-0" @click="this.delete(e._id)">
                <i class="fas fa-trash text-light"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  </div>
</template>

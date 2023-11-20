<script>
import OrderService from '@/services/order.service';
export default {
  data() {
    return {
      orders: [],
      allOrder: [],
    }
  },
  methods: {
    async getData() {
      this.allOrder = await OrderService.getAll();
      this.orders = this.allOrder.filter((e) => e.status == null)

    },
    async handleSubmit(id, bool) {
      try {
        if (bool) {
          await OrderService.update(id, { status: "Đã xác nhận" })
        } else {
          await OrderService.update(id, { status: "Đã từ chối" })
        }
        this.getData();
      } catch (error) {
        console.log(error);
      }
    },
    filter(e) {
      if (e.target.value == 2) {
        this.orders = this.allOrder;
      } else {
        this.orders = this.allOrder.filter((e) => e.status == null)
      }
    }
  },
  created() {
    this.getData();
  }

}
</script>
<template>
  <div class="container ps-0" style="min-height: 100vh">
    <div class="row san-pham mt-4 ms-0">
      <div class="thong-ke text-center mb-3">
        <h4 class="fw-bold">DANH SÁCH YÊU CẦU</h4>
      </div>
      <div class="row justify-content-between">
        <div class=" col-3">
          <select class=" rounded-0 ms-auto" style="padding:10px" @change="this.filter">
            <option value=1>Chưa xác nhận</option>
            <option value=2>Tất cả</option>
          </select>
        </div>
        <div class=" col-6 mb-4 text-end">
          <button type="button" class="btn btn-dark rounded-0" @click="this.getData">
            Cập Nhật
          </button>
        </div>
      </div>
      <table class="table table-light text-center">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">NGÀY GỬI</th>
            <th scope="col">NGÀY PHẢN HỒI</th>
            <th scope="col">KHÁCH HÀNG</th>
            <th scope="col">SỐ ĐIỆN THOẠI</th>
            <th scope="col">SẢN PHẨM</th>
            <th scope="col">TRẠNG THÁI</th>
          </tr>
        </thead>
        <tbody class="align-middle">
          <tr v-for="(e, i) in this.orders" :key="i">
            <th scope="row">{{ i + 1 }}</th>
            <td>{{ e.dateCreate }}</td>
            <td>{{ e.updateAt }}</td>
            <td class="fw-bold">{{ e.name }}</td>
            <td>{{ e.phone }}</td>
            <td class="fw-bold">{{ e.product.name }}</td>
            <td v-if="e.status==null">
              <button class="btn btn-outline-danger px-2 rounded-0" @click="this.handleSubmit(e._id, false)">
                <i class="fas fa-xmark mx-1"></i>
              </button>
              <button type="button" @click="this.handleSubmit(e._id, true)" data-bs-toggle="modal"
                data-bs-target="#addProduct" class="btn btn-outline-success ms-1 px-2 rounded-0">
                <i class="fas fa-check"></i></button>

            </td>
            <td v-else>{{e.status}}</td>

          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

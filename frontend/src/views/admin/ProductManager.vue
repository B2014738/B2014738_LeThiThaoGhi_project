<style scoped>
.product:hover {
  background-color: aliceblue;
}

.type-car:hover {
  cursor: pointer;
  filter: invert(53%) sepia(40%) saturate(3043%) hue-rotate(158deg) brightness(90%) contrast(101%);
}

.type {
  font-weight: 600;
  margin: 20px 0;
}

.side-bar {
  border-right: 1px solid rgba(128, 128, 128, 0.3);
}

.title {
  font-size: 1.4em;
  font-weight: 500;
  padding: 10px 0;
  border-bottom: 1px solid rgba(128, 128, 128, 0.3);
}

.btn-outline-secondary:focus,
.btn:focus,
.btn-outline-secondary.active:focus {
  box-shadow: none;
}

.icon {
  filter: invert(47%) sepia(11%) saturate(332%) hue-rotate(167deg) brightness(93%) contrast(91%);
}
</style>
<script>
import ProductService from '@/services/product.service';
export default {
  data() {
    return {
      products: [],
      productsTemp: [],
      filter: '',
      data: {
        details: {
          color: {}
        }
      },
      selectedFile: ''
    }
  },
  methods: {
    async getData() {
      this.productsTemp = await ProductService.getAll();
      this.products = this.productsTemp.reverse();
    },
    sort(e) {

      if (e.target.value == 1) {
        this.products.sort((a, b) => a.price - b.price)
        this.filter = "Giá từ thấp tới cao"
      } else if (e.target.value == 2) {
        this.products.sort((a, b) => b.price - a.price)
        this.filter = "Giá từ cao tới thấp"
      } else {
        this.filter = ''
      }
    },
    show(name) {
      this.filter = name;
      this.products = this.productsTemp.filter(e => e.type_id.includes(name) || e.details.fuel.includes(name))
    },
    changeFile(e) {
      const file = e.target.files[0];
      this.selectedFile = file;
    },
    buildFormData(formData, data, parentKey) {
      if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File)) {
        Object.keys(data).forEach(key => {
          this.buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
        });
      } else {
        const value = data == null ? '' : data;

        formData.append(parentKey, value);
      }
    },
    async handleAdd() {
      var formData = new FormData();
      formData.append('file', this.selectedFile);
      this.buildFormData(formData, this.data)
      await ProductService.create(formData);
      this.getData();
    },
    
    async handleUpdate() {
      var formData = new FormData();
      formData.append('file', this.selectedFile);
      this.buildFormData(formData, this.data)
      const rs = await ProductService.update(this.data._id, formData);
      this.getData();
      alert(rs.message);
    },
    async delete(id) {
      await ProductService.delete(id);
      this.getData();
    },
    search(title) {
      this.products = this.productsTemp.filter(e => e.name.toLowerCase().includes(title.target.value.toLowerCase()))
    }
  },

  mounted() {
    this.getData();
  }

}
</script>
<template>
  <div class="container ps-0" style="min-height: 100vh">
    <div class="row san-pham ms-0">
      <div class="thong-ke text-center mb-3 mt-3">
        <h4 class="fw-bold ">DANH SÁCH SẢN PHẨM</h4>
      </div>

      <div class="row">

        <div class=" col-md-6 mb-4">
          <input @input="this.search" type="text" class="form-control rounded-0 border-dark w-75"
            placeholder="Search..." style="background-color:transparent">

        </div>
        <div class=" col-md-6 mb-4 ">
          <div class="text-end">
            <button type="button" class="btn btn-outline-dark rounded-0" data-bs-toggle="modal"
              data-bs-target="#addProduct">
              <i class="fa-solid fa-plus"></i> Thêm Sản Phẩm
            </button>
            <button @click="this.getData()" type="button" class="btn btn-dark rounded-0">
              Cập Nhật
            </button>
          </div>
        </div>
      </div>


      <table class="table  table-light text-center">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">HÌNH ẢNH</th>
            <th scope="col" style="width: 50px">TÊN SẢN PHẨM</th>
            <th scope="col">LOẠI</th>
            <th scope="col">GIÁ SẢN PHẨM</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody class="align-middle">
          <tr v-for="(e, i) in this.products" :key="e._id">
            <th scope="row">{{ i + 1 }}</th>
            <td class="px-0 w-25">
              <img class="m-0" :src="'../src/assets/Images/Mercedes/' + e.image" width="190" />
            </td>
            <td class="px-0 w-25">{{ e.name }}</td>
            <td>{{ e.type_id.toUpperCase() }}</td>
            <td class="px-0 w-25 text-danger fw-bold">{{ new Intl.NumberFormat('it-IT', {
                style: 'currency', currency: 'VND'
              }).format(e.price).replace("VND", "")
            }} <i class="fa-solid fa-dong-sign"></i></td>
            <td>
              <button type="button" @click="this.data = e" data-bs-toggle="modal" data-bs-target="#addProduct"
                class="btn btn-outline-dark me-1 px-2 rounded-0">
                <i class="fas fa-edit"></i></button>
              <button class="btn btn-dark px-2 rounded-0" @click="this.delete(e._id)">
                <i class="fas fa-trash text-light"></i>
              </button>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
    <div class="modal fade" id="addProduct" tabindex="-1" aria-labelledby="addProductLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content rounded-0">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="addProductLabel">Product</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-6">
                <div class="form-floating mb-3">
                  <input v-model="this.data.name" type="text" class="form-control rounded-0" id="floatingInput"
                    placeholder="">
                  <label for="floatingInput">Tên sản phẩm</label>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-floating mb-3">
                  <input v-model="this.data.price" type="number" class="form-control rounded-0" id="floatingInput"
                    placeholder="">
                  <label for="floatingInput">Giá sản phẩm</label>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-floating">
                  <select v-model="this.data.type_id" class="form-select" id="floatingSelect"
                    aria-label="Loai San Pham">
                    <option selected>Lựa chọn</option>
                    <option value="sedan">Sedan</option>
                    <option value="compact">Compact</option>
                    <option value="suv">SUV</option>
                    <option value="offRoader">Off Roader</option>
                  </select>
                  <label for="floatingSelect">Loại sản phẩm</label>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-floating mb-3">
                  <input type="file" class="form-control rounded-0" @change="this.changeFile"
                    style="padding-top: 1.9rem" id="floatingInput" placeholder="">
                  <label for="floatingInput">Hình ảnh</label>
                </div>
              </div>
            </div>
            <div class="row  mb-3">
              <div class="col-md-6">
                <div class="form-floating">
                  <select v-model="this.data.details.loaiSo" class="form-select" id="floatingSelect"
                    aria-label="Loai San Pham">
                    <option selected>Lựa chọn</option>
                    <option value="Số sàn">Số sàn</option>
                    <option value="Số tự động">Số tự động</option>
                  </select>
                  <label for="floatingSelect">Kiểu số</label>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-floating">
                  <select v-model="this.data.details.fuel" class="form-select" id="floatingSelect"
                    aria-label="Loai San Pham">
                    <option selected>Lựa chọn</option>
                    <option value="Xăng">Xăng</option>
                    <option value="Điện">Điện</option>
                  </select>
                  <label for="floatingSelect">Loại nhiên liệu</label>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3">
                <div class="form-floating mb-3">
                  <input v-model="this.data.details.color.outSide" type="text" class="form-control rounded-0"
                    id="floatingInput" placeholder="">
                  <label for="floatingInput">Màu bên ngoài</label>
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-floating mb-3">
                  <input v-model="this.data.details.color.inSide" type="text" class="form-control rounded-0"
                    id="floatingInput" placeholder="">
                  <label for="floatingInput">Màu bên trong</label>
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-floating mb-3">
                  <input v-model="this.data.details.volume" type="text" class="form-control rounded-0"
                    id="floatingInput" placeholder="">
                  <label for="floatingInput">Công suất</label>
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-floating mb-3">
                  <input v-model="this.data.details.soXiLanh" type="number" class="form-control rounded-0"
                    id="floatingInput" placeholder="">
                  <label for="floatingInput">Số xi lanh</label>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3">
                <div class="form-floating mb-3">
                  <input v-model="this.data.details.chieuCao" type="number" class="form-control rounded-0"
                    id="floatingInput" placeholder="">
                  <label for="floatingInput">Chiều cao</label>
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-floating mb-3">
                  <input v-model="this.data.details.chieuRong" type="number" class="form-control rounded-0"
                    id="floatingInput" placeholder="">
                  <label for="floatingInput">Chiều rộng</label>
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-floating mb-3">
                  <input v-model="this.data.details.chieuDai" type="number" class="form-control rounded-0"
                    id="floatingInput" placeholder="">
                  <label for="floatingInput">Chiều dài</label>
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-floating mb-3">
                  <input v-model="this.data.details.trongLuong" type="number" class="form-control rounded-0"
                    id="floatingInput" placeholder="">
                  <label for="floatingInput">Trọng lượng</label>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3">
                <div class="form-floating mb-3">
                  <input v-model="this.data.details.tocDo" type="number" class="form-control rounded-0"
                    id="floatingInput" placeholder="">
                  <label for="floatingInput">Tốc độ</label>
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-floating mb-3">
                  <input v-model="this.data.details.soCho" type="number" class="form-control rounded-0"
                    id="floatingInput" placeholder="">
                  <label for="floatingInput">Số chỗ</label>
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-floating mb-3">
                  <input v-model="this.data.details.dungTich" type="number" class="form-control rounded-0"
                    id="floatingInput" placeholder="">
                  <label for="floatingInput">Dung tích</label>
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-floating mb-3">
                  <input v-model="this.data.details.soCua" type="number" class="form-control rounded-0"
                    id="floatingInput" placeholder="">
                  <label for="floatingInput">Số cửa</label>
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
  </div>
</template>

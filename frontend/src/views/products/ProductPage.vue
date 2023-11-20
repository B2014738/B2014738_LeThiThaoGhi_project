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
      filter: ''
    }
  },
  methods: {
    async getData() {
      this.productsTemp = await ProductService.getAll();
      this.products = this.productsTemp;
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
      setTimeout(() => {
        this.products = this.productsTemp.filter(e => e.type_id.includes(name) || e.details.fuel.includes(name))
      }, 100)
    }
  },

  mounted() {
    this.getData();
  }

}
</script>
<template>
  <main>
    <div class="container text-left my-5">
      <h3 class="my-4">Các dòng xe Mesrcedes-Benz</h3>
      <div class="row">
        <div class="btn-group col-10" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-outline-secondary rounded-0 active" style="width: 100px">
            Tất cả sản phẩm
          </button>
          <button type="button" class="btn btn-outline-secondary">
            <img src="@/assets/svg/Mercedes-eq.svg" />
          </button>
          <button type="button" class="btn btn-outline-secondary">
            <img src="@/assets/svg/AMG.svg" />
          </button>
          <button type="button" class="btn btn-outline-secondary">
            <img src="@/assets/svg/MAYBACH.svg" />
          </button>
          <button type="button" class="btn btn-outline-secondary rounded-0" style="width: 100px">
            Các dòng xe mới
          </button>
        </div>
        <div class="col-md-2 ms-auto">
          <select class=" rounded-0 ms-auto" style="padding:10px" @change="this.sort">
            <option value="">Sắp xếp theo</option>
            <option value="1">Từ Thấp tới Cao</option>
            <option value="2">Từ Cao tới Thấp</option>
          </select>
        </div>

      </div>
      <div class="row mt-5">
        <div class="col-lg-3 side-bar">
          <div>
            <h5 class="type">Loại nhiên liệu</h5>
            <p class="type-car" @click="this.show('Điện')">Điện</p>
            <p class="type-car" @click="this.show('Xăng')">Xăng</p>
          </div>
          <div>
            <h5 class="type">Loại thân xe</h5>
            <p class="type-car" @click="this.show('sedan')">
              <img src="@/assets/svg/Sedans.svg" width="40" />
              Sedan
            </p>
            <p class="type-car" @click="this.show('suv')">
              <img src="@/assets/svg/SUV.svg" width="40" />
              SUV
            </p>
            <p class="type-car" @click="this.show('compact')">
              <img src="@/assets/svg/Coupe.svg" width="40" />
              Compact
            </p>
            <p class="type-car" @click="this.show('offRoader')">
              <img src="@/assets/svg/Xedadung.svg" width="40" />
              Off-Roader
            </p>
            <p class="fw-bold type-car" @click="this.show('')">Xem tất cả</p>
          </div>
        </div>
        <div class="col-lg-9">
          <div v-if="this.filter == ''">
            <div class="row">
              <h3 class="col-md-2 m-0 ps-3">HOT</h3>

            </div>
            <hr style="width:105%" />
            <div class="row ms-4">
              <div class="product p-2 col-sm-6 col-md-6 col-lg-4 mb-3 text-center">
                <router-link to="/detail/album/MercedesMaybach"><img src="@/assets/Images/Mercedes_MAYBACH/iris.webp"
                    class="w-100 py-4" />
                </router-link>
                <p class="fw-bold m-0 mb-3 h5" style="height:3rem">Mercedes-Benz EQE SUV</p>
                <div class="" style="font-size:.8em;">
                  <p class="m-0"><img src="@/assets/svg/Icon-engine.svg" width="14" class="icon" /> 385 kW</p>
                  <span class=""><i class="fa-solid fa-gas-pump icon"></i> Xăng</span>
                  <span class="ms-2"><img src="@/assets/svg/Icon-gear.svg" width="14" class="icon" /> Số tự động</span>
                </div>
                <div class=" mt-3 py-2 bg-light">
                  <p class="text-secondary m-0">Giá:</p>
                  <h6>9.399.000.000 <i class="fa-solid fa-dong-sign"></i></h6>
                </div>
              </div>
              <div class="product p-2 col-sm-6 col-md-6 col-lg-4 mb-3 text-center">
                <router-link to="/detail/album/MercedesGClass"><img src="@/assets/Images/Mercedes_G_Class/iris.webp"
                    class="w-100 py-4" />
                </router-link>
                <p class="fw-bold m-0 mb-3 h5" style="height:3rem">Mercedes G-Class</p>
                <div class="" style="font-size:.8em;">
                  <p class="m-0"><img src="@/assets/svg/Icon-engine.svg" width="14" class="icon" /> 463 kW (630 mã
                    lực)</p>
                  <span class=""><i class="fa-solid fa-gas-pump icon"></i> Xăng</span>
                  <span class="ms-2"><img src="@/assets/svg/Icon-gear.svg" width="14" class="icon" /> Số tự động</span>
                </div>
                <div class=" mt-3 py-2 bg-light">
                  <p class="text-secondary m-0">Giá:</p>
                  <h6>10.950.000.000 <i class="fa-solid fa-dong-sign"></i></h6>
                </div>
              </div>
              <div class="product p-2 col-sm-6 col-md-6 col-lg-4 mb-3 text-center">
                <router-link to="/detail/album/MercedesAMG"><img src="@/assets/Images/Mercedes_AMG_GT/iris.webp"
                    class="w-100 py-4" />
                </router-link>
                <p class="fw-bold m-0 mb-3 h5" style="height:3rem">Mercedes AMG GT</p>
                <div class="" style="font-size:.8em;">
                  <p class="m-0"><img src="@/assets/svg/Icon-engine.svg" width="14" class="icon" /> 500 kW (690 mã
                    lực)</p>
                  <span class=""><i class="fa-solid fa-gas-pump icon"></i> Xăng</span>
                  <span class="ms-2"><img src="@/assets/svg/Icon-gear.svg" width="14" class="icon" /> Số tự động</span>
                </div>
                <div class=" mt-3 py-2 bg-light">
                  <p class="text-secondary m-0">Giá:</p>
                  <h6>11.590.000.000 <i class="fa-solid fa-dong-sign"></i></h6>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <h3 class=" m-0 ps-3 text-uppercase">{{ this.filter != '' ? this.filter : 'All Car' }}</h3>
          </div>
          <hr />
          <div class="row ms-4">

            <div v-for="(e, i) in this.products" :key="i"
              class="product p-2 col-sm-6 col-md-6 col-lg-4 mb-3 text-center">
              <router-link :to="'/product/' + e._id"><img :src="'../src/assets/Images/Mercedes/' + e.image"
                  class="w-100 py-4" />
              </router-link>
              <p class="fw-bold m-0 mb-3 h5" style="height:3rem">{{ e.name }}</p>
              <div class="" style="font-size:.8em;">
                <p class="m-0"><img src="@/assets/svg/Icon-engine.svg" width="14" class="icon" /> {{ e.details.volume }}
                </p>
                <span class=""><i class="fa-solid fa-gas-pump icon"></i> {{ e.details.fuel }}</span>
                <span class="ms-2"><img src="@/assets/svg/Icon-gear.svg" width="14" class="icon" />
                  {{ e.details.loaiSo }}</span>
              </div>
              <div class=" mt-3 py-2 bg-light">
                <p class="text-secondary m-0">Giá:</p>
                <h6>{{ new Intl.NumberFormat('it-IT', {
                    style: 'currency', currency: 'VND'
                  }).format(e.price).replace("VND", "")
                }} <i class="fa-solid fa-dong-sign"></i></h6>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </main>
</template>

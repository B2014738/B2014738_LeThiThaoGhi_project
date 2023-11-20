<script>
import ProductService from '@/services/product.service';
import OrderService from '@/services/order.service';
import { useUserStore } from "@/stores/UserStore";
export default {
    data() {
        const userStore = useUserStore();
        return {
            product: {},
            userStore,
            data: {}
        }
    },
    methods: {
        async getData() {
            this.product = await ProductService.get(this.$route.params.id);
            this.data = this.userStore.user
        },
        async handleSubmit() {
            try {
                await OrderService.create({ ...this.data, nameCar: this.product.name});
                alert("Đã gửi! Hãy đợi chúng tôi liên lạc")
            } catch (error) {
                alert('Gửi không thành công')
            }
        this.getData();
        }
    },
    created() {
        this.getData();
    }

}
</script>
<template>
    <main v-if="this.product._id != null">
        <div class="container-fluid mb-5 position-relative background-image" style="height:80vh">
            <div class="banner-title row">
                <div class="car">
                    <img :src="'../src/assets/Images/Mercedes/' + this.product.image" width="850" />
                    <p class="ms-5 text-secondary"><i class="fa-solid fa-circle-info"></i> Tất cả các hình ảnh và thông
                        số hiển thị chỉ mang tính minh hoạ, mẫu tham khảo. Sản phẩm được
                        Khách hàng lựa chọn có thể có hình ảnh và thông số khác với các hình ảnh hiện thị tùy thuộc vào
                        Hợp đồng mua bán xe với Khách hàng. XIN LƯU Ý kiểm tra kỹ đề xuất gửi Khách Hàng mà Nhà Phân
                        Phối cung cấp để đảm tính chính xác các trang thiết bị và cấu hình xe.</p>
                </div>
            </div>
            <div class="banner-title row">
                <div class="title">
                    <h4>{{ this.product.name }}</h4>
                    <p class="mt-4 m-0 text-secondary">Giá:</p>
                    <p class="fw-bold"> {{ new Intl.NumberFormat('it-IT', {
                            style: 'currency', currency: 'VND'
                        }).format(this.product.price).replace("VND", "")
                    }} <i class="fa-solid fa-dong-sign"></i></p>
                    <hr />
                    <div>
                        <span><img src="@/assets/svg/Icon-engine.svg" width="18" class="icon" />
                            {{ this.product.details.volume }}</span>
                        <span class="ms-5"><i class="fa-solid fa-gas-pump icon"></i>
                            {{ this.product.details.fuel }}</span>
                        <p class="mt-2"><img src="@/assets/svg/Icon-gear.svg" width="18" class="icon" />
                            {{ this.product.details.loaiSo }}</p>
                    </div>
                    <div class="mt-5">
                        <button class="btn-dark" data-bs-toggle="modal" data-bs-target="#addUser">
                            Gửi yêu cầu mua hàng
                        </button>
                    </div>
                    <div class="modal fade" id="addUser" tabindex="-1" aria-labelledby="addUserLabel"
                        aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="addUserLabel">Yêu cầu mua hàng</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body p-4 px-5">
                                    <div class="">
                                        <div class="form-floating mb-3">
                                            <input v-model="this.data.name" type="text" class="form-control rounded-0"
                                                id="floatingInput" placeholder="">
                                            <label for="floatingInput">Họ tên</label>
                                        </div>
                                    </div>
                                    <div class="">
                                        <div class="form-floating mb-3">
                                            <input v-model="this.data.phone" type="text" class="form-control rounded-0"
                                                id="floatingInput" placeholder="">
                                            <label for="floatingInput">Số điện thoại</label>
                                        </div>
                                    </div>
                                    <div class="">
                                        <div class="form-floating mb-3">
                                            <input v-model="this.data.email" type="email" class="form-control rounded-0"
                                                id="floatingInput" placeholder="">
                                            <label for="floatingInput">Email</label>
                                        </div>
                                    </div>
                                    <div class="">
                                        <div class="form-floating mb-3">
                                            <input v-model="this.data.address" type="text"
                                                class="form-control rounded-0" id="floatingInput" placeholder="">
                                            <label for="floatingInput">Địa chỉ</label>
                                        </div>
                                    </div>
                                    <div>
                                        <h6 class="text-primary border-primary"
                                            style="border-bottom: 1px solid ;width:fit-content">Chính sách bảo vệ dữ
                                            liệu</h6>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" checked
                                                id="flexCheckDefault">
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Tôi đã đọc và đồng ý với chính sách bảo vệ dữ liệu*
                                            </label>
                                        </div>
                                        <div class="mt-4">
                                            <p class="m-0">Tôi đồng ý nhận thông tin qua</p>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1"
                                                    value="option1" checked>
                                                <label class="form-check-label" for="inlineCheckbox1">SĐT</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox2"
                                                    value="option2" checked>
                                                <label class="form-check-label" for="inlineCheckbox2">SMS/MMS</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox2"
                                                    value="option2" checked>
                                                <label class="form-check-label" for="inlineCheckbox2">Email</label>
                                            </div>
                                        </div>

                                    </div>


                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary rounded-0"
                                        data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary  rounded-0" data-bs-dismiss="modal"
                                        @click="this.handleSubmit()">Xác nhận</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <h2 class="text-center">Thông số chi tiết</h2>
            <div class="row ">
                <div class="col-md-4">
                    <img src="@/assets/Images/Mercedes/C200.jpg" class="w-100" />
                </div>
                <div class="col-md-4 detail">
                    <div>
                        <p>Màu ngoại thất</p>
                        <span>{{ this.product.details.color.outSide }}</span>
                    </div>
                    <div>
                        <p>Số xi lanh</p>
                        <span>{{ this.product.details.soXiLanh }}</span>
                    </div>
                    <div>
                        <p>Chiều rộng</p>
                        <span>{{ this.product.details.chieuRong }} cm</span>
                    </div>
                    <div>
                        <p>Khối lượng</p>
                        <span>{{ this.product.details.weight }} kg</span>
                    </div>
                    <div>
                        <p>Tốc độ tối đa</p>
                        <span>{{ this.product.details.tocDo }} km/h</span>
                    </div>
                    <div>
                        <p>Số chỗ ngồi</p>
                        <span>{{ this.product.details.soCho }}</span>
                    </div>
                </div>
                <div class="col-md-4 detail">
                    <div>
                        <p>Dung tích công tác</p>
                        <span>{{ this.product.details.dungTich }} cm3</span>
                    </div>
                    <div>
                        <p>Chiều dài</p>
                        <span>{{ this.product.details.chieuDai }} cm</span>
                    </div>
                    <div>
                        <p>Chiều cao</p>
                        <span>{{ this.product.details.chieuCao }} cm</span>
                    </div>
                    <div>
                        <p>Trọng lượng tối đa</p>
                        <span>{{ this.product.details.trongLuong }} kg</span>
                    </div>
                    <div>
                        <p>Số cửa</p>
                        <span>{{ this.product.details.soCua }}</span>
                    </div>
                    <div>
                        <p>Màu nội thất</p>
                        <span>{{ this.product.details.color.inSide }}</span>
                    </div>
                </div>
            </div>

        </div>
    </main>
</template>
<style scoped>

main {
    font-family: "MBCorpo Title", "DaimlerCAC-Regular", "DaimlerCACArab-Regular", serif;
}

.banner-title {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    color: black;
}

.title {
    position: absolute;
    top: 50px;
    right: 100px;
    padding: 40px;
    width: 23em;
    height: fit-content;
    background-color: white;
    box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.349);
}

.car {
    position: absolute;
    width: 65%;
    height: fit-content;
    font-size: .9em;
}

.title h4 {
    font-size: 1.8em;
}

.btn-dark {
    padding: 10px 20px;
    background-color: rgba(0, 0, 0, 0.815);
    color: aliceblue;
    border-radius: 0;
}

.img-title {
    font-size: 1em;
    font-weight: 600;
    margin-top: 20px;
}

.background-image {
    background-image: url('@/assets/Images/background_details.webp');
    background-repeat: no-repeat;
    background-size: cover;
}

.icon {
    filter: invert(47%) sepia(11%) saturate(332%) hue-rotate(167deg) brightness(93%) contrast(91%);
}

.detail div {
    margin-bottom: 20px;
    font-size: 1.2rem;
    margin-left: 20px;
}

.detail p {
    margin: 0;
    font-weight: 600;
}
</style>
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { FoodService } from 'src/app/services/food.service';
import { AuthService } from 'src/app/app-management/service/auth.service';
import { MessageService } from 'primeng/api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { storageKey } from 'src/app/app-constant';
import { environment } from 'src/environments/environment';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styles: [
        `
            html {
                scroll-behavior: smooth;
            }
            #hero {
                background: linear-gradient(
                        0deg,
                        rgba(255, 255, 255, 0.2),
                        rgba(255, 255, 255, 0.2)
                    ),
                    radial-gradient(
                        77.36% 256.97% at 77.36% 57.52%,
                        #eeefaf 0%,
                        #c3e3fa 100%
                    );
                height: 700px;
                overflow: hidden;
            }

            .pricing-card:hover {
                border: 2px solid var(--cyan-200) !important;
            }

            @media screen and (min-width: 768px) {
                #hero {
                    -webkit-clip-path: ellipse(150% 87% at 93% 13%);
                    clip-path: ellipse(150% 87% at 93% 13%);
                    height: 530px;
                }
            }

            @media screen and (min-width: 1300px) {
                #hero > img {
                    position: absolute;
                    transform: scale(1.2);
                    top: 15%;
                }

                #hero > div > p {
                    max-width: 450px;
                }
            }

            @media screen and (max-width: 1300px) {
                #hero {
                    height: 600px;
                }

                #hero > img {
                    position: static;
                    transform: scale(1);
                    margin-left: auto;
                }

                #hero > div {
                    width: 100%;
                }

                #hero > div > p {
                    width: 100%;
                    max-width: 100%;
                }
            }

            /* Nền mờ của modal */
            .modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.6); /* Làm tối nền */
                display: flex;
                justify-content: center;
                align-items: center;
                opacity: 0;
                visibility: hidden;
                transition: opacity 0.3s ease-in-out,
                    visibility 0.3s ease-in-out;
            }

            /* Khi modal mở, hiển thị */
            .modal.show {
                opacity: 1;
                visibility: visible;
            }

            /* Nội dung modal */
            .modal-content {
                background: white;
                padding: 25px;
                border-radius: 12px;
                width: 90%;
                max-width: 500px;
                text-align: center;
                box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.3);
                transform: translateY(-20px);
                transition: transform 0.3s ease-in-out;
            }

            /* Khi modal mở, hiệu ứng trượt xuống */
            .modal.show .modal-content {
                transform: translateY(0);
            }

            /* Tiêu đề */
            .modal-content h2 {
                font-size: 22px;
                color: #333;
                margin-bottom: 15px;
            }

            /* Các đoạn văn */
            .modal-content p {
                font-size: 16px;
                color: #555;
                margin-bottom: 10px;
            }

            /* Nút đóng */
            .modal-close {
                background: #e74c3c;
                color: white;
                border: none;
                padding: 10px 15px;
                border-radius: 8px;
                cursor: pointer;
                font-size: 16px;
                margin-top: 15px;
                transition: background 0.3s;
            }

            .modal-close:hover {
                background: #c0392b;
            }

            /* Responsive - modal nhỏ hơn trên màn hình nhỏ */
            @media (max-width: 600px) {
                .modal-content {
                    width: 95%;
                    padding: 20px;
                }
            }

            .cta-banner {
                background-color: hsl(0, 0%, 100%);
                border-radius: 0.75em;
                box-shadow: 0 0 0 1px hsla(230, 13%, 9%, 0.05),
                    0 0.3px 0.4px hsla(230, 13%, 9%, 0.02),
                    0 0.9px 1.5px hsla(230, 13%, 9%, 0.045),
                    0 3.5px 6px hsla(230, 13%, 9%, 0.09);
                overflow: hidden;
            }

            .cta-banner__grid {
                // display : grid;
                // align-items: center;
                // gap: 1.5rem;
                display: flex;
                gap: 1.5rem;
                align-items: center;
                align-content: center;
                flex-direction: row;
            }

            .cta-banner__grid > * {
                min-width: 0;
            }

            .cta-banner__content {
                text-align: center;
                display: grid;
                gap: 0.75rem;
                min-width: 30% !important;
            }

            .cd-padding-sm {
                padding: 1.5rem;
            }

            .cd-radius-md {
                border-radius: 0.375em;
            }

            /* From Uiverse.io by shah1345 */
            .button2 {
                display: inline-block;
                transition: all 0.2s ease-in;
                position: relative;
                overflow: hidden;
                z-index: 1;
                color: #090909;
                padding: 0.7em 1.7em;
                cursor: pointer;
                font-size: 18px;
                border-radius: 0.5em;
                background: #e8e8e8;
                border: 1px solid #e8e8e8;
                box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
            }

            .button2:active {
                color: #666;
                box-shadow: inset 4px 4px 12px #c5c5c5,
                    inset -4px -4px 12px #ffffff;
            }

            .button2:before {
                content: '';
                position: absolute;
                left: 50%;
                transform: translateX(-50%) scaleY(1) scaleX(1.25);
                top: 100%;
                width: 140%;
                height: 180%;
                background-color: rgba(0, 0, 0, 0.05);
                border-radius: 50%;
                display: block;
                transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
                z-index: -1;
            }

            .button2:after {
                content: '';
                position: absolute;
                left: 55%;
                transform: translateX(-50%) scaleY(1) scaleX(1.45);
                top: 180%;
                width: 160%;
                height: 190%;
                background-color: #009087;
                border-radius: 50%;
                display: block;
                transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
                z-index: -1;
            }

            .button2:hover {
                color: #ffffff;
                border: 1px solid #009087;
            }

            .button2:hover:before {
                top: -35%;
                background-color: #009087;
                transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
            }

            .button2:hover:after {
                top: -45%;
                background-color: #009087;
                transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
            }

            .cta-banner__img {
                width: 100%;
            }

            .row-product-card {
                --bs-gutter-x: -0.5rem;
                --bs-gutter-y: 0;
                display: flex;
                flex-wrap: wrap;
                margin-top: calc(-1 * var(--bs-gutter-y));
                margin-right: calc(-0.5 * var(--bs-gutter-x));
                margin-left: calc(-0.5 * var(--bs-gutter-x));
                justify-content: space-around;
                align-items: stretch;
            }
        `,
    ],
})
// export class LandingComponent {
//     constructor(public layoutService: LayoutService, public router: Router) { }
// }
export class LandingComponent implements OnInit {
    header: any;
    isLoggedIn: boolean = false;
    fullname: string = '';
    foods: any[] = []; // Danh sách món ăn
    accountId: string = '';
    email: string = '';
    phonenumber: string = '';
    selectedFood: any = null;
    showDetailModal: boolean = false; // Điều khiển hiển thị modal
    page: number = 1;
    isLoading: boolean = false;

    constructor(
        private foodService: FoodService,
        public layoutService: LayoutService,
        public router: Router,
        private authService: AuthService,
        private http: HttpClient,
        private messageService: MessageService
    ) {}

    ngOnInit() {
        this.loadFoods();
        this.checkLoginStatus();
        this.header = new HttpHeaders().set(
            storageKey.AUTHORIZATION,
            this.authService.getToken()
        );
    }

    showLoginAlert() {
        this.messageService.add({
            severity: 'warn',
            summary: 'Chưa đăng nhập',
            detail: 'Vui lòng đăng nhập trước khi vào giỏ hàng.',
        });
    }

    checkLoginStatus() {
        this.isLoggedIn = this.authService.isAuthenticated();
        if (this.isLoggedIn) {
            this.fullname = this.authService.getFullname();
            this.accountId = this.authService.getAccountid();
            this.email = this.authService.getEmail();
            this.phonenumber = this.authService.getPhonenumber();
            // console.log("Username khi vào Landing Page:", this.fullname);
            // console.log("AccountID khi vào Landing Page:", this.accountId);
        }
    }

    logout() {
        this.authService.logout();
        this.isLoggedIn = false;
        this.fullname = '';
    }

    loadFoods() {
        this.foodService.getAllFoods().subscribe(
            (data) => {
                this.foods = data.data; // Lưu dữ liệu API vào biến
                // console.log('Danh sách món ăn:', this.foods);
            },
            (error) => {
                console.error('Lỗi khi lấy API', error);
            }
        );
    }

    // Khi cuộn xuống gọi hàm này để tải thêm
    loadMoreFoods() {
        this.loadFoods();
    }

    viewDetails(food: any) {
        this.selectedFood = food;
        this.showDetailModal = true; // Bật modal hiển thị chi tiết sản phẩm
    }

    closeDetail() {
        this.showDetailModal = false;
        this.selectedFood = null;
    }

    addToCart(food: any) {
        if (!this.isLoggedIn) {
            // this.messageService.add({ severity: 'error', summary: 'Thất bại', detail: 'Sản phẩm đã được thêm vào giỏ hàng!' });
            alert('Bạn cần đăng nhập để thêm sản phẩm vào giỏ hàng.');
            this.router.navigate(['/auth/dang-nhap']); // Điều hướng đến trang đăng nhập
            return;
        }

        const cartItem = {
            accountId: this.accountId, // ID người dùng
            foodId: food.id, // ID sản phẩm
            quantity: 1, // Mặc định số lượng là 1
            cartId: 0, // Nếu giỏ hàng chưa có, backend sẽ tự tạo
        };

        this.http
            .post(
                environment.backendApiUrl + '/api/v1/project/cartItem/add',
                cartItem,
                {
                    headers: this.header,
                }
            )
            .subscribe(
                (response) => {
                    // console.log('Sản phẩm đã được thêm vào giỏ hàng:', response);
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Thành công',
                        detail: 'Sản phẩm đã được thêm vào giỏ hàng!',
                    });
                },
                (error) => {
                    console.error('Lỗi khi thêm vào giỏ hàng:', error);
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Lỗi',
                        detail: 'Không thể thêm vào giỏ hàng. Vui lòng thử lại!',
                    });
                }
            );
    }

    navigateToLanding() {
        this.router.navigate(['/pages/landing'], { fragment: 'home' });
    }
}

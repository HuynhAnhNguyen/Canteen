import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { FoodService } from 'src/app/services/food.service';
import { AuthService } from 'src/app/app-management/service/auth.service';
import { MessageService } from 'primeng/api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { storageKey } from 'src/app/app-constant';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styles: [`
        #hero{
            background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #EEEFAF 0%, #C3E3FA 100%);
            height:700px;
            overflow:hidden;
        }

        .pricing-card:hover{
            border:2px solid var(--cyan-200) !important;
        }

        @media screen and (min-width: 768px) {
            #hero{
                -webkit-clip-path: ellipse(150% 87% at 93% 13%);
                clip-path: ellipse(150% 87% at 93% 13%);
                height: 530px;
            }
        }

        @media screen and (min-width: 1300px){
            #hero > img {
                position: absolute;
                transform:scale(1.2);
                top:15%;
            }

        #hero > div > p {
                max-width: 450px;
            }
        }

        @media screen and (max-width: 1300px){
            #hero {
                height: 600px;
            }

        #hero > img {
            position:static;
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
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
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

    `]
})
// export class LandingComponent {
//     constructor(public layoutService: LayoutService, public router: Router) { }
// }

export class LandingComponent implements OnInit {
  header: any
  isLoggedIn: boolean = false;
  fullname: string = '';
  foods: any[] = []; // Danh sách món ăn
  accountId: string = '';
  email: string = '';
  phonenumber: string = '';
  selectedFood: any = null;
  showDetailModal: boolean = false; // Điều khiển hiển thị modal

  constructor(
    private foodService: FoodService,
    public layoutService: LayoutService,
    public router: Router,
    private authService: AuthService,
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.loadFoods();
    this.checkLoginStatus();
    this.header = new HttpHeaders().set(
      storageKey.AUTHORIZATION,
      this.authService.getToken()
    );
  }

  showLoginAlert() {
    this.messageService.add({ severity: 'warn', summary: 'Chưa đăng nhập', detail: 'Vui lòng đăng nhập trước khi vào giỏ hàng.' });
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
      alert("Bạn cần đăng nhập để thêm sản phẩm vào giỏ hàng.");
      this.router.navigate(['/auth/login']); // Điều hướng đến trang đăng nhập
      return;
    }

    const cartItem = {
      accountId: this.accountId, // ID người dùng
      foodId: food.id, // ID sản phẩm
      quantity: 1, // Mặc định số lượng là 1
      cartId: 0 // Nếu giỏ hàng chưa có, backend sẽ tự tạo
    };

    this.http.post(environment.backendApiUrl +'/api/v1/project/cartItem/add', cartItem, {
      headers: this.header
    }).subscribe(
      (response) => {
        // console.log('Sản phẩm đã được thêm vào giỏ hàng:', response);
        this.messageService.add({ severity: 'success', summary: 'Thành công', detail: 'Sản phẩm đã được thêm vào giỏ hàng!' });
      },
      (error) => {
        console.error('Lỗi khi thêm vào giỏ hàng:', error);
        this.messageService.add({ severity: 'error', summary: 'Lỗi', detail: 'Không thể thêm vào giỏ hàng. Vui lòng thử lại!' });
      }
    );
  }

  navigateToLanding() {
    this.router.navigate(['/pages/landing'], { fragment: 'home' });
  }
}
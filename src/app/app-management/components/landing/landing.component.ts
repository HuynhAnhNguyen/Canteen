import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { FoodService } from 'src/app/services/food.service';
import { AuthService } from 'src/app/app-management/service/auth.service';

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
    `]
})
// export class LandingComponent {
//     constructor(public layoutService: LayoutService, public router: Router) { }
// }

export class LandingComponent implements OnInit {
    isLoggedIn: boolean = false;
    username: string = '';
    foods: any[] = []; // Danh sách món ăn
  
    constructor(
      private foodService: FoodService, 
      public layoutService: LayoutService, 
      public router: Router,
      private authService: AuthService
    ) {}
  
    ngOnInit() {
      this.loadFoods();
      this.checkLoginStatus();
    }
  
    checkLoginStatus() {
      this.isLoggedIn = this.authService.isAuthenticated();
      if (this.isLoggedIn) {
        this.username = this.authService.getUsername();
        // console.log("Username khi vào Landing Page:", this.username);
      }
    }

    logout() {
      this.authService.logout();
      this.isLoggedIn = false;
      this.username = '';
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

    // ✅ Thêm sản phẩm vào giỏ hàng
  addToCart(food: any) {
    console.log('Sản phẩm đã thêm vào giỏ hàng:', food);
    
    alert(`Đã thêm vào giỏ hàng thành công.\n\nTên món ăn: ${food.name}\nGiá: ${food.price.toLocaleString()} VND`);
  }
  
    // ✅ Tạo hàm để điều hướng trang
    navigateToLanding() {
      this.router.navigate(['/pages/landing'], { fragment: 'home' });
    }
  }
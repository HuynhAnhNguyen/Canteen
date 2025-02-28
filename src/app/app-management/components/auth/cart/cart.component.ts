import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './../../../service/auth.service';
import { MessageService } from 'primeng/api';
import { storageKey } from 'src/app/app-constant';
interface CartItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
  foodId: string;
  totalPrice: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  providers: [MessageService]
})
export class CartComponent {
  header: any;
  cartItems: CartItem[] = [];
  cartId: any;
  totalAmount: number = 0;

  constructor(private http: HttpClient, private authService: AuthService, private messageService: MessageService) { }

  ngOnInit() {
    this.header = new HttpHeaders().set(
      storageKey.AUTHORIZATION,
      this.authService.getToken()
    );
    this.loadCart();

  }

  // Lấy giỏ hàng từ API
  loadCart() {
    // console.log("From cart " + this.authService.getCartid());
    // console.log(this.header);
    this.cartId = this.authService.getCartid(); // Lấy ID tài khoản khi đăng nhập
    // if (!accountId) {
    //   this.messageService.add({ severity: 'error', summary: 'Lỗi', detail: 'Bạn cần đăng nhập để xem giỏ hàng' });
    //   return;
    // }

    this.http.get<any>('http://13.239.169.8:8080/api/v1/project/cartItem/info?cartId=' + this.cartId, {
      headers: this.header
    })
      .subscribe(
        (response) => {
          if (response.resultCode === 0) {
            if (response.data && response.data.length > 0) {
              // Nếu có sản phẩm trong giỏ hàng, hiển thị danh sách
              this.cartItems = response.data.map((item: any) => ({
                id: item.id,
                name: item.foodName,
                quantity: item.quantity,
                price: item.foodPrice,
                foodId: item.foodId
              }));
              // console.log(this.cartItems);
            } else {
              // Nếu không có sản phẩm, hiển thị thông báo "Giỏ hàng trống"
              this.cartItems = [];
              this.messageService.add({ severity: 'info', summary: 'Thông báo', detail: 'Giỏ hàng của bạn đang trống' });
            }
          } else {
            this.messageService.add({ severity: 'error', summary: 'Lỗi', detail: response.message });
          }
        },
        (error) => {
          console.error('Lỗi khi tải giỏ hàng:', error);
          this.messageService.add({ severity: 'error', summary: 'Lỗi', detail: 'Không thể tải giỏ hàng' });
        }
      );
  }

  // Tăng số lượng sản phẩm
increaseQuantity(cartItemId: number) {
  console.log(cartItemId);
  this.updateQuantity(cartItemId, 1); // Tăng số lượng lên 1
}

// Giảm số lượng sản phẩm (không giảm dưới 1)
decreaseQuantity(cartItemId: number) {
  const item = this.cartItems.find(cartItem => cartItem.id === cartItemId);
  if (item && item.quantity > 1) {
      this.updateQuantity(cartItemId, -1); // Giảm số lượng đi 1
  }
}

// Cập nhật số lượng sản phẩm trong giỏ hàng
updateQuantity(cartItemId: number, change: number) {
  const item = this.cartItems.find(cartItem => cartItem.id === cartItemId);
  if (!item) return;

  const newQuantity = item.quantity + change;
  if (newQuantity < 1) return; // Không giảm dưới 1

  const payload = {
      cartItemId: cartItemId,
      quantity: newQuantity
  };

  this.http.put('http://13.239.169.8:8080/api/v1/project/cartItem/update', payload, { headers: this.header })
      .subscribe(
          (response: any) => {
              if (response.resultCode === 0) {
                  item.quantity = newQuantity;
                  item.totalPrice = item.quantity * item.price; // Cập nhật tổng tiền của sản phẩm

                  // 🚀 Quan trọng: Tạo bản sao mới để Angular cập nhật giao diện
                  this.cartItems = [...this.cartItems];

                  // Cập nhật tổng hóa đơn
                  // this.updateTotalAmount();
                  this.loadCart();
                  console.log(this.cartItems);
              } else {
                  this.messageService.add({ severity: 'error', summary: 'Lỗi', detail: response.message });
              }
          },
          (error) => {
              console.error('Lỗi khi cập nhật số lượng:', error);
              this.messageService.add({ severity: 'error', summary: 'Lỗi', detail: 'Không thể cập nhật số lượng' });
          }
      );
}


// Tính tổng hóa đơn
updateTotalAmount() {
  this.totalAmount = this.cartItems.reduce((sum, item) => sum + (item.quantity * item.price), 0);
}


  // Xóa sản phẩm khỏi giỏ hàng
  removeItem(index: number) {
    const item = this.cartItems[index];

    this.http.post('http://13.239.169.8:8080/api/v1/project/cartItem/delete', { cartItemId: item.id })
      .subscribe(
        (response: any) => {
          if (response.resultCode === 0) {
            this.cartItems.splice(index, 1);
          } else {
            this.messageService.add({ severity: 'error', summary: 'Lỗi', detail: response.message });
          }
        },
        (error) => {
          console.error('Lỗi khi xóa sản phẩm:', error);
          this.messageService.add({ severity: 'error', summary: 'Lỗi', detail: 'Không thể xóa sản phẩm' });
        }
      );
  }

  // Tính tổng giá trị giỏ hàng
  getTotal(): number {
    return this.cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);
  }

  // Đặt hàng
  placeOrder() {
    const payload = {
      accountId: this.authService.getCartid(),
      cartId: this.cartId
    };

    this.http.post('http://13.239.169.8:8080/api/v1/project/cartItem/placeOrder', payload)
      .subscribe(
        (response: any) => {
          if (response.resultCode === 0) {
            this.messageService.add({ severity: 'success', summary: 'Thành công', detail: 'Đặt hàng thành công!' });
            this.cartItems = [];
          } else {
            this.messageService.add({ severity: 'error', summary: 'Lỗi', detail: response.message });
          }
        },
        (error) => {
          console.error('Lỗi khi đặt hàng:', error);
          this.messageService.add({ severity: 'error', summary: 'Lỗi', detail: 'Không thể đặt hàng' });
        }
      );
  }
}

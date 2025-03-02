import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './../../../service/auth.service';
import { MessageService } from 'primeng/api';
import { storageKey } from 'src/app/app-constant';
import { environment } from 'src/environments/environment';

interface CartItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
  foodId: string;
  totalPrice: number;
  userInfo: any;
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
  userInfo: any = null;

  constructor(private http: HttpClient, private authService: AuthService, private messageService: MessageService) { }

  ngOnInit() {
    this.header = new HttpHeaders().set(
      storageKey.AUTHORIZATION,
      this.authService.getToken()
    );
    this.getUserInfo();
    this.loadCart();
  }

  // Lấy giỏ hàng từ API
  loadCart() {
    // console.log("From cart " + this.authService.getCartid());
    // console.log(this.header);
    this.cartId = this.authService.getCartid();

    this.http.get<any>(environment.backendApiUrl + '/api/v1/project/cartItem/info?cartId=' + this.cartId, {
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
              this.calculateTotalAmount();
              // console.log(this.cartItems);
            } else {
              // Nếu không có sản phẩm, hiển thị thông báo "Giỏ hàng trống"
              this.cartItems = [];
              this.calculateTotalAmount();
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

  getUserInfo() {
    this.userInfo = {
      fullname: this.authService.getFullname(),  // Lấy họ tên
      email: this.authService.getEmail(),        // Lấy email
      phonenumber: this.authService.getPhonenumber() // Lấy số điện thoại
    };
  }

  // Tăng số lượng sản phẩm
  increaseQuantity(cartItemId: number) {
    // console.log(cartItemId);
    this.updateQuantity(cartItemId, 1); // Tăng số lượng lên 1
  }

  // Giảm số lượng sản phẩm (không giảm dưới 1)
  decreaseQuantity(cartItemId: number) {
    // console.log(cartItemId);
    const item = this.cartItems.find(cartItem => cartItem.id === cartItemId);
    if (item && item.quantity > 1) {
      this.updateQuantity(cartItemId, -1); // Giảm số lượng đi 1
    } else {
      this.deleteCartItem(cartItemId); // Nếu số lượng = 1, xóa sản phẩm khỏi giỏ hàng
    }
  }

  // Cập nhật số lượng sản phẩm trong giỏ hàng
  updateQuantity(cartItemId: number, change: number) {
    const item = this.cartItems.find(cartItem => cartItem.id === cartItemId);
    if (!item) return;

    const newQuantity = item.quantity + change;
    if (newQuantity < 1) {
      this.deleteCartItem(cartItemId);
      return;
    }

    const payload = {
      cartItemId: cartItemId,
      quantity: newQuantity
    };

    this.http.put(environment.backendApiUrl + '/api/v1/project/cartItem/update', payload, { headers: this.header })
      .subscribe(
        (response: any) => {
          if (response.resultCode === 0) {
            item.quantity = newQuantity;
            item.totalPrice = item.quantity * item.price; // Cập nhật tổng tiền của sản phẩm

            // 🚀 Quan trọng: Tạo bản sao mới để Angular cập nhật giao diện
            this.cartItems = [...this.cartItems];
            this.calculateTotalAmount();
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

  // Xóa sản phẩm khỏi giỏ hàng
  deleteCartItem(cartItemId: number) {
    this.http.delete(environment.backendApiUrl + `/api/v1/project/cartItem/delete?cartItemId=${cartItemId}`, { headers: this.header })
      .subscribe(
        (response: any) => {
          if (response.resultCode === 0) {
            this.cartItems = this.cartItems.filter(cartItem => cartItem.id !== cartItemId);
            this.calculateTotalAmount();
            this.loadCart();

            console.log(this.cartItems);
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

  // Tính tổng giá trị đơn hàng
  calculateTotalAmount() {
    this.totalAmount = this.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  // Đặt hàng
  placeOrder() {
    const accountId = this.authService.getAccountid();
    const cartId = this.authService.getCartid();

    console.log("Account ID:", accountId);
    console.log("Cart ID:", cartId);

    if (!accountId || !cartId) {
      console.error("Lỗi: Account ID hoặc Cart ID không hợp lệ!");
      this.messageService.add({ severity: 'error', summary: 'Lỗi', detail: 'Không thể đặt hàng do thiếu thông tin' });
      return;
    }

    const payload = { 'account_id':accountId,'cart_id': cartId };

    this.http.post(environment.backendApiUrl + '/api/v1/project/order/create', payload, {
      headers: this.header
    })
      .subscribe(
        (response: any) => {
          console.log('API Response:', response);
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

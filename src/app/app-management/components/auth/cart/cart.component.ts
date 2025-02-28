import { Component } from '@angular/core';

interface CartItem {
  name: string;
  quantity: number;
  price: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartItems: CartItem[] = [
    { name: 'Sản phẩm A', quantity: 1, price: 50000 },
    { name: 'Sản phẩm B', quantity: 2, price: 75000 },
    { name: 'Sản phẩm C', quantity: 1, price: 100000 }
  ];

  // Tăng số lượng sản phẩm
  increaseQuantity(index: number) {
    this.cartItems[index].quantity++;
  }

  // Giảm số lượng sản phẩm (không giảm dưới 1)
  decreaseQuantity(index: number) {
    if (this.cartItems[index].quantity > 1) {
      this.cartItems[index].quantity--;
    }
  }

  // Xóa sản phẩm khỏi giỏ hàng
  removeItem(index: number) {
    this.cartItems.splice(index, 1);
  }

  // Tính tổng giá trị giỏ hàng
  getTotal(): number {
    return this.cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);
  }

  // Xử lý đặt hàng
  placeOrder() {
    alert('Đặt hàng thành công!');
    this.cartItems = []; // Xóa giỏ hàng sau khi đặt hàng
  }
}

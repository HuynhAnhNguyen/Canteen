import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './../../../service/auth.service';
import { MessageService } from 'primeng/api';
import { storageKey } from 'src/app/app-constant';
import { environment } from 'src/environments/environment';

interface Order {
  id: number;
  totalPrice: number;
  status: string;
  orderTime: string;
}

interface OrderDetail {
  id: number;
  foodName: string;
  quantity: number;
  price: number;
  totalPrice: number;
}


@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {
  header: any;
  orders: Order[] = [];
  accountId: any;
  selectedOrderDetails: any[] = []; // Danh sách món ăn của đơn hàng
  showDetailModal: boolean = false;
  userInfo: any = null;


  constructor(private http: HttpClient, 
    private authService: AuthService, 
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.header = new HttpHeaders().set(
      storageKey.AUTHORIZATION,
      this.authService.getToken()
    );
  this.accountId = this.authService.getAccountid();
  this.getUserInfo();
  this.loadOrders();

  }

  loadOrders() {
    this.http.get<any>(environment.backendApiUrl +'/api/v1/project/order/findOrderByAccountId?accountId=' + this.accountId, { headers: this.header }).subscribe(
      (response) => {
        if (response.resultCode === 0) {
          this.orders = response.data.map((order: any, index: number) => ({
            id: order.id,
            totalPrice: order.totalPrice,
            status: order.status,
            orderTime: order.orderTime
          }));
          console.log(this.orders);
        } else {
          this.messageService.add({ severity: 'error', summary: 'Lỗi', detail: response.message });
        }
      },
      (error) => {
        console.error('Lỗi khi tải lịch sử đơn hàng:', error);
        this.messageService.add({ severity: 'error', summary: 'Lỗi', detail: 'Không thể tải lịch sử đơn hàng' });
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

  viewOrderDetails(orderId: number) {
    console.log("Đang tải chi tiết đơn hàng, OrderID:", orderId);
    this.http.get<any>(environment.backendApiUrl +'/api/v1/project/orderItem/findOrderItemByOrderId?orderId=' + orderId, { headers: this.header }).subscribe(
      (response) => {
        if (response.resultCode === 0) {
          if (response.data.length > 0) {
            // Gán danh sách món ăn vào selectedOrderDetails
            this.selectedOrderDetails = response.data.map((item: any) => ({
              id: item.id,
              foodName: item.foodName,
              quantity: item.quantity,
              price: item.foodPrice,
              totalPrice: item.totalPrice,
              description: item.description || "Không có mô tả",
              imageUrl: item.imageUrl || "default-image.jpg"
            }));

            this.showDetailModal = true; // Hiển thị modal
          } else {
            this.messageService.add({ severity: 'warn', summary: 'Thông báo', detail: 'Không có chi tiết đơn hàng.' });
          }
        } else {
          this.messageService.add({ severity: 'error', summary: 'Lỗi', detail: response.message });
        }
      },
      (error) => {
        console.error('Lỗi khi tải chi tiết đơn hàng:', error);
        this.messageService.add({ severity: 'error', summary: 'Lỗi', detail: 'Không thể tải chi tiết đơn hàng' });
      }
    );
}

closeDetail() {
  this.showDetailModal = false;
  this.selectedOrderDetails = []; // Reset dữ liệu khi đóng modal
}

// Hàm kiểm tra xem có thể hủy đơn hàng hay không
canCancelOrder(status: string): boolean {
  return status === 'unconfirmed'; // Chỉ cho phép hủy nếu đơn hàng chưa được xác nhận
}

// Hàm hiển thị trạng thái đơn hàng bằng tiếng Việt
getOrderStatusText(status: string): string {
  switch (status) {
      case 'unconfirmed': return 'Chưa xác nhận';
      case 'done': return 'Đã xong';
      case 'preparing': return 'Đang chuẩn bị';
      default: return 'Không xác định';
  }
}

// Hàm hủy đơn hàng
cancelOrder(orderId: number) {
  if (!confirm('Bạn có chắc chắn muốn hủy đơn hàng này không? '+orderId)) {
      return; // Nếu người dùng bấm "Cancel", thoát khỏi hàm
  }
  console.log(orderId);

  this.http.put(environment.backendApiUrl +'/api/v1/project/order/cancel?orderId='+ orderId, {}, { headers: this.header }).subscribe(
      (response: any) => {
          if (response.resultCode === 0) {
              this.messageService.add({ severity: 'success', summary: 'Thành công', detail: 'Đơn hàng đã được hủy.' });
              this.loadOrders(); // Cập nhật lại danh sách đơn hàng sau khi hủy
          } else {
              this.messageService.add({ severity: 'error', summary: 'Lỗi', detail: response.message });
          }
      },
      (error) => {
          console.error('Lỗi khi hủy đơn hàng:', error);
          this.messageService.add({ severity: 'error', summary: 'Lỗi', detail: 'Không thể hủy đơn hàng' });
      }
  );
}

}

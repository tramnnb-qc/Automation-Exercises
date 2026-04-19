/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * Bài 1: Tạo khuôn mẫu Sản phẩm (Product)
Tạo Class Product với các thuộc tính: name, price, discount.
Viết phương thức getFinalPrice() để trả về giá sau khi đã giảm giá.
Tạo 2 sản phẩm: iPhone (1000$, giảm 10%) và Samsung (800$, giảm 5%). In giá cuối cùng của chúng ra màn hình.

 */

// class Product {
//   constructor(name, price, discount) {
//     this.name = name;
//     this.price = price;
//     this.discount = discount;
//   }

//   getFinalPrice() {
//     return this.price * (this.discount / 100);
//   }
// }

// const iPhone = new Product("iPhone", 1000, 10);
// console.log(iPhone.getFinalPrice());

/**
 * 
 * Bài 2: Hệ thống quản lý Test Case
Tạo Class TestCase gồm: id, name, status (mặc định là "Pending").
Viết phương thức updateStatus(newStatus) để cập nhật trạng thái mới.
Tạo một mảng chứa 3 Test Case khác nhau và dùng vòng lặp để in thông tin của chúng.

 */

class TestCase {
  constructor(id, name, status = "Pending") {
    this.id = id;
    this.name = name;
    this.status = status;
  }

  updateStatus(newStatus) {
    this.status = newStatus;
    console.log(this.status);
  }

  displayInfo() {
    console.log(`id: ${this.id} - name ${this.name} - status ${this.status}`);
  }
}

const tc1 = new TestCase(1, "UI");
tc1.updateStatus("Reopen");
// console.log(tc1.status);

const tc2 = new TestCase(2, "API");
const tc3 = new TestCase(3, "Webhook");

const arr_tc = [tc1, tc2, tc3];
for (let tc of arr_tc) {
  tc.displayInfo();
}

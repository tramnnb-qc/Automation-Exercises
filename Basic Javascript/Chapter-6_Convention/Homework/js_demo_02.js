/*
Bài 2: Thiết kế "Bộ khung" Dữ liệu (Data Architect)
    Bạn đang xây dựng một dự án Automation cho một trang web bán điện thoại. 
    Yêu cầu: 
        1. Khai báo một hằng số lưu thời gian chờ mặc định (Timeout) là 5000ms. 
        2. Tạo một danh sách (Array) chứa 3 đối tượng (Object) sản phẩm. Mỗi đối tượng phải có: id, tên sản phẩm, giá tiền, và trạng thái còn hàng. 
        3. Lưu ý quan trọng: Tất cả tên biến, tên thuộc tính phải đặt theo chuẩn camelCase, tên hằng số theo UPPER_SNAKE_CASE. Tên phải bằng tiếng Anh chuyên ngành (ví dụ: isStocked hoặc inStock thay vì conHang).
*/

const TIME_OUT = "5000ms";
const listProduct = [
  {
    productId: "001",
    productName: "SP001",
    price: 20000,
    inStock: true,
  },
  {
    productId: "002",
    productName: "SP002",
    price: 40000,
    inStock: false,
  },
  {
    productId: "003",
    productName: "SP003",
    price: 60000,
    inStock: true,
  },
];

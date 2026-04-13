/* BÀI TẬP THỬ THÁCH: HỆ THỐNG QUẢN LÝ ĐƠN HÀNG (ORDER MANAGER)

Ngữ cảnh:
    Bạn đang viết script để kiểm tra danh sách đơn hàng từ một API trả về. Bạn cần duyệt qua danh sách này 
    để thực hiện các hành động kiểm thử khác nhau dựa trên trạng thái và giá trị của từng đơn hàng.

Dữ liệu đầu vào:

const orders = [
    { id: "ORD001", amount: 500, status: "completed", customer: "An" },
    { id: "ORD002", amount: 1200, status: "pending", customer: "Bình" },
    { id: "ORD003", amount: 7000, status: "completed", customer: "Ngân" },
    { id: "ORD004", amount: 50, status: "canceled", customer: "Chi" },
    { id: "ORD005", amount: 3000, status: "completed", customer: "Dũng" },
    { id: "ORD006", amount: 150, status: "pending", customer: "Đạt" },
    { id: "ORD007", amount: 800, status: "completed", customer: "Hương" }
];

    Yêu cầu bài tập (Gồm 4 cấp độ):
        Cấp độ 1 (Duyệt mảng): Sử dụng vòng lặp để in ra tên tất cả các khách hàng đã mua hàng.
        Cấp độ 2 (Lọc dữ liệu): Chỉ in ra mã đơn hàng (id) của những đơn hàng có trạng thái là "completed".
        Cấp độ 3 (Tính toán & Logic): 
            * Hãy tính Tổng số tiền của tất cả các đơn hàng có trạng thái "completed". &&
            Nếu đơn hàng nào có amount > 1000, hãy in thêm dòng chữ: "Đơn hàng VIP: [Mã ID]".
        Cấp độ 4 (Tìm kiếm & Dừng): 
        * Khách hàng tên "Chi" đang khiếu nại. Hãy dùng vòng lặp để tìm đơn hàng của "Chi".
        Khi tìm thấy, hãy in ra toàn bộ thông tin đơn hàng đó và dừng vòng lặp ngay lập tức (không cần kiểm tra các đơn hàng phía sau nữa để tiết kiệm tài nguyên).

*/

const orders = [
  { id: "ORD001", amount: 500, status: "completed", customer: "An" },
  { id: "ORD002", amount: 1200, status: "pending", customer: "Bình" },
  { id: "ORD003", amount: 7000, status: "completed", customer: "Ngân" },
  { id: "ORD004", amount: 50, status: "canceled", customer: "Chi" },
  { id: "ORD005", amount: 3000, status: "completed", customer: "Dũng" },
  { id: "ORD006", amount: 150, status: "pending", customer: "Đạt" },
  { id: "ORD007", amount: 800, status: "completed", customer: "Hương" },
];

// in ra tên tất cả các khách hàng
function printAllCustomerName(orders) {
  for (let order of orders) {
    console.log(order.customer);
  }
}
printAllCustomerName(orders);

// in ra id của những đơn hàng có trạng thái là "completed"
function printOrderHasCompleted(orders) {
  for (let order of orders) {
    if (order.status === "completed") {
      console.log(order.id);
    }
  }
}
printOrderHasCompleted(orders);

// tính Tổng số tiền của ĐH có trạng thái "completed", nếu ĐH có amount > 1000, in thêm "Đơn hàng VIP: [Mã ID]"
function printTotalAmount(orders) {
  let totalPrice = 0; // biến totalPrice lưu giá trị tổng ĐH
  for (let order of orders) {
    if (order.status === "completed") {
      if (order.amount > 1000) {
        console.log(`Đơn hàng VIP: ${order.id}`); // in id ĐH có amount > 1000
      }
      totalPrice += order.amount; // cộng thêm giá trị ĐH có status completed
    }
    // if (order.amount > 1000) {
    //   console.log(`Đơn hàng VIP: ${order.id}`); // in id ĐH có amount > 1000
    // }
  }
  return totalPrice;
}
console.log(
  "Tổng số tiền của ĐH có trạng thái completed:",
  printTotalAmount(orders),
);

// Khi tìm thấy, hãy in ra toàn bộ thông tin đơn hàng của "Chi" và dừng vòng lặp ngay lập tức

function findOrderOfCustomerComplain(orders) {
  for (let order of orders) {
    if (order.customer === "Chi") {
      console.log("Order of customer complain is:", order);
      break;
    }
  }
}
findOrderOfCustomerComplain(orders);

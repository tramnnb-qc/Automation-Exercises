/* Bài 3: Kiểm tra điều kiện Coupon 
Một mã giảm giá chỉ áp dụng nếu: totalBill > 500 VÀ isMember === true. 
Hãy viết code để kiểm tra xem khách hàng có được giảm giá không. */

const isMember = true;

const totalBill = 1000;

// Cach 1:
if (isMember === true && totalBill > 500) {
  console.log("Khach hang DU dieu kien ap dung coupon");
} else {
  console.log("Khach hang KHONG du dieu kien ap dung coupon");
}

// Cach 2:
const activeCoupon = isMember === true && totalBill > 500;
console.log(activeCoupon);

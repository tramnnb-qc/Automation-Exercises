/*
Bài 3: Tính toán Phí vận chuyển Đa quốc gia (Shipping Logic)
Yêu cầu: Tính phí ship dựa trên weight (kg), distance (km), 
và membership (Gold, Silver, Guest). Logic:
    - Phí cơ bản: 5$.
    - Nếu weight > 10kg: +10$. Nếu weight > 50kg: +50$.
    - Nếu distance > 500km: Phí tổng tăng thêm 20%.
    - Ưu đãi thành viên: * Gold: Giảm 50% tổng phí.
        Silver: Giảm 20% tổng phí.
        Guest: Không giảm.
    Bài toán khó: Nếu tổng phí sau khi tính toán > 100$, hãy áp dụng thêm mã giảm giá cố định 10$ (sau khi đã tính giảm giá thành viên).
*/

// Cach 1:
const weight = 20; // kg
const distance = 600; // km
const membership = "Gold"; // Gold | Silver | Guest

let totalFee = 5;

if (weight > 50) {
  totalFee += 50;
} else if (weight > 10) {
  totalFee += 10;
}

if (distance > 500) {
  totalFee *= 1.2; // tăng 20%
}

if (membership === "Gold") {
  totalFee *= 0.5;
} else if (membership === "Silver") {
  totalFee *= 0.8;
}

if (totalFee > 100) {
  totalFee -= 10;
}

console.log("Tổng phí shipping:", totalFee);

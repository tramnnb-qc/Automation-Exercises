/*
Bài 2: Hàm định dạng tiền tệ 
    Viết một hàm formatPrice(amount) nhận vào một số (ví dụ: 500000) 
    và trả về chuỗi có thêm ký tự $ đằng sau (ví dụ: "500000$").
*/
function formatPrice(amount) {
  return amount + "$";
}
let amount = 520000;
console.log(formatPrice(amount), typeof formatPrice(amount));

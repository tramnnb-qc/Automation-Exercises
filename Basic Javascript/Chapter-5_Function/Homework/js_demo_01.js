/* 
Bài 1: Hàm kiểm tra độ dài mật khẩu 
    Viết một hàm isPasswordValid(password) nhận vào một chuỗi.
    Nếu độ dài chuỗi >= 8: trả về true.
    Ngược lại: trả về false.
*/

function isPasswordValid(password) {
  if (password.length >= 8) {
    return true;
  }
  return false;
}
let pswValid = "bdusVGJ5798";
console.log(isPasswordValid(pswValid));

let pswInValid = "sdh67";
console.log(isPasswordValid(pswInValid));

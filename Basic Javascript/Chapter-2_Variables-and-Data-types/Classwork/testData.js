/*
 * Thực hành tại lớp
Yêu cầu: Học viên hãy tạo một file testData.js và thực hiện các bước sau:
Khai báo một hằng số ENVIRONMENT_URL chứa link trang web bất kỳ.
Tạo một Object loginCredential gồm email và password.
Tạo một mảng errorMessages chứa 3 câu báo lỗi bạn thường gặp (ví dụ: "Invalid email", "Wrong password").
Dùng console.log in ra dòng chữ: "Đang test trên môi trường: [ENVIRONMENT_URL] với tài khoản [email]" bằng cách dùng Backtick.
 */

// Khai báo URL
const ENVIRONMENT_URL = "https://staging.example.com";

// Tạo object loginCredential
const loginCredential = {
  email: "test@example.com",
  password: "123456",
};

// Tạo mảng errorMessage
const errorMessages = ["Invalid email", "Wrong password", "User not found"];

// In thông tin bằng backtick
console.log(
  `Đang test trên môi trường: ${ENVIRONMENT_URL} với tài khoản ${loginCredential["email"]}`,
);

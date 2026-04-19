/*
 * Bài 3: Kiểm tra điều kiện (Every & Some)
Đề bài: Bạn cần kiểm tra tính hợp lệ của một danh sách các Input trên Form đăng ký.
JavaScript
const formFields = [
    { label: "Username", value: "quang_test", isValid: true },
    { label: "Email", value: "test@gmail.com", isValid: true },
    { label: "Password", value: "123", isValid: false },
    { label: "Phone", value: "0909", isValid: true }
];

Yêu cầu:
1. Sử dụng .every() để kiểm tra xem tất cả các trường đã hợp lệ (isValid === true) để nhấn nút Submit chưa?
2. Sử dụng .some() để kiểm tra xem có ít nhất một trường bị lỗi (isValid === false) để hiển thị 
thông báo cảnh báo chung không?
*/

const formFields = [
  { label: "Username", value: "quang_test", isValid: true },
  { label: "Email", value: "test@gmail.com", isValid: true },
  { label: "Password", value: "123", isValid: false },
  { label: "Phone", value: "0909", isValid: true },
];

const allValidate = formFields.every((res) => res.isValid === true);
console.log(allValidate);

const hasInValidate = formFields.some((res) => res.isValid === false);
console.log(hasInValidate);

// Thêm trường hợp bị form fail hết ???

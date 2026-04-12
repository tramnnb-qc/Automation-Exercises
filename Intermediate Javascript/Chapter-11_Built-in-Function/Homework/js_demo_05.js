/*
 * Bài 5: Tìm kiếm và Đối soát (Find & Includes)
Đề bài: Bạn lấy được danh sách các mã lỗi từ Log hệ thống và một mã lỗi cụ thể từ UI.
JavaScript
const systemErrors = [
    { code: "E01", msg: "Invalid Password" },
    { code: "E02", msg: "User Not Found" },
    { code: "E03", msg: "Network Timeout" }
];
const errorFromUI = "E02";

Yêu cầu:
1. Sử dụng .find() để tìm object lỗi trong systemErrors có mã trùng với errorFromUI.
2. Sau khi tìm được, in ra câu thông báo lỗi (msg) tương ứng để so sánh với UI.
3. Tạo một mảng phụ chứa các mã lỗi "nghiêm trọng": 
const criticalErrors = ["E01", "E03"]. Sử dụng .includes() để 
kiểm tra xem mã errorFromUI có nằm trong danh sách nghiêm trọng hay không.
*/

const systemErrors = [
  { code: "E01", msg: "Invalid Password" },
  { code: "E02", msg: "User Not Found" },
  { code: "E03", msg: "Network Timeout" },
];
const errorFromUI = "E02";

const sameError = systemErrors.find((err) => err.code === errorFromUI);
console.log(sameError);

console.log(
  `Mã lỗi UI ${errorFromUI} có thông báo lỗi hệ thống là ${sameError.msg}`,
);

const criticalErrors = ["E01", "E03"];

const isCritical = criticalErrors.includes(errorFromUI);
console.log(isCritical);

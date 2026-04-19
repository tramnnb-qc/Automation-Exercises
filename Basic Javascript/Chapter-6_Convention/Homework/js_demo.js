/* Hãy yêu cầu học viên sửa lại đoạn code "thảm họa" sau đây cho đúng Convention:
const base_url = "https://google.com"
let Isvisible = true
function DANGNHAP(u,p)
{
let Error_message = "fail";
console.log(Error_message)
}
*/
const BASE_URL = "https://google.com";
let isVisible = true;
function loginPage(userName, password) {
  let errorMessage = "fail";
  console.log(errorMessage);
}

/*
Bài 1: Chỉnh lại đoạn code dưới đây cho đúng convention
const Url_DANG_NHAP = "https://test-site.com/login"
let Kiemtra_button = true
var user = "admin_01"

function Kiem_Tra_Login(U, P){
if(U === "admin"){
console.log("Welcome")
}else{
let ERROR_MSG = "Sai pass rùi"
console.log(ERROR_MSG)
}
}
*/

const URL_DANG_NHAP = "https://test-site.com/login";
let checkButton = true;
var userName = "admin_01";

function loginPage(userName, password) {
  if (userName === "admin") {
    console.log("Welcome");
  } else {
    let errorMessage = "Sai pass rùi";
    console.log(errorMessage);
  }
}

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

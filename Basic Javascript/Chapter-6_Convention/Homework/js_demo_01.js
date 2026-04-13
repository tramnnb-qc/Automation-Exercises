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

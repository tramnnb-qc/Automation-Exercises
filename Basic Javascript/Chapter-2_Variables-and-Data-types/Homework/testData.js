/* Bài 1: Quản lý thông tin môi trường (Cơ bản)
    1. Khai báo một hằng số BASE_URL chứa địa chỉ: https://automationfc.com. 
    2. Khai báo một biến timeout và gán giá trị là 30000 (ms). 
    3. In ra màn hình dòng chữ: 
    "Hệ thống sẽ kiểm thử trên trang: https://automationfc.com với thời gian chờ là 30000ms". */

console.log("Bài tập 1:");
const BASE_URL = "https://automationfc.com";

const timeout = 30000;

console.log(
  `Hệ thống sẽ kiểm thử trên trang: ${BASE_URL} với thời gian chờ là ${timeout}ms`,
);

// console.log(
//   "Hệ thống sẽ kiểm thử trên trang:" +
//     BASE_URL +
//     "với thời gian chờ là" +
//     timeout +
//     "ms",
// );

////////////////////////////////////////// ~~~~~~~~~~ /////////////////////////////////////////////////

/* Bài 2: Mô phỏng dữ liệu đăng nhập (Object)
    1. Tạo một Object tên là userAccount bao gồm các thuộc tính: username, password, và role (Admin/User).
    2. Hãy in ra màn hình thông tin username và role của đối tượng đó.
    Thử thách: Thay đổi giá trị của role từ "User" thành "Manager" và in lại Object để kiểm tra. */

console.log("Bài tập 2:");
const userAccount = {
  username: "tramnnb",
  password: "123456",
  role: "User",
};

console.log(`username: ${userAccount.username}`);
console.log(`role: ${userAccount.role}`);

userAccount.role = "Manager"; // cập nhật giá trị
console.log(`username after change: ${userAccount.username}`);
console.log(`role after change: ${userAccount.role}`);

////////////////////////////////////////// ~~~~~~~~~~ /////////////////////////////////////////////////

/* Bài 3: Danh sách sản phẩm trong giỏ hàng (Array)
    1. Tạo một mảng (Array) tên là cartItems chứa tên của 3 sản phẩm (ví dụ: "iPhone 15", "Samsung S23", "Macbook M3").
    2. In ra màn hình số lượng sản phẩm đang có trong giỏ hàng (sử dụng thuộc tính .length).
    3. In ra tên của sản phẩm thứ 2 trong danh sách.
    Gưu ý: Nhớ rằng mảng trong Javascript bắt đầu từ vị trí số 0. */

console.log("Bài tập 3:");
const cartItems = ["iPhone 15", "Samsung S23", "Macbook M3"];

console.log("Number of products in the shopping cart: ", cartItems.length);

console.log("The name of the 2nd product is: ", cartItems[3]);

////////////////////////////////////////// ~~~~~~~~~~ /////////////////////////////////////////////////

/* Bài 4: Kiểm tra trạng thái Test Case (Boolean & Logic)
    1. Khai báo một biến isElementDisplayed và gán giá trị true.
    2. Khai báo một biến errorMessage và gán giá trị là một chuỗi rỗng "".
    3. In ra kiểu dữ liệu của hai biến trên bằng lệnh typeof.
    4. Ứng dụng: Hãy tạo một biến testResult để lưu kết quả phép so sánh: 
    "Nếu isElementDisplayed là true VÀ errorMessage là chuỗi rỗng thì testResult sẽ là true". 
    In testResult ra console. */

console.log("Bài tập 4:");
const isElementDisplayed = true;

const errorMessage = "";

console.log("Type of isElementDisplayed:", typeof isElementDisplayed);
console.log("Type of errorMessage:", typeof errorMessage);

const testResult = isElementDisplayed == true && errorMessage === "";
console.log("Test Result:", testResult);

////////////////////////////////////////// ~~~~~~~~~~ /////////////////////////////////////////////////

/* Bài 5: Xây dựng bộ Selector (Dữ liệu thực tế)
    Yêu cầu: Trong Automation, chúng ta thường quản lý Locator của các Element. 
    Hãy tạo một Object tên là loginPageLocators chứa:
        usernameInput: "input#username"
        passwordInput: "input#password"
        loginButton: "button.btn-primary"
        rememberMeCheckbox: "input[type='checkbox']"
    Nâng cao: Tạo một chuỗi bằng Backtick để mô phỏng một dòng log: 
    "Thực hiện Click vào phần tử có Selector là: [giá trị của loginButton ở trên]" */

console.log("Bài tập 5:");
const loginPageLocators = {
  usernameInput: "input#username",
  passwordInput: "input#password",
  loginButton: "button.btn-primary",
  rememberMeCheckbox: "input[type='checkbox']",
};

console.log(
  `Thực hiện Click vào phần tử có Selector là: ${loginPageLocators.loginButton}`,
);

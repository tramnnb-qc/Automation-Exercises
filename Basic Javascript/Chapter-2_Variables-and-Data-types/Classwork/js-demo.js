// khai báo let & const
// const baseurl = "https://staging.example.com";
// console.log("base url: " + baseurl);

// const errormessage = ["400", "401", "404"];
// let retrycount = 0
// for (retrycount in errormessage){
//     console.log(`message: ${retrycount} | ${errormessage[retrycount]}`);
// }

// string
// const username = "admin_01";
// const message = `Chào mừng ${username} đã đăng nhập thành công!`;
// console.log(message);

// number
// const  color = require('color');
// const timeout = 5000; // 5 giây
// let productQuantity = 2;
// console.log(`${timeout}`);

// boolean
// const isElementDisplayed = true;
// const isButtonClickable = false;
// console.log(isButtonClickable);

// array
// const categories = ["Laptop", "Mobile", "Tablet"];
// for (let i in categories){
//     console.log(`${categories[i]}`);
// }

// object
// const testAccount = {
//     username: "test_user_01",
//     password: "Password123",
//     role: "Admin"
// };
// // c1:
// console.log(testAccount.username);
// // c2:
// for (let key in testAccount) {
//   console.log(`${key}: ${testAccount[key]}`);
// }

// cú pháp object literal => {}
let tester = {
  username: "Tramnnb",
  age: 25,
  greet: function () {
    console.log(`Hi, I am ${this.username} and I am ${this.age}.`);
  },
  hobbies: ["traveling", "coding", "cycling"],
  locations: {
    interanl: ["HCM", "LA", "VT"],
    oversea: ["Bali", "Thailand", "Singapore"],
  },
};
console.log(tester);

// từ khóa new Object()
let tester2 = new Object();
tester2.username = "QC";
tester2.age = 30;
tester2.locations = {
  interanl: ["HCM", "LA", "VT"],
  oversea: ["Bali", "Thailand", "Singapore"],
};
console.log(tester2);

// 2 cách truy cập đến thuộc tính của Object
console.log(tester.username);
console.log(tester["username"]);

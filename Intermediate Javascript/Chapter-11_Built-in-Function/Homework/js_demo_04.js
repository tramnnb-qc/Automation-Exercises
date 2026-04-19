/*
 * Bài 4: Xử lý Cấu hình (Object methods & Spread Operator)
Đề bài: Bạn có một file cấu hình chung (defaultConfig) và một cấu hình riêng 
cho môi trường Staging (stagingConfig).

JavaScript
const defaultConfig = {
    browser: "chrome",
    timeout: 5000,
    headless: true
};

const stagingConfig = {
    timeout: 10000,
    url: "https://staging.example.com"
};

Yêu cầu:
1. Sử dụng Spread Operator (...) để gộp 2 object này thành finalConfig. 
Lưu ý: Giá trị của stagingConfig phải ghi đè lên defaultConfig.
2. Sử dụng Object.keys() để in ra danh sách các thông số cấu hình có trong finalConfig.
*/

const defaultConfig = {
  browser: "chrome",
  timeout: 5000,
  headless: true,
};

const stagingConfig = {
  timeout: 10000,
  url: "https://staging.example.com",
};

const finalConfig = { ...defaultConfig, ...stagingConfig };
console.log(finalConfig);

const keysConfig = Object.keys(finalConfig);
console.log(keysConfig);

// const a = { ...null };
// const b = [...null];
// console.log(a);
// console.log(b);

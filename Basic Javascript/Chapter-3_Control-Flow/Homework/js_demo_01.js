/* Bài 1: Kiểm tra kết quả Test 
Khai báo biến actualResult = "Login Success" và expectedResult = "Login Success". 
Hãy dùng if...else để in ra "PASSED" nếu hai biến bằng nhau, ngược lại in ra "FAILED". */

const actualResult = "Login Success";

const expectedResult = "Login Success";

// Cách 1:
if (actualResult === expectedResult) {
  console.log("PASSED");
} else {
  console.log("FAILED");
}

// Cách 2:
// const testResult = actualResult === expectedResult ? "PASSED" : "FAILED";
// console.log(testResult);

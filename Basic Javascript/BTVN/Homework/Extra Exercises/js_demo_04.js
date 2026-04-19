/* 
Bài 4: Hệ thống Điều phối Test Execution (Smart Runner)
Yêu cầu: Giả lập một hệ thống quyết định xem có chạy Test hay không. 
Đầu vào: isServerUp (boolean), isDatabaseConnected (boolean), 
lastTestStatus (Passed/Failed), isWeekend (boolean). Quy tắc:
    1. Chỉ chạy Test nếu isServerUp và isDatabaseConnected đều là true.
    2. Nếu là isWeekend:
        - Chỉ chạy các test có lastTestStatus là "Failed" (để sửa lỗi).
        - Nếu lastTestStatus là "Passed", in ra "Chỉ chạy vào ngày thường".
        - Nếu không phải cuối tuần: Chạy tất cả.
    Thử thách Clean Code: Viết logic sao cho không sử dụng quá 2 từ khóa else. 
    (Sử dụng kỹ thuật Return Early hoặc Guard Clauses).
*/

function runTest(isServerUp, isDatabaseConnected, lastTestStatus, isWeekend) {
  if (isServerUp === true && isDatabaseConnected === true) {
    return true;
  }

  switch (isWeekend) {
    case true:
      if (lastTestStatus === "Failed") {
        return true;
      } else {
        return "Chỉ chạy vào ngày thường";
      }
    default:
      return true;
  }
}

console.log(runTest(true, false, "Failed", true));

/*
 * Bài 2: Tính toán báo cáo (Reduce)
Đề bài: Sau khi chạy một bộ test (Test Suite), bạn nhận được mảng kết quả như sau:

const testResults = [
    { id: 1, duration: 120, status: "passed" },
    { id: 2, duration: 450, status: "failed" },
    { id: 3, duration: 200, status: "passed" },
    { id: 4, duration: 310, status: "passed" }
];

Yêu cầu:
1. Sử dụng .reduce() để tính tổng thời gian (duration) thực thi của toàn bộ các Test Case.
2. (Nâng cao) Tiếp tục dùng .reduce() để đếm xem có bao nhiêu test "passed" và bao nhiêu test "failed" 
(Kết quả trả về là 1 object: { passed: 3, failed: 1 }).
*/

const testResults = [
  { id: 1, duration: 120, status: "passed" },
  { id: 2, duration: 450, status: "failed" },
  { id: 3, duration: 200, status: "passed" },
  { id: 4, duration: 310, status: "passed" },
];

const totalDuration = testResults.reduce(
  (total, cur) => total + cur.duration,
  0,
);
console.log(totalDuration);

const summaryTest = testResults.reduce((acc, current) => {
  const status = current.status;

  if (!acc[status]) {
    acc[status] = 0;
  }

  acc[status] += 1;
  return acc;
}, {});

console.log(summaryTest);

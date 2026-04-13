/* Bài 2: Phân loại mức độ lỗi (Bug Severity) 
    Cho một biến bugPriority có giá trị từ 1 đến 3.
    Nếu là 1: In ra "Blocker - Sửa ngay!".
    Nếu là 2: In ra "High - Cần sửa trong sprint".
    Nếu là 3: In ra "Low - Sửa sau". 
    (Gợi ý: Dùng if...else if...else hoặc switch...case). */

const bugPriority = 5;

// If...else
if (bugPriority === 1) {
  console.log("Blocker - Sửa ngay!");
} else if (bugPriority === 2) {
  console.log("High - Cần sửa trong sprint");
} else if (bugPriority === 3) {
  console.log("Low - Sửa sau");
} else {
  console.log("Giá trị không hợp lệ");
}

// switch...case
switch (bugPriority) {
  case 1:
    console.log("Blocker - Sửa ngay!");
    break;
  case 2:
    console.log("High - Cần sửa trong sprint");
    break;
  case 3:
    console.log("Low - Sửa sau");
    break;
  default:
    console.log("Giá trị không hợp lệ");
}

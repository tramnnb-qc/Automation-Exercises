/*
Bài tập 1: Quét qua danh sách lỗi Cho mảng 
const bugs = ["Bug 1", "Bug 2", "Bug 3", "Bug 4"]; 
Hãy dùng vòng lặp for để in ra: Đang xử lý Bug 1 Đang xử lý Bug 2...
*/

const bugs = ["Bug 1", "Bug 2", "Bug 3", "Bug 4"];
for (const bug of bugs) {
  console.log(`Đang xử lý ${bug}`);
}

/*
Bài tập 2: Tìm kiếm dữ liệu (Dùng break) Cho mảng 
const names = ["Luke", "Diện", "Điểm", "Trâm", "Ngân"]; 
Hãy dùng vòng lặp để tìm tên "Ngân". Khi thấy tên "Ngân", in ra "Đã tìm thấy Ngân!" và dừng vòng lặp ngay lập tức.
*/

const names = ["Luke", "Diện", "Điểm", "Trâm", "Ngân"];
for (let i = 0; i < names.length; i++) {
  if (names[i] === "Ngân") {
    console.log("Đã tìm thấy Ngân!", "ở vị trí thứ", i + 1, "của mảng");
    break;
  } else {
    continue;
  }
}

/*
Bài tập 3: Data Driven nâng cao (Object + Array + Loop) Cho danh sách tài khoản:

const users = [
  { name: "Users 1", status: "Active" },
  { name: "Users 2", status: "Inactive" },
  { name: "Users 3", status: "Active" },
];
Hãy dùng vòng lặp for ... of để in ra tên của những User có trạng thái là "Active".
*/

const users = [
  { name: "Users 1", status: "Active" },
  { name: "Users 2", status: "Inactive" },
  { name: "Users 3", status: "Active" },
];

for (let user of users) {
  if (user.status === "Active") {
    console.log(user);
  }
}

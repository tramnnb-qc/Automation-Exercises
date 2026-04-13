/*
Bài 3: Hàm lọc danh sách Bug (Kết hợp Loop + Array + Function) 
    Cho một mảng các đối tượng bug:

const myBugs = [
    { id: 1, severity: "High" },
    { id: 2, severity: "Low" },
    { id: 3, severity: "High" }
];

Viết hàm getHighSeverityBugs(list) để trả về một mảng mới chỉ chứa các bug có severity là "High".
*/

const myBugs = [
  { id: 1, severity: "High" },
  { id: 2, severity: "Low" },
  { id: 3, severity: "High" },
];
function getHighSeverityBugs(listBug) {
  const highBug = [];
  for (let bug of listBug) {
    if (bug.severity === "High") {
      highBug.push(bug);
    }
  }
  return highBug;
}
console.log(getHighSeverityBugs(myBugs));

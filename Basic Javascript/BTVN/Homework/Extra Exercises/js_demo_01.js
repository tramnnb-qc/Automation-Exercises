/* 
    Bài 1: Hệ thống Phân loại Bug & Tự động Gán (Auto-Assignment)
    Yêu cầu: 
    Viết một chương trình nhận vào 3 thông số của một Bug: 
    severity (Critical, High, Medium, Low), isReproducible (true/false), và affectedModule (UI, API, Database). 
    Logic khó:
        Nếu Bug là Critical VÀ isReproducible là true: In ra "Priority: P0 - Assign to Tech Lead".
        Nếu Bug là Critical nhưng KHÔNG isReproducible: Hạ xuống "Priority: P1 - Assign to Senior QA".
        Nếu Bug ở module Database: Bất kể severity nào (trừ Critical), đều in ra "Assign to DBA Team".
        Các trường hợp còn lại: In ra "Priority: P2 - Assign to Developer".
        Điều kiện bắt buộc: Sử dụng Switch Case kết hợp If/Else. Không được viết quá 3 tầng If lồng nhau.
*/
/* 
severity:           Critical, High, Medium, Low
isReproducible:     true, false
affectedModule:     UI, API, Database
*/

// switch (bug.severity) {
//   case "Critical":
//     if (bug.isReproducible === true) {
//       console.log("Priority: P0 - Assign to Tech Lead");
//     } else {
//       console.log("Priority: P1 - Assign to Senior QA");
//     }
//     break;
//   case "High":
//   case "Medium":
//   case "Low":
//     if (bug.affectedModule === "Database") {
//       console.log("Assign to DBA Team");
//     }
//     break;
//   default:
//     console.log("Priority: P2 - Assign to Developer");
//     break;
// }

// const bug = {
//   severity: "High",
//   isReproducible: false,
//   affectedModule: "API",
// };
// console.log(bug);

// switch (bug.affectedModule) {
//   case "Database":
//     if (bug.severity !== "Critical") {
//       console.log("Assign to DBA Team");
//     } else {
//       console.log("Priority: P0 - Assign to Tech Lead");
//     }
//     break;
//   default:
//     if (bug.severity === "Critical" && bug.isReproducible === true) {
//       console.log("Priority: P0 - Assign to Tech Lead");
//     } else if (bug.severity === "Critical" && bug.isReproducible !== true) {
//       console.log("Priority: P1 - Assign to Senior QA");
//     } else {
//       console.log("Priority: P2 - Assign to Developer");
//     }
//     break;
// }

const bug = {
  severity: "High",
  isReproducible: false,
  affectedModule: "API",
};

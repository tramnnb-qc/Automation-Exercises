// const prices = [100, 200, 300];
// // Chuyển đổi giá tiền sang định dạng có thêm ký hiệu $
// const formattedPrices = prices.map((price) => `$${price}`);
// console.log(formattedPrices); // ["$100", "$200", "$300"]

// const scores = [4, 8, 5, 9, 3];
// // Lọc ra các điểm số đạt (từ 5 trở lên)
// const passedScores = scores.filter((score) => score >= 5);
// console.log(passedScores); // [8, 5, 9]

// const buttons = ["Login", "Signup", "Reset"];
// // Giả lập hành động click vào từng button
// buttons.forEach((btn) => console.log(`Clicking on ${btn} button...`));

// const users = [
//   { id: 1, name: "An" },
//   { id: 2, name: "Bình" },
//   { id: 3, name: "Đạt" },
//   { id: 4, name: "An" },
// ];
// const user = users.find((u) => u.id === 2);
// console.log(user.name); // "Bình"

// const user1 = users.find((u) => u.name === "An");
// console.log(user1.id);

// const activeTags = ["urgent", "low-priority", "new"];
// const isUrgent = activeTags.includes("urgent");
// console.log(isUrgent);

// const results = ["passed", "passed", "failed"];
// const allPassed = results.every((res) => res === "passed"); // false
// const hasPassed = results.some((res) => res === "passed"); // true
// console.log(allPassed);
// console.log(hasPassed);

// const cart = [10, 20, 30];
// // Tính tổng tiền trong giỏ hàng
// const total = cart.reduce((sum, item) => sum + item, 0);
// console.log(total); // 60

// const testCase = {
//   id: "TC-01",
//   title: "Verify Login",
//   status: "Passed",
// };

// const keys = Object.keys(testCase);
// console.log(keys); // ["id", "title", "status"]

// const values = Object.values(testCase);
// console.log(values); // ["TC-01", "Verify Login", "Passed"]

// Object.entries(testCase).forEach(([key, value]) => {
//   console.log(`${key}: ${value}`);
// });
// // id: TC-01, title: Verify Login...

// const config = { browser: "Chrome" };
// const env = { url: "https://staging.com" };

// // Gộp 2 object thành 1
// const finalConfig = { ...config, ...env };
// console.log(finalConfig); // { browser: "Chrome", url: "https://staging.com" }

// const testResults = [
//   { name: "Login", status: "Passed" },
//   { name: "Add Cart", status: "Failed" },
//   { name: "Checkout", status: "Passed" },
//   { name: "Logout", status: "Passed" },
// ];

// const summary = testResults.reduce((acc, current) => {
//   const status = current.status;
//   // Nếu trạng thái chưa có trong giỏ, khởi tạo bằng 0
//   if (!acc[status]) {
//     acc[status] = 0;
//   }
//   // Cộng thêm 1
//   acc[status]++;
//   return acc;
// }, {}); // Khởi tạo là một Object rỗng {}

// console.log(summary);
// // Kết quả: { Passed: 3, Failed: 1 }

// const orderIds = [1, 2, 3];

// async function deleteOrders() {
//   console.log("--- Bắt đầu xóa ---");

//   orderIds.forEach(async (id) => {
//     await deleteOrdersAPI(id); // Giả sử mất 2 giây mỗi lần
//     console.log(`Đã xóa xong đơn ${id}`);
//   });

//   console.log("--- Kết thúc hàm xóa ---");
// }

// deleteOrders();

// async function deleteOrders() {
//   for (const id of orderIds) {
//     await deleteOrderApi(id);
//     console.log(`Đã xóa đơn ${id} thành công.`);
//   }
//   console.log("Tất cả đã xong!");
// }
// deleteOrders();

// async function deleteOrders() {
//   // map sẽ tạo ra một mảng các Promises
//   const promises = orderIds.map(async (id) => {
//     return deleteOrderApi(id);
//   });

//   // Đợi cho đến khi tất cả các Promises trong mảng xong hết
//   await Promise.all(promises);
//   console.log("Đã xóa toàn bộ song song!");
// }

// Giả lập API (mỗi lần gọi sẽ mất thời gian random)
function deleteOrderApi(id) {
  return new Promise((resolve) => {
    const delay = Math.floor(Math.random() * 2000) + 1000; // 1s -> 3s

    console.log(`Bắt đầu xóa đơn ${id} (mất ${delay}ms)`);

    setTimeout(() => {
      console.log(`Đã xóa xong đơn ${id}`);
      resolve(id);
    }, delay);
  });
}

const orderIds = [1, 2, 3];

async function deleteSequential() {
  console.log("\n===== SEQUENTIAL (TUẦN TỰ) =====");

  console.time("Sequential Time");

  for (const id of orderIds) {
    await deleteOrderApi(id);
  }

  console.timeEnd("Sequential Time");
  console.log("Xong tuần tự!\n");
}

async function deleteParallel() {
  console.log("\n===== PARALLEL (SONG SONG) =====");

  console.time("Parallel Time");

  const promises = orderIds.map(async (id) => await deleteOrderApi(id));

  //   await Promise.all(promises);

  console.timeEnd("Parallel Time");
  console.log("Xong song song!\n");
}

async function runDemo() {
  //   await deleteSequential();
  await deleteParallel();
}

runDemo();

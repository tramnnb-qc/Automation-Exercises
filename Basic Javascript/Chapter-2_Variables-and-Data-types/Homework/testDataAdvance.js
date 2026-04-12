/* Bài tập 1: Quản lý danh sách lỗi (Array)
    Tạo mảng bugList chứa 3 lỗi: "Lỗi giao diện", "Lỗi API", "Lỗi Logic".
    Dùng lệnh để thêm lỗi "Lỗi bảo mật" vào cuối danh sách.
    Xóa lỗi đầu tiên ra khỏi mảng.
    In ra màn hình: "Danh sách hiện có [số lượng] lỗi". */

console.log("Bài tập 1:");
const bugList = ["Lỗi giao diện", "Lỗi API", "Lỗi Logic"];

bugList.push("Lỗi bảo mật");

bugList.shift();

console.log(`Danh sách hiện có ${bugList.length} lỗi`);

/* Bài tập 2: Quản lý thông tin cấu hình (Object)
Tạo một Object config bao gồm: browser: "Chrome", headless: false, retries: 2.
Hãy đổi headless thành true.
Thêm một thuộc tính mới là screenshot: "on-failure".
In toàn bộ Object config ra màn hình. */

console.log("Bài tập 2:");
const configBrowser = {
  browser: "Chrome",
  headless: false,
  retries: 2,
};

configBrowser.headless = true;

configBrowser.screenshot = "on-failure";

console.log(configBrowser);

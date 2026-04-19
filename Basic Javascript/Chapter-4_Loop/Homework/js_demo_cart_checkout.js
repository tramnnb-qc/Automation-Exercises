/* BÀI TẬP SIÊU THỬ THÁCH: HỆ THỐNG KIỂM TRA GIỎ HÀNG ĐA QUỐC GIA

Ngữ cảnh: 
    Bạn đang viết script để kiểm tra giỏ hàng của một hệ thống thương mại điện tử toàn cầu. 
    Dữ liệu trả về là một danh sách các "Kiện hàng" (Packages), bên trong mỗi kiện hàng lại chứa một danh sách các "Sản phẩm" (Items).

Dữ liệu đầu vào:

const deliveryData = [
    {
        packageId: "PKG_001",
        region: "Asia",
        items: [
            { name: "iPhone 15", price: 1000, quantity: 2 },
            { name: "Mouse", price: 50, quantity: 5 }
        ]
    },
    {
        packageId: "PKG_002",
        region: "Europe",
        items: [
            { name: "Macbook", price: 2000, quantity: 1 },
            { name: "Keyboard", price: 150, quantity: 0 } // Lỗi: Số lượng bằng 0
        ]
    },
    {
        packageId: "PKG_003",
        region: "America",
        items: [
            { name: "Screen", price: 500, quantity: 3 }
        ]
    }
];

    Yêu cầu bài tập (4 cấp độ):
        Dễ (Nested Loop): Duyệt qua toàn bộ dữ liệu và in ra tên của tất cả sản phẩm có trong mọi kiện hàng theo định dạng: [Mã Kiện Hàng] - [Tên Sản Phẩm].
        Thường (Data Validation): Trong quá trình duyệt, nếu phát hiện sản phẩm nào có quantity (số lượng) bằng 0, hãy in ra cảnh báo: [⚠️ WARNING] Sản phẩm [Tên Sản Phẩm] trong kiện [Mã ID] bị lỗi số lượng!.
        Khó (Complex Calculation): 
            * Tính tổng giá trị của từng kiện hàng (Giá trị kiện hàng = Tổng của các price * quantity bên trong).
            In ra kết quả: Kiện hàng [Mã ID] ở vùng [Region] có tổng giá trị là: [Tổng tiền]$.
        Ác Mộng (Logic Tìm kiếm nâng cao): 
            * Tìm xem trong tất cả các kiện hàng, có sản phẩm nào tên là "Macbook" thuộc vùng "Europe" hay không?
            Nếu có, hãy in ra: 🚩 Đã tìm thấy Macbook tại Châu Âu!.
            Yêu cầu tối ưu: Ngay khi tìm thấy Macbook tại Châu Âu, hãy dừng toàn bộ việc kiểm tra (thoát ra khỏi tất cả các vòng lặp) để tiết kiệm thời gian chạy test.

    Gợi ý:
        Vòng lặp lồng nhau: Bạn cần một vòng for bên ngoài để duyệt deliveryData (kiện hàng), và một vòng for bên trong để duyệt mảng items của kiện hàng đó.
        Thoát vòng lặp lồng nhau: Để dừng cả 2 vòng lặp cùng lúc khi tìm thấy "Macbook", 
        bạn có thể dùng một biến cờ hiệu (Flag) như let found = false; hoặc đưa toàn bộ code vào một hàm và dùng return.
        Tính tổng: Nhớ reset biến totalPackagePrice = 0 mỗi khi bắt đầu duyệt một kiện hàng mới.
*/

const deliveryData = [
  {
    packageId: "PKG_001",
    region: "Asia",
    items: [
      { name: "iPhone 15", price: 1000, quantity: 2 },
      { name: "Mouse", price: 50, quantity: 5 },
    ],
  },
  {
    packageId: "PKG_002",
    region: "Europe",
    items: [
      { name: "Macbook", price: 2000, quantity: 1 },
      { name: "Keyboard", price: 150, quantity: 0 }, // Lỗi: Số lượng bằng 0
    ],
  },
  {
    packageId: "PKG_003",
    region: "America",
    items: [{ name: "Screen", price: 500, quantity: 3 }],
  },
];

// in ra tên của tất cả sản phẩm có trong mọi kiện hàng theo định dạng: [Mã Kiện Hàng] - [Tên Sản Phẩm]
function printAllProductInOrder(package) {
  for (let order of package) {
    // chạy qua từng order trong package
    const items = []; // mảng items dùng để lưu tên sản phẩm của order
    for (let item of order.items) {
      // chạy qua từng item trong order
      items.push(item.name);
    }
    console.log(`${order.packageId} - ${items}`);
  }
}
printAllProductInOrder(deliveryData);

// * Giá trị kiện hàng = Tổng của các price * quantity bên trong.
// In ra: Kiện hàng [Mã ID] ở vùng [Region] có tổng giá trị là: [Tổng tiền]$.

function printTotalPricePackage(package) {
  for (let order of package) {
    let totalPrice = 0; // biến totalPrice dùng để lưu giá trị của tổng sản phẩm trong ĐH
    for (let item of order.items) {
      // vòng lặp qua mỗi sản phẩm trong ĐH
      totalPrice += item.price * item.quantity; // cộng thêm giá trị của từng loại SP qua mỗi lần lặp cho biến totalPrice
    }
    console.log(
      `Kiện hàng: ${order.packageId} ở vùng ${order.region} có tổng giá trị là: ${totalPrice} $`,
    );
  }
}
printTotalPricePackage(deliveryData);

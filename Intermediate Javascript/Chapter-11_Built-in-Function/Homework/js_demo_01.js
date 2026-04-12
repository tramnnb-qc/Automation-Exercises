/*
 * Bài 1: Lọc và Biến đổi dữ liệu (Filter & Map)
Đề bài: Bạn có một mảng danh sách các sản phẩm lấy về từ trang tìm kiếm.

const products = [
    { name: "iPhone 15", price: 1000, stock: 5 },
    { name: "Macbook M3", price: 2000, stock: 0 },
    { name: "AirPods Pro", price: 250, stock: 10 },
    { name: "iPad Air", price: 600, stock: 0 }
];

Yêu cầu: 
1. Sử dụng .filter() để lấy ra các sản phẩm còn hàng (stock > 0). 
2. Sử dụng .map() từ kết quả trên để tạo ra mảng mới chỉ chứa tên của các sản phẩm còn hàng. 
3. In mảng tên sản phẩm ra màn hình.
*/

const products = [
  { name: "iPhone 15", price: 1000, stock: 5 },
  { name: "Macbook M3", price: 2000, stock: 0 },
  { name: "AirPods Pro", price: 250, stock: 10 },
  { name: "iPad Air", price: 600, stock: 0 },
];

const inStock = products.filter((item) => item.stock > 0);
console.log(inStock);

const itemInStock = inStock.map((item) => item.name);
console.log("Mảng các sản phẩm còn hàng: ", itemInStock);

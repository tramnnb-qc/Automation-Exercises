/*
Bài 5: Xây dựng Bộ lọc Tìm kiếm nâng cao (The Ultimate Filter)
Yêu cầu: Cho một đối tượng sản phẩm 
const product = { name: "iPhone", price: 1200, color: "Black", inStock: true }; 
và một đối tượng bộ lọc từ người dùng 
const filter = { maxPrice: 1500, preferredColor: "Black", requireStock: true };. 
Logic: 
    Viết một chương trình kiểm tra xem product có thỏa mãn tất cả các điều kiện 
    trong filter hay không.
    Nếu thỏa mãn: In ra "Product Matches!".
    Nếu không thỏa mãn: Phải in ra tất cả những lý do khiến nó không khớp 
    (Ví dụ: "Giá quá cao", "Sai màu"...).
    Đặc biệt: Nếu filter.maxPrice không có giá trị (undefined), 
    hãy bỏ qua việc kiểm tra giá.
*/

const product = { name: "iPhone", price: 1200, color: "Black", inStock: true };

const filter = { maxPrice: 1500, preferredColor: "Black", requireStock: true };

function matchProduct(product, filter) {
  let reason = "";

  if (filter.maxPrice !== undefined && product.price > filter.maxPrice) {
    reason += "Giá quá cao";
  }
  if (filter.preferredColor && product.color !== filter.preferredColor) {
    reason += "Sai màu";
  }
  if (filter.requireStock && !product.inStock) {
    reason += "Hết hàng";
  }
  return reason;
}

console.log(matchProduct(product, filter));

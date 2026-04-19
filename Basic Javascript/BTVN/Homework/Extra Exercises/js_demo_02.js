/* 
    Bài 2: Trình kiểm tra Độ mạnh Mật khẩu (Password Validator)
    Yêu cầu: Viết một hàm validatePassword(password) kiểm tra các điều kiện sau:
    1. Độ dài phải từ 8 đến 20 ký tự.
    2. Phải chứa ít nhất một ký tự viết hoa.
    3. Phải chứa ít nhất một con số.
    4. Cực khó: Không được chứa khoảng trắng. 
    Output: Trả về một chuỗi thông báo cụ thể lỗi đầu tiên nó gặp phải (Ví dụ: "Thiếu chữ hoa", "Quá ngắn"...). 
    Nếu thỏa mãn hết thì trả về "Password Secure".
    Gợi ý: Học viên cần kết hợp toán tử logic &&, || và các hàm xử lý chuỗi cơ bản.
*/
function validatePassword(password) {
  if (password.length < 8) {
    return "Quá ngắn";
  }
  if (password.length > 20) {
    return "Quá dài";
  }
  if (password == password.toLowerCase()) {
    return "Thiếu chữ hoa";
  }
  if (!password.match(/[0-9]/)) {
    return "Thiếu số";
  }
  if (password.match(/\s/)) {
    return "Không được chứa khoảng trắng";
  }

  return "Password Secure";
}

console.log(validatePassword("priori78ysdG"));

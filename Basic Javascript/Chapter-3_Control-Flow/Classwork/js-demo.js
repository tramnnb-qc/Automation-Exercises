console.log(10 !== "10"); //true
console.log(5 > 3 && 2 === "2"); //true
console.log(100 >= 100 || 1 === 2); //true

let isVisible = true;
console.log(!isVisible); //false

/*
Câu hỏi tình huống: Bạn lấy được số lượng sản phẩm từ Website là chuỗi "5". 
Bạn muốn kiểm tra xem nó có lớn hơn 0 hay không. Bạn nên dùng cách nào an toàn nhất? 
(Gợi ý: Ép kiểu về Number trước khi so sánh === hay cứ dùng > 0?)
*/

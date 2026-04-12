# BÀI KIỂM TRA KIẾN THỨC

## Câu 1

Trong cơ chế **Event Loop**, khi một **Promise được resolve**,  
callback của nó (`.then` hoặc sau `await`) sẽ được đưa vào hàng đợi nào?

**A.** Call Stack  
**B.** Web APIs  
**C.** Microtask Queue  
**D.** Callback Queue (Macrotask)

**Đáp án: C. Microtask Queue**

---

#### JavaScript có 2 loại hàng đợi chính:

##### 1. **Macrotask Queue (hàng chờ thường)**

Chứa các tác vụ như:

- `setTimeout`
- `setInterval`
- DOM events (click, input,...)

##### 2. **Microtask Queue (hàng chờ ưu tiên)**

Chứa các tác vụ như:

- `Promise.then / catch / finally`
- `await` (bản chất là Promise)

#### Event Loop hoạt động như thế nào?

Mỗi vòng lặp sẽ chạy theo thứ tự:

1. Chạy **code đồng bộ (call stack)**
2. Khi **call stack rỗng** → chạy **toàn bộ Microtask Queue**
3. Sau đó mới xử lý **1 task từ Macrotask Queue**

---

## 🚨 Điểm quan trọng cần nhớ

> 🔥 **Microtask luôn được ưu tiên chạy trước Macrotask**

---

## 🎯 Kết luận

Khi **Promise được resolve**:

👉 Callback (`.then`, `await`) sẽ được đưa vào:

✅ **Microtask Queue**

👉 Và sẽ được chạy:

- **Ngay sau khi code hiện tại chạy xong**
- **Trước tất cả các `setTimeout`**

---

## 💡 Ghi nhớ nhanh (dễ thuộc)

- Promise → 🟡 Microtask (ưu tiên cao)
- setTimeout → 🔵 Macrotask (ưu tiên thấp)
- Thứ tự chạy:  
  👉 **Code thường → Microtask → Macrotask**

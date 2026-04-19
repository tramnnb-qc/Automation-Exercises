class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  getDetails() {
    return `${this.name} - $${this.price}`;
  }
}

// TODO: Tạo class Electronics kế thừa Product

class Electronics extends Product {
  constructor(name, price, warranty) {
    super(name, price);
    this.warranty = warranty;
  }
  getDetails() {
    return `${this.name} - $${this.price} - ${this.warranty}`;
  }
}

// TODO: Tạo class Clothing kế thừa Product

class Clothing extends Product {
  constructor(name, price, size) {
    super(name, price);
    this.size = size;
  }
  getDetails() {
    return `${this.name} - $${this.price} - ${this.size}`;
  }
}

class ShoppingCart {
  #items = []; // Private field

  addItem(product) {
    this.#items.push(product);
    console.log(`Đã thêm ${product.name} vào giỏ.`);
  }

  // TODO: Viết hàm showCart()
  // showCart() {
  //   return [...this.#items];
  // }
  showCart() {
    this.#items.forEach((item, index) => {
      console.log(`${index + 1}. ${item.getDetails()}`);
    });
  }

  // TODO: Viết hàm calculateTotal()
  calculateTotal() {
    return this.#items.reduce((total, item) => total + item.price, 0);
  }
}

// TODO: Viết hàm giả lập API thanh toán async processPayment()
function processPayment(totalAmount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (totalAmount > 0) {
        resolve("Thanh toán thành công");
      } else {
        reject("Giỏ hàng trống, không thể thanh toán");
      }
    }, 2000);
  });
}

// --- KỊCH BẢN CHẠY THỬ (TEST SCRIPT) ---
async function runDemo() {
  try {
    const cart = new ShoppingCart();

    // 1. Tạo sản phẩm
    const laptop = new Electronics("Macbook", 2000, 12);
    const shirt = new Clothing("T-Shirt", 20, "L");

    // In ra detail của sản phẩm
    // console.log(laptop.getDetails());
    // console.log(shirt.getDetails());

    // 2. Thêm vào giỏ
    cart.addItem(laptop);
    cart.addItem(shirt);

    // In ra thông tin Cart
    cart.showCart();

    // 3. Tính tiền và thanh toán
    const total = cart.calculateTotal();
    console.log("Tổng tiền:", total);

    // await processPayment(total);
    const result = await processPayment(total);
    console.log(result);
  } catch (error) {
    console.error("LỖI:", error);
  } finally {
    console.log("Hệ thống đóng. Hẹn gặp lại!");
  }
}

runDemo();

console.log("Dự án Đặc sản Tây Nguyên đã khởi động.");

async function loadProducts() {
  const list = document.querySelector("#product-list");

  try {
    const response = await fetch("data/products.json");
    const products = await response.json();

    list.innerHTML = products.map((product) => `
      <article class="product-card">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
      </article>
    `).join("");
  } catch (error) {
    list.textContent = "Không thể tải danh sách sản phẩm.";
    console.error(error);
  }
}

loadProducts();

// Cart logic: quantity change + delete
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".bf-cart-item");

  function formatPrice(num) {
    return num.toLocaleString("en-IN");
  }

  function updateCart() {
    let count = 0;
    let total = 0;

    items.forEach((item) => {
      if (!item.dataset.deleted) {
        const price = parseInt(item.dataset.price, 10);
        const qtySelect = item.querySelector(".bf-cart-item__qty-select");
        const qty = parseInt(qtySelect.value, 10);

        count += qty;
        total += price * qty;

        // Update item price display
        const priceVal = item.querySelector(".bf-cart-item__price-val");
        priceVal.textContent = formatPrice(price);
      }
    });

    // Update summary
    document.getElementById("bfCartCount").textContent = count;
    document.getElementById("bfCartCountRight").textContent = count;
    document.getElementById("bfCartSubtotalLeft").textContent =
      formatPrice(total);
    document.getElementById("bfCartSubtotalRight").textContent =
      formatPrice(total);
  }

  // Quantity change
  document.querySelectorAll(".bf-cart-item__qty-select").forEach((select) => {
    select.addEventListener("change", updateCart);
  });

  // Delete button
  document.querySelectorAll(".bf-cart-item__delete").forEach((btn) => {
    btn.addEventListener("click", () => {
      const itemId = btn.dataset.item;
      const item = document.querySelector(
        `.bf-cart-item[data-item-id="${itemId}"]`
      );
      const hr = item.nextElementSibling; // the <hr> after item

      item.dataset.deleted = "true";
      item.style.display = "none";
      if (hr && hr.classList.contains("bf-cart-list__hr")) {
        hr.style.display = "none";
      }

      updateCart();
    });
  });

  // Initial calculation
  updateCart();
});

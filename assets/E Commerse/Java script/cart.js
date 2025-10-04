document.addEventListener("DOMContentLoaded", () => {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const cartContainer = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  let total = 0;

  if (cartItems.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty!</p>";
    cartTotal.style.display = "none";
  } else {
    cartItems.forEach(item => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "cart-item";
      itemDiv.innerHTML = `
        <h3>${item.name}</h3>
        <p>Qty: ${item.qty}</p>
        <p>Price: ₹${item.price} x ${item.qty} = ₹${item.price * item.qty}</p>
      `;
      cartContainer.appendChild(itemDiv);
      total += item.price * item.qty;
    });

    cartTotal.innerText = Total: ₹${total};
  }
});
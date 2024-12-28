// Retrieve cart items from local storage
const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
const cartContainer = document.querySelector(".cart-items");

// Calculate total price
let totalPrice = 0;

if (cartItems.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
} else {
    cartItems.forEach((item) => {
        const itemElement = document.createElement("div");
        itemElement.className = "cart-item";
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" width="100">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p class="price">Price: ₹${item.price.toFixed(2)}</p>
        `;
        cartContainer.appendChild(itemElement);

        // Add item price to total
        totalPrice += item.price;
    });

    // Display total price
    const totalElement = document.createElement("div");
    totalElement.className = "cart-total";
    totalElement.innerHTML = `
        <h2>Total: ₹${totalPrice.toFixed(2)}</h2>
    `;
    cartContainer.appendChild(totalElement);
}

// Function to clear the cart
function clearCart() {
    localStorage.removeItem("cartItems");
    location.reload();
}



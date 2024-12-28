document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", (event) => {
        const product = event.target.dataset.product;
        const price = parseFloat(event.target.dataset.price);
        const productDetails = {
            name: product,
            description: event.target.parentElement.querySelector("p").textContent,
            image: event.target.parentElement.querySelector("img").src,
            price: price,
        };

        // Retrieve existing cart items from local storage
        let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

        // Add the new product to the cart
        cartItems.push(productDetails);

        // Save updated cart to local storage
        localStorage.setItem("cartItems", JSON.stringify(cartItems));

        // Navigate to the add-to-cart page
        window.location.href = "add-to-cart.html";
    });
});

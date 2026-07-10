// =========================
// POMPEY Grocery Store JS
// =========================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Update Cart Counter
function updateCartCount() {
    document.getElementById("count").innerText = cart.length;
}

// Add Product to Cart
function addCart(name, price) {

    let item = cart.find(product => product.name === name);

    if (item) {
        item.qty++;
    } else {
        cart.push({
            name: name,
            price: price,
            qty: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert(name + " added to cart!");
}

// Search Products
function searchProduct() {

    let input = document
        .getElementById("search")
        .value
        .toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        let title = card.querySelector("h3")
            .innerText
            .toLowerCase();

        if (title.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

}

// Live Search
document
.getElementById("search")
.addEventListener("keyup", searchProduct);

// Load Counter on Page Open
updateCartCount();

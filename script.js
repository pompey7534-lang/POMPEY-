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
// Open/Close Cart

// Display Cart Items
function renderCart() {

    let items = document.getElementById("cartItems");
    let total = 0;

    items.innerHTML = "";

    cart.forEach((item, index) => {

        total += item.price * item.qty;

        items.innerHTML += `
        <div class="cart-item">
            <h4>${item.name}</h4>
            <p>₹${item.price} × ${item.qty}</p>

            <button onclick="increaseQty(${index})">+</button>
            <button onclick="decreaseQty(${index})">-</button>
            <button onclick="removeItem(${index})">Remove</button>
        </div>
        `;
    });

    document.getElementById("totalPrice").innerText = total;

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

// Increase Quantity
function increaseQty(index) {
    cart[index].qty++;
    renderCart();
}

// Decrease Quantity
function decreaseQty(index) {

    if (cart[index].qty > 1) {
        cart[index].qty--;
    } else {
        cart.splice(index, 1);
    }

    renderCart();
}

// Remove Item
function removeItem(index) {
    cart.splice(index, 1);
    renderCart();
}

// Clear Cart
function clearCart() {
    cart = [];
    renderCart();
}

// Checkout
function checkout() {

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    alert("Thank you! Your order has been placed.");

    cart = [];
    renderCart();
}
function toggleCart(){

    let panel = document.getElementById("cartPanel");

    if(panel.style.right==="0px"){
        panel.style.right="-400px";
    }else{
        panel.style.right="0px";
        renderCart();
    }

                }
let slideIndex=0;

showSlides();

function showSlides(){

let slides=document.getElementsByClassName("slides");

for(let i=0;i<slides.length;i++){

slides[i].style.display="none";

}

slideIndex++;

if(slideIndex>slides.length){

slideIndex=1;

}

slides[slideIndex-1].style.display="block";

setTimeout(showSlides,3000);

}
<script>

function addToCart(){
   ...
}

function filterProducts(){
   ...
}

/* Paste here */

document.querySelector(".cart").onclick = function () {
    document.getElementById("cartSidebar").classList.add("open");
};

function closeCart() {
    document.getElementById("cartSidebar").classList.remove("open");
}

</script>

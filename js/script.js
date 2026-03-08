//Issue 3: Sidebar filters

const categoryFilter = document.getElementById("categoryFilter");
const priceFilter = document.getElementById("priceFilter");
const shippingFilter = document.getElementById("shippingFilter");
const applyFiltersButton = document.getElementById("applyFilters");
const resetFiltersButton = document.getElementById("resetFilters");
const bookCards = document.querySelectorAll(".book-card");

function filterBooks() {
    const selectedCategory = categoryFilter.value;
    const maxPrice = priceFilter.value === "" ? Infinity : Number(priceFilter.value);
    const maxShipping = shippingFilter.value === "" ? Infinity : Number(shippingFilter.value);

    bookCards.forEach((card) => {
        const cardCategory = card.dataset.category;
        const cardPrice = Number(card.dataset.price);
        const cardShipping = Number(card.dataset.shipping);

        const matchesCategory = selectedCategory === "all" || cardCategory === selectedCategory;
        const matchesPrice = cardPrice <= maxPrice;
        const matchesShipping = cardShipping <= maxShipping;

        if (matchesCategory && matchesPrice && matchesShipping) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

function resetFilters() {
    categoryFilter.value = "all";
    priceFilter.value = "";
    shippingFilter.value = "";

    bookCards.forEach((card) => {
        card.style.display = "block";
    });
}

applyFiltersButton.addEventListener("click", filterBooks);
resetFiltersButton.addEventListener("click", resetFilters);

const cartButtons = document.querySelectorAll(".cart-btn");
const detailsButtons = document.querySelectorAll(".details-btn");

cartButtons.forEach((button) => {
    button.addEventListener("click", () => {
        alert("Book added to cart.");
    });
});

detailsButtons.forEach((button) => {
    button.addEventListener("click", () => {
        alert("Book details coming soon.");
    });
});
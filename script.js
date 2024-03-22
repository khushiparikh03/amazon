// Sample data for products
const products = [
    { name: "iphone 15", image: "iphone.jpg", price: "$800" , btn: "Add to cart"},
    { name: "Oppo Reno10", image: "oppo1.jpg", price: "$580" , btn: "Add to cart"},
    { name: "vivo s9", image: "vivo2.jpg", price: "$500" , btn: "Add to cart"},
    { name: "vivo v12", image: "vivo1.jpg", price: "$620" , btn: "Add to cart"},
    // Add more products as needed
];

// Function to display products
function displayProducts() {
    const productsSection = document.querySelector('.products');

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product');

        const image = document.createElement('img');
        image.src = product.image;
        image.alt = product.name;

        const name = document.createElement('h2');
        name.textContent = product.name;

        const price = document.createElement('p');
        price.textContent = product.price;

        const btn = document.createElement('btn');
        btn.textContent = product.btn;

        productCard.appendChild(image);
        productCard.appendChild(name);
        productCard.appendChild(price);
        productCard.appendChild(btn);

        productsSection.appendChild(productCard);
    });
}

// Display products on page load
window.addEventListener('DOMContentLoaded', displayProducts);
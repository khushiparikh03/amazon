// Sample data for products
const products = [
    { name: "iphone 15", image: "iphone.JPG", price: "$800"},
    { name: "Oppo Reno10", image: "oppo1.JPG", price: "$580"},
    { name: "vivo s9", image: "vivo2.JPG", price: "$500"},
    { name: "vivo v12", image: "vivo1.JPG", price: "$620"},
    { name: "samsung1", image: "samsung1.JPG", price: "$500"},
    { name: "redmi1", image: "redmi1.JPG", price: "$620"},
    { name: "redmi 13", image: "redmi2.JPG", price: "$500"},
    { name: "galaxy s23", image: "samsung2.JPG", price: "$620"},
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

        productCard.appendChild(image);
        productCard.appendChild(name);
        productCard.appendChild(price);

        productsSection.appendChild(productCard);
    });
}
// Display products on page load
window.addEventListener('DOMContentLoaded', displayProducts);

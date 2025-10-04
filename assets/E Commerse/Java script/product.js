const products = [
  { name: "Gulab Jamun", price: 199, image: "../assets/images/gulabjamun.jpg" },
  { name: "Rasgulla", price: 179, image: "../assets/images/rasgulla.jpg" },
  { name: "Kaju Katli", price: 249, image: "../assets/images/kaju katli.jpg" },
  { name: "Besan Ladoo", price: 149, image: "../assets/images/besan ladoo.jpg" },
  { name: "Motichoor Ladoo", price: 169, image: "../assets/images/motichoor.jpg" },
  { name: "Barfi", price: 159, image: "../assets/images/barfi.jpg" },
  { name: "Soan Papdi", price: 129, image: "../assets/images/soan-papdi.jpg" },
  { name: "Jalebi", price: 119, image: "../assets/images/jalebi.jpg" },
  { name: "Imarti", price: 139, image: "../assets/images/imarti.jpg" },
  { name: "Chum Chum", price: 189, image: "../assets/images/chum chum.jpg" },
  { name: "Malai Peda", price: 179, image: "../assets/images/malai peda.jpg" },
  { name: "Kheer Kadam", price: 199, image: "../assets/images/kheer kadam.jpg" },
  { name: "Rasmalai", price: 229, image: "../assets/images/rasmalai.jpeg" },
  { name: "Pista Roll", price: 259, image: "../assets/images/pista roll.jpg" },
  { name: "Milk Cake", price: 149, image: "../assets/images/milk cake.jpg" },
  { name: "Khoya Barfi", price: 169, image: "../assets/images/khoya barfi.jpg" },
  { name: "Dry Fruit Ladoo", price: 279, image: "../assets/images/dryfruit ladoo.jpg" },
  { name: "Anjeer Barfi", price: 299, image: "../assets/images/anjeer barfi.jpg" },
  { name: "Chocolate Sandesh", price: 239, image: "../assets/images/choco sandesh.jpg" },
  { name: "Badam Katli", price: 289, image: "../assets/images/badam katli.jpg" }
];

const container = document.getElementById('product-list');

products.forEach((item) => {
  const div = document.createElement('div');
  div.className = "product-card";
  div.innerHTML = `
    <img src="${item.image}" alt="${item.name}" />
    <h3>${item.name}</h3>
    <p class="price">₹${item.price}</p>
    <button>Add to Cart</button>
  `;
  container.appendChild(div);
});
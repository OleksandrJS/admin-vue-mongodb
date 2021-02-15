const bcrypt = require("bcrypt");

const data = {
  users: [
    {
      email: "admin@example.com",
      password: bcrypt.hash("1234", 8),
      isAdmin: true,
    },
    {
      email: "user@example.com",
      password: bcrypt.hash("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Nike Slim Shirt",
      category: "Shirts",
      image: "/images/p1.jpg",
      description: "high quality product",
    },
    {
      name: "Adidas Fit Shirt",
      category: "Shirts",
      image: "/images/p2.jpg",
      description: "high quality product",
    },
    {
      name: "Lacoste Free Shirt",
      category: "Shirts",
      image: "/images/p3.jpg",
      description: "high quality product",
    },
    {
      name: "Nike Slim Pant",
      category: "Pants",
      image: "/images/p4.jpg",
      description: "high quality product",
    },
    {
      name: "Puma Slim Pant",
      category: "Pants",
      image: "/images/p5.jpg",
      description: "high quality product",
    },
    {
      name: "Adidas Fit Pant",
      category: "Pants",
      image: "/images/p6.jpg",
      description: "high quality product",
    },
  ],
};
module.exports = data;

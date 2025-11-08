const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const products = [
  {
    id: 1,
    name: "Classic Tee",
    price: 499,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  },
  {
    id: 2,
    name: "Sneaker Low",
    price: 2499,
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3",
  },
  {
    id: 3,
    name: "Denim Jacket",
    price: 2999,
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  },
  {
    id: 4,
    name: "Cap Logo",
    price: 349,
    image: "https://images.unsplash.com/photo-1638884251621-b6d511d6217c",
  },
  {
    id: 5,
    name: "Backpack",
    price: 1999,
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
  },
];


let cart = [];

// Get all products
app.get("/api/products", (req, res) => res.json(products));

// Get cart
app.get("/api/cart", (req, res) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  res.json({ cart, total });
});

// Add to cart
app.post("/api/cart", (req, res) => {
  const { productId } = req.body;
  const product = products.find((p) => p.id === productId);
  if (!product) return res.status(404).json({ error: "Product not found" });

  // check if product already in cart
  const existing = cart.find((c) => c.id === productId);
  if (existing) existing.qty += 1;
  else cart.push({ ...product, qty: 1 });

  res.json({ message: "Added to cart", cart });
});

// Remove from cart
app.delete("/api/cart/:id", (req, res) => {
  const id = parseInt(req.params.id);
  cart = cart.filter((item) => item.id !== id);
  res.json({ message: "Removed", cart });
});

app.listen(5000, () =>
  console.log("Server running on http://localhost:5000")
);

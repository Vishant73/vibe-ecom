import React, { useState } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const handleRemoveFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>🛒 Vibe E-Com Cart</h1>
      <ProductList onAddToCart={handleAddToCart} />
      <Cart cartItems={cart} onRemoveFromCart={handleRemoveFromCart} />
    </div>
  );
}

export default App;

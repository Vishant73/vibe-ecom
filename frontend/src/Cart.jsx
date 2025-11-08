import React from "react";

const Cart = ({ cartItems, onRemoveFromCart }) => {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  if (cartItems.length === 0)
    return <p style={{ textAlign: "center" }}>🛒 Your cart is empty.</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>🛒 Cart</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          maxWidth: "500px",
          margin: "auto",
        }}
      >
        {cartItems.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "10px",
              backgroundColor: "#fafafa",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
              />
              <div>
                <strong>{item.name}</strong>
                <p style={{ margin: 0 }}>₹{item.price} × {item.qty}</p>
              </div>
            </div>
            <button
              onClick={() => onRemoveFromCart(item.id)}
              style={{
                backgroundColor: "#dc3545",
                color: "#fff",
                border: "none",
                padding: "6px 10px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <h3 style={{ textAlign: "center", marginTop: "20px" }}>
        🧾 Total: ₹{total}
      </h3>
    </div>
  );
};

export default Cart;

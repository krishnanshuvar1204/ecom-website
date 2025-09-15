import React, { useEffect, useState } from "react";

const API_URL = "http://3.110.131.5:3000";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/products`)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: 20 }}>
      <h1>Products</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
        {products.map(p => (
          <div
            key={p.id}
            style={{ border: "1px solid #ddd", borderRadius: 8, padding: 10 }}
          >
            <img
              src={p.imageUrl}
              alt={p.name}
              style={{ width: 200, height: 200, objectFit: "cover" }}
            />
            <h3>{p.name}</h3>
            <p>${p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

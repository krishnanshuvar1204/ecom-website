import React, { useState } from "react";
import ImageUploader from "../components/ImageUploader";

const API_URL = "http://3.110.131.5:3000";

export default function Admin() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const addProduct = async (imageUrl) => {
    await fetch(`${API_URL}/api/products/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, price, imageUrl }),
    });
    setName(""); setPrice("");
    alert("Product added!");
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: 20 }}>
      <h1>Admin - Add Product</h1>
      <input
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        placeholder="Price"
        value={price}
        onChange={e => setPrice(e.target.value)}
      />
      <ImageUploader onUpload={addProduct} />
    </div>
  );
}

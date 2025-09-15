import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: 20, background: "#333", color: "#fff" }}>
      <Link to="/" style={{ marginRight: 20, color: "#fff" }}>Home</Link>
      <Link to="/admin" style={{ color: "#fff" }}>Admin</Link>
    </nav>
  );
}

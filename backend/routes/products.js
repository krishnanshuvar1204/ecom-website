import express from 'express';
import { connection } from '../db.js';
const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
  const [rows] = await connection.query('SELECT * FROM products');
  res.json(rows);
});

// Add product
router.post('/add', async (req, res) => {
  const { name, price, imageUrl } = req.body;
  await connection.query(
    'INSERT INTO products (name, price, imageUrl) VALUES (?, ?, ?)',
    [name, price, imageUrl]
  );
  res.json({ message: 'Product added' });
});

export default router;

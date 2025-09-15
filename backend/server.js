import express from 'express';
import bodyParser from 'body-parser';
import { initDb } from './db.js';
import productRoutes from './routes/products.js';
import uploadRoutes from './routes/upload.js';

const app = express();
app.use(bodyParser.json());

await initDb();

// Routes
app.use('/api/products', productRoutes);
app.use('/api/upload', uploadRoutes);

// Health check
app.get('/api/health', (req, res) => res.send('Backend running'));

app.listen(3000, () =>
  console.log('Server running on http://3.110.131.5:3000')
);

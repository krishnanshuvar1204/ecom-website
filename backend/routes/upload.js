import express from 'express';
import multer from 'multer';
import { uploadFile } from '../uploadController.js';

const router = express.Router();
const upload = multer();

router.post('/', upload.single('file'), async (req, res) => {
  try {
    const result = await uploadFile(req.file.originalname, req.file.buffer);
    res.json({ Location: result.Location });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Upload failed' });
  }
});

export default router;

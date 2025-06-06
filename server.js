import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactHandler from './api/contact.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/contact', contactHandler);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});

import express from 'express';
import data from './data.js';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Conncted DB..');
  })
  .catch((err) => {
    console.log(err.message);
  });
//
const app = express();
app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);
app.use(cors());

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server in runing at http://localhost:${port}`);
});

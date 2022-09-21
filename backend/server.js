import express from 'express';
import data from './data.js';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

// product screen details

app.get('/api/products/slug/:slug', (req, res) => {
  const product = data.products.find((x) => x.slug === req.params.slug);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found!' });
  }
});
// product cart item id

app.get('/api/products/:id', (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found!' });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server in runing at http://localhost:${port}`);
});

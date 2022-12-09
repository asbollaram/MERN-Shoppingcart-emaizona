import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'Bollaram',
      email: 'admin@bollaram.com',
      password: bcrypt.hashSync('welcome1'),
      isAdmin: true,
    },
    {
      name: 'Jhon',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234567'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Nike slim silk',
      slug: 'Nike-slim-shirt',
      category: 'Shirts',
      image: '/images/mp1.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.4,
      numReviews: 10,
      description: 'hight quality shirt',
    },
    {
      name: 'Adidas pantz',
      slug: 'Adidas-slimfit-pant',
      category: 'pant',
      image: '/images/mp2.jpg',
      price: 130,
      countInStock: 10,
      brand: 'Adidas',
      rating: 4.3,
      numReviews: 8,
      description: 'hight quality pant',
    },
    {
      name: 'Nike slim',
      slug: 'Nike-skin-slim-shirt',
      category: 'Shirts',
      image: '/images/mp3.jpg',
      price: 125,
      countInStock: 12,
      brand: 'Nike',
      rating: 4.1,
      numReviews: 15,
      description: 'hight quality shirt',
    },
    {
      name: 'Adidas pant slim',
      slug: 'Adidas-slim-pant',
      category: 'pant',
      image: '/images/mp4.jpg',
      price: 110,
      countInStock: 0,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 11,
      description: 'hight quality pant',
    },
  ],
};

export default data;

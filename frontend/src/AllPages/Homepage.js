import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Homepage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/products');
      setProducts(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Latest Products</h1>
      <div className="productList">
        {products.map((product) => (
          <div className="productDetils" key={product.slug}>
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="productText">
              <Link to={`/product/${product.slug}`}>
                <p>{product.name}</p>
              </Link>

              <p>
                <storng>${product.price}</storng>
              </p>
              <button type="button">Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homepage;

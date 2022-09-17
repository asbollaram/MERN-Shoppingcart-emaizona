import { Link } from 'react-router-dom';
import data from '../data';

function Homepage() {
  return (
    <div>
      <h1>Latest Products</h1>
      <div className="productList">
        {data.products.map((product) => (
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

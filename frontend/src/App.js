import './App.css';
import data from './data';

function App() {
  return (
    <div className="App">
      <header>
        <a href="/#">
          <h3>Emaizona</h3>
        </a>
      </header>
      <main>
        <h1>Latest Products</h1>
        <div className="productList">
          {data.products.map((product) => (
            <div className="productDetils" key={product.slug}>
              <a href={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} />
              </a>
              <div className="productText">
                <p>
                  <a href={`/product/${product.slug}`}> {product.name}</a>
                </p>
                <p><storng>${product.price}</storng></p>
                <button type="button">Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;

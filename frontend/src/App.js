import Homepage from './AllPages/Homepage';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ProductScreen from './AllPages/ProductScreen';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Link to="/">
            <h3>Emaizona</h3>
          </Link>
        </header>
        <main>
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path="/" element={<Homepage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;

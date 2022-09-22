import Homepage from './AllPages/Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductScreen from './AllPages/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import Badge from 'react-bootstrap/esm/Badge';
import { useContext } from 'react';
import { Store } from './Store';
import CartScreen from './Components/CartScreen';

function App() {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <BrowserRouter>
      <header>
        <Navbar bg="dark" verient="dark">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand className="text-white">Emaizona</Navbar.Brand>
            </LinkContainer>
            <Nav className="me-auto">
              <Link to="/cart" className="nav-link text-white">
                Cart
                {cart.cartItems.length > 0 && (
                  <Badge pill bg="danger">
                    {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                  </Badge>
                )}
              </Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <div className="d-flex flex-colunm appContainer">
        <main>
          <Container>
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/" element={<Homepage />} />
            </Routes>
          </Container>
        </main>
      </div>
      <footer className="border-top p-2">
        <div className="text-center">© 2022 Bollaram Studio, Inc</div>
      </footer>
    </BrowserRouter>
  );
}

export default App;

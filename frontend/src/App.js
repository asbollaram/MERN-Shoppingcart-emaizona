import Homepage from './AllPages/Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductScreen from './AllPages/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import Badge from 'react-bootstrap/esm/Badge';
import { useContext } from 'react';
import { Store } from './Store';
import CartScreen from './Components/CartScreen';
import ShippingAddressScreen from './AllPages/ShippingAddreddScreen';
import SignInpage from './AllPages/SignInpage';
import SignUppage from './AllPages/SignUppage';
import PaymentMethodScreen from './AllPages/PaymentMethodScreen';
import PlaceOrderScreen from './AllPages/PlaceOrderScreen';

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;
  //
  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
  };
  return (
    <BrowserRouter>
      <ToastContainer position="bottom-center" limit={1} />
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
              {userInfo ? (
                <NavDropdown
                  title={userInfo.name}
                  id="basic-nav-dropdown"
                  variant="secondary"
                >
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>User Profile</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/orderhistory">
                    <NavDropdown.Item>Order History</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Divider />
                  <Link
                    className="dropdown-item"
                    to="#signout"
                    onClick={signoutHandler}
                  >
                    Sign Out
                  </Link>
                </NavDropdown>
              ) : (
                <Link className="nav-link text-white" to="/signin">
                  Sign In
                </Link>
              )}
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
              <Route path="/signin" element={<SignInpage />} />
              <Route path="/signup" element={<SignUppage />} />
              <Route path="/palceorder" element={<PlaceOrderScreen />} />
              <Route
                path="/shipping"
                element={<ShippingAddressScreen />}
              ></Route>
              <Route path="/payment" element={<PaymentMethodScreen />}></Route>
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

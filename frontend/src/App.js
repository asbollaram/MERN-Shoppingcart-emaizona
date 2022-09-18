import Homepage from './AllPages/Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductScreen from './AllPages/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <header>
        <Navbar bg="dark" verient="dark">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand className="text-white">Emaizona</Navbar.Brand>
            </LinkContainer>
          </Container>
        </Navbar>
      </header>
      <div className="d-flex flex-colunm appContainer">
        <main>
          <Container>
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/" element={<Homepage />} />
            </Routes>
          </Container>
        </main>
      </div>
      <footer className='border-top p-2'>
        <div className="text-center">© 2022 Bollaram Studio, Inc</div>
      </footer>
    </BrowserRouter>
  );
}

export default App;

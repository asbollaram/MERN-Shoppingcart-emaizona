import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Helmet } from 'react-helmet-async';

export default function SingInpage() {
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/frontend';
  return (
    <Container className="singin-Container">
      <Helmet>
        <title>Sing In</title>
      </Helmet>
      <h1 className="my-3">Sing In</h1>
      <Form className="border p-3 rounded-3 shadow">
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            required
            placeholder="Email"
            className="shadow-sm"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            required
            placeholder="Password"
            className="shadow-sm"
          />
        </Form.Group>
        <div className="my-3">
          <Button type="submit">Sign In</Button>
        </div>
        <div className="my-3">
          New customer? {''}
          <Link to={`/singup>redirect=${redirect}`}>Create you account</Link>
        </div>
      </Form>
    </Container>
  );
}

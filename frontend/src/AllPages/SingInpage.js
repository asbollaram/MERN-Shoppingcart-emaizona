import { Link, useNavigate, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Helmet } from 'react-helmet-async';
import { useContext, useState, useEffect } from 'react';
import Axios from 'axios';
import { Store } from '../Store';
import { toast } from 'react-toastify';
import { getError } from '../utils';

export default function SingInpage() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  //
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Axios.post('api/users/signin', {
        email,
        password,
      });
      ctxDispatch({ type: 'USER_SIGNIN', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate(redirect || '/');
      console.log(data);
    } catch (err) {
      toast.error(getError(err));
    }
  };
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  return (
    <Container className="singin-Container">
      <Helmet>
        <title>Sing In</title>
      </Helmet>
      <h1 className="my-3">Sing In</h1>
      <Form className="border p-3 rounded-3 shadow" onClick={submitHandler}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            required
            placeholder="Email"
            className="shadow-sm"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            required
            placeholder="Password"
            className="shadow-sm"
            onChange={(e) => setPassword(e.target.value)}
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

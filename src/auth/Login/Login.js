import React from 'react';
import InputItem from '../InputItem/InputItem';
import { Container, Row, Form, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <section className="login">
      <Container>
        <Row>
          <div className="col-md-4 col-md-offset-3 m-auto">
            <div className="login-aria-logo py-5 m-auto">
              <img className="w-50 d-block m-auto" src="https://i.ibb.co/Snjf3fp/logo2.png" alt=""/>
            </div>
            <Form>
              <InputItem name="email" type="email" placeholder="Email" />
              <InputItem name="password" type="password" placeholder="Password" />
              <Button type="submit" className="btn login-btn w-100">
                Log In
              </Button>
            </Form>
            <p className="text-center py-2 no-account">
              Don't have an account?<Link to="/signup"> Sign up</Link>
            </p>
          </div>
        </Row>
      </Container>
  </section>
  );
};

export default Login;
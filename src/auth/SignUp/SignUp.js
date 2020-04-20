import React from 'react';
import { Container, Row, Form, Button } from 'reactstrap';

import InputItem from '../InputItem/InputItem';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="sign-up">
      <Container>
        <Row>
          <div className="col-md-4 col-md-offset-3 m-auto">
            <div className="sign-up-aria-logo py-5 m-auto">
              <img className="w-50 d-block m-auto" src="https://i.ibb.co/Snjf3fp/logo2.png" alt="icon"/>
            </div>
            <Form onSubmit>
              <InputItem name="name" type="text" placeholder="Name" />
              <InputItem name="email" type="email" placeholder="Email" />
              <InputItem name="password" type="password" placeholder="Password" />
              <InputItem name="confirmPassword" type="password" placeholder="Confirm Password" />
              <Button type="submit" className="btn sign-up-btn w-100">Submit</Button>
            </Form>
            <p className="text-center py-2 has-account">
              <Link to="/login">Already have an account</Link>
            </p>
          </div>
        </Row>
      </Container>
  </div>
  );
};

export default SignUp; 
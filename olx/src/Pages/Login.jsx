import React, { useState } from 'react';
import './Css/Login.css';
import { Container, Row, Col } from 'react-bootstrap';
import CreateAccount from './CreateAccount'; // Import the CreateAccount component
import olxImage from '../Images/olx.png'

export default function Login() {
  // State to control the modal visibility
  const [show, setShow] = useState(false);

  // Function to close the modal
  const handleClose = () => setShow(false);
  
  // Function to open the modal
  const handleShow = () => setShow(true);

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <Row>
        <Col lg={6}>
          <img width="85%" src= {olxImage} alt="" />
        </Col>

        <Col lg={5}>
          <h1 className="display-3">
            <span className="font-weight-bold">Happening Now</span>
          </h1>
          <br />
          <h4>Join today.</h4>
          <br />

          <button className="login-button">Sign Up with Google </button>
          <br />
          <br />
          <button className="login-button">Sign Up with Apple</button>

          <div className="d-flex align-items-center justify-content-center">
            <hr className="flex-grow-1" style={{ height: "1px", background: "light-gray" }} />
            <p className="mx-1">or</p>
            <hr className="flex-grow-1" style={{ height: "1px", background: "light-gray" }} />
          </div>

          {/* Button to open the Create Account modal */}
          <button className="btn btn-primary CreateAccount-button" onClick={handleShow}>
            Create Account
          </button>
          <p>
            By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.
          </p>

          <h5>Already have an Account?</h5>
          <br />
          <button className="Signin-button">Sign in</button>
        </Col>
      </Row>

      {/* Modal for creating an account */}
      <CreateAccount show={show} handleClose={handleClose} />
    </Container>
  );
}

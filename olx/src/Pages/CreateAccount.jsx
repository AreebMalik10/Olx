import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './Css/CreateAccount.css';

const CreateAccount = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dob: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Add your form submission logic here
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header className="modal-header-custom">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/4/42/OLX_New_Logo.png" 
          alt="Logo" 
          className="modal-logo"
        />
        <Button variant="close" onClick={handleClose} className="modal-close-button"></Button>
      </Modal.Header>
      <Modal.Header>
        <Modal.Title className="modal-title-left">Create Your Account</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name" // Placeholder for Name
              required
            />
          </Form.Group>
          <br />
          <Form.Group controlId="formEmail">
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address" // Placeholder for Email
              required
            />
          </Form.Group>
          <br />
          <h5>Date of Birth</h5>
          <p>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
          <br />
          <Form.Group controlId="formDOB">
            <Form.Control
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <div className="submit-button-container">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default CreateAccount;

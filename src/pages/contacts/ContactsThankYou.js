import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Modal from "react-bootstrap/Modal";
import { useHistory } from "react-router-dom";
import appStyles from "../../App.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/useRedirect";

return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Container className={appStyles.Content}>{textFields}</Container>
      </Form>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your message have been sent!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Thank you for contacting bakers. We will get back to you asap!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button className={btnStyles.Button} onClick={handleClose}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );

export default ContactThankYou;
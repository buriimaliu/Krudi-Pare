import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

export class AddConModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log("handleSubmit");
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(process.env.REACT_APP_API, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Emri: event.target.Emri.value,
        Mbiemri: event.target.Mbiemri.value,
        Telefoni: event.target.Telefoni.value
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          alert(result);
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  render() {
    return (
      <div className="container">
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Contact US
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="Emri">
                    <Form.Label>Emri</Form.Label>
                    <Form.Control
                      type="text"
                      name="Emri"
                      required
                      placeholder="Emri"
                    />
                  </Form.Group>
                  <Form.Group controlId="Mbiemri">
                    <Form.Label>Mbiemri</Form.Label>
                    <Form.Control
                      type="text"
                      name="Mbiemri"
                      required
                      placeholder="Mbiemri"
                    />
                  </Form.Group>
                  <Form.Group controlId="Telefoni">
                    <Form.Label>Telefoni</Form.Label>
                    <Form.Control
                      type="text"
                      name="Telefoni"
                      required
                      placeholder="Telefoni"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Button variant="primary" type="submit">
                      Send
                    </Button>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.props.onHide}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

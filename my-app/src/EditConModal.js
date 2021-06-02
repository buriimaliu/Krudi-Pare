import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

export class EditConModal extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(process.env.REACT_APP_API, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Id: event.target.Id.value,
                Emri: event.target.Emri.value,
                Mbiemri: event.target.Mbiemri.value,
                Telefoni: event.target.Telefoni.value
            })
        })
            .then(res => res.json())
            .then((result) => {
                alert(result);
            },
                (error) => {
                    alert('Failed');
                })
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
                    <Modal.Header clooseButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Edito te dhenat
        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="Id">
                                        <Form.Label>Id</Form.Label>
                                        <Form.Control type="text" name="Id" required
                                            disabled
                                            defaultValue={this.props.conid}
                                            placeholder="Id" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Emri</Form.Label>
                                        <Form.Control type="text" name="Emri" required
                                            defaultValue={this.props.conname}
                                            placeholder="Emri" />
                                    </Form.Group>

                                    <Form.Group controlId="Mbiemri">
                                        <Form.Label>Mbiemri</Form.Label>
                                        <Form.Control type="text" name="Mbiemri" required
                                            defaultValue={this.props.conmbi}
                                            placeholder="Mbiemri" />
                                    </Form.Group>
                                    <Form.Group controlId="Telefoni">
                                        <Form.Label>Telefoni</Form.Label>
                                        <Form.Control type="text" name="Telefoni" required
                                            defaultValue={this.props.contel}
                                            placeholder="Telefoni" />
                                    </Form.Group>

                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Perditeso te dhenat
                        </Button>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>

                </Modal>

            </div>
        )
    }

}
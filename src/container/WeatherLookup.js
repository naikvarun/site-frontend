import React from "react";
import {Col, Row, Form, Container} from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default class WeatherLookup extends React.Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col className="justify-content-md-center">
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Latitude</Form.Label>
                                    <Form.Control type="number" placeholder="0" min={-90} max={90}/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Longitude</Form.Label>
                                    <Form.Control type="number" placeholder="90" min={-180} max={180}/>
                                </Form.Group>
                            </Form.Row>
                            <Button variant="primary" type="submit">Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>

        );
    }
}

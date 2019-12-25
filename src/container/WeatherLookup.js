import React from "react";
import {Col, Container, Form, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default class WeatherLookup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // Pune, Maharashtra, India
            latitude: 18.520430,
            longitude: 73.856743,
            formValid: true,
            result: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.isFormValid = this.isFormValid.bind(this);
    }


    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    }

    isFormValid() {

        return (-90 <= this.state.latitude && this.state.latitude <= 90)
            && (-180 <= this.state.longitude && this.state.longitude <= 180);
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    renderWeather() {

    }

    render() {
        return (
            <Container>
                <Row>
                    <Col className="justify-content-md-center">
                        <Form onSubmit={this.handleSubmit} validated={this.state.formValid}>
                            <Form.Row>
                                <Form.Group as={Col} controlId="latitude">
                                    <Form.Label>Latitude</Form.Label>
                                    <Form.Control type="number" name="latitude" min={-90} max={90} step={0.000001}
                                                  value={this.state.latitude} onChange={e => this.handleChange(e)}/>
                                    <Form.Control.Feedback type="invalid">
                                        Latitude should be between -90 and +90
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Col} controlId="longitude">
                                    <Form.Label>Longitude</Form.Label>
                                    <Form.Control type="number" name="longitude" min={-180} max={180} step={0.000001}
                                                  value={this.state.longitude} onChange={e => this.handleChange(e)}/>
                                    <Form.Control.Feedback type="invalid">
                                        longitude should be between -180 and +180
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Button variant="primary" type="submit" disabled={!this.isFormValid()}>Lookup</Button>
                        </Form>
                    </Col>
                </Row>
                <Row>

                </Row>
            </Container>

        );
    }

}

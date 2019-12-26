import React from "react";
import {Alert, Col, Container, Form, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import DisplayWeather from "./DisplayWeather";
import weatherService from '../service/weather-api';

export default class WeatherLookup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // Pune, Maharashtra, India
            latitude: 18.520430,
            longitude: 73.856743,
            formValid: true,
            result: undefined,
            hasError: false,
            error: undefined
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.isFormValid = this.isFormValid.bind(this);
        this.reset = this.reset.bind(this);
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

    async handleSubmit(e) {
        e.preventDefault();
        try {
            const result = await weatherService.getWeather(this.state.latitude, this.state.longitude);
            console.log(result);
            if (result) {
                this.setState({
                    result: result,
                    hasError: false,
                    error: undefined
                });
            }
        } catch (e) {
            this.setState({hasError: true, error: 'Error retrieving data.'});
        }
    }

    reset() {
        this.setState({
            result: undefined
        })
    }

    renderAlert() {
        let alert;
        if ( this.state.hasError) {
            alert = (
                <Alert variant="danger" onClose={() => this.setState({hasError: false})} dismissible>
                    <p>Error getting data!!</p>
                </Alert>
            );
        }

        return (<div>{alert}</div>);

    }

    render() {
        return (
            <Container className="mt-3">
                <Row className="mb-3">
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
                            <Button variant="primary" type="submit" disabled={!this.isFormValid()}
                                    className="mr-3">Lookup</Button>
                            <Button onClick={this.reset}>Reset</Button>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {this.renderAlert()}
                    </Col>
                </Row>
                <Row className="mt-3">
                    <DisplayWeather data={this.state.result}/>
                </Row>
            </Container>

        );
    }

}

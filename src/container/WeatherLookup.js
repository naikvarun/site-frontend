import React from "react";
import {Col, Container, Form, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import DisplayWeather from "./DisplayWeather";

export default class WeatherLookup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // Pune, Maharashtra, India
            latitude: 18.520430,
            longitude: 73.856743,
            formValid: true,
            result: undefined
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
        this.setState({
            result: {
                "latitude": 41.911515,
                "longitude": -87.65982,
                "requestedTime": "2019-12-25T21:56:20.106Z",
                "data": [{
                    "time": 1577167200,
                    "precipType": "rain",
                    "temperatureHigh": 50.61,
                    "temperatureLow": 37.79,
                    "humidity": 0.86
                }, {
                    "time": 1577080800,
                    "precipType": "rain",
                    "temperatureHigh": 49.28,
                    "temperatureLow": 32.03,
                    "humidity": 0.8
                }, {
                    "time": 1576994400,
                    "precipType": "rain",
                    "temperatureHigh": 49.34,
                    "temperatureLow": 34.57,
                    "humidity": 0.79
                }, {
                    "time": 1576908000,
                    "precipType": "snow",
                    "precipAccumulation": 0.05,
                    "temperatureHigh": 45.77,
                    "temperatureLow": 31.08,
                    "humidity": 0.8
                }, {
                    "time": 1576821600,
                    "precipType": "snow",
                    "precipAccumulation": 0.07,
                    "temperatureHigh": 38.68,
                    "temperatureLow": 29.94,
                    "humidity": 0.85
                }, {
                    "time": 1576735200,
                    "precipType": "snow",
                    "precipAccumulation": 0.12,
                    "temperatureHigh": 35.09,
                    "temperatureLow": 26.06,
                    "humidity": 0.74
                }, {
                    "time": 1576648800,
                    "precipType": "snow",
                    "precipAccumulation": 0.32,
                    "temperatureHigh": 19.6,
                    "temperatureLow": 17.15,
                    "humidity": 0.57
                }]
            }
        });
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
                    <DisplayWeather data={this.state.result}/>
                </Row>
            </Container>

        );
    }

}

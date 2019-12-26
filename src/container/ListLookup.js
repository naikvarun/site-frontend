import React from "react";
import WeatherService from "../service/weather-api";
import DisplayWeather from "./DisplayWeather";
import {Accordion, Button, Card} from "react-bootstrap";

export default class ListLookup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            previousLookups: []
        }
    }

    async componentDidMount() {
        const lookups = await new WeatherService().getPreviousLookup();
        this.setState({previousLookups: lookups})
    }


    render() {
        return (
            <div>
                <Accordion>
                    {this.state.previousLookups.map((info, index) => {
                        return (
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey={index}>
                                        <div>
                                            <span>Latitude: {info.latitude}</span>
                                            <span className="ml-2">Longitude: {info.longitude}</span>
                                        </div>
                                    </Accordion.Toggle>

                                </Card.Header>
                                <Accordion.Collapse eventKey={index}>
                                    <Card.Body>
                                        <DisplayWeather data={info}/>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        );
                    })}
                </Accordion>

            </div>
        );
    }
}

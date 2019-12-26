import React from "react";
import WeatherService from "../service/weather-api";
import DisplayWeather from "./DisplayWeather";
import {Accordion, Card} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretSquareDown} from '@fortawesome/free-solid-svg-icons'

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
            <div className="mt-3">
                <Accordion>
                    {this.state.previousLookups
                        .sort(((a, b) => {
                            return (new Date(b.requestedTime).getDate()) - (new Date(a.requestedTime).getDate())
                        })).map((info, index) => {
                        return (
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle eventKey={index}>
                                        <FontAwesomeIcon icon={faCaretSquareDown} />
                                    </Accordion.Toggle>
                                    <span className="ml-2">Latitude: {info.latitude}</span>
                                    <span className="ml-2 mr-2">Longitude: {info.longitude}</span>
                                    <div className="float-right">Retrieved at {new Date(info.requestedTime).toLocaleString()}</div>
                                </Card.Header>
                                <Accordion.Collapse eventKey={index}>
                                    <Card.Body>
                                        <DisplayWeather data={info} onlyTable={true}/>
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

import React from "react";
import {Col, Container, Row, Table} from "react-bootstrap";

export default class DisplayWeather extends React.Component {
    constructor(props) {
        super(props);

    }

    renderWeatherInfo() {
        return
    }

    render() {
        let table;
        if(this.props.data) {
            table = (
                <Row>
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>Date</th>
                                <th>High Temperature</th>
                                <th>Low Temperature</th>
                                <th>Humidity</th>
                                <th>Snow</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.props.data.data.map((info)=>{
                                return (
                                    <tr>
                                        <td>{new Date(Number(info.time*1000)).toLocaleDateString()}</td>
                                        <td>{info.temperatureHigh}</td>
                                        <td>{info.temperatureLow}</td>
                                        <td>{info.humidity}</td>
                                        <td>{info.precipType==='snow' ? info.precipAccumulation : ''}</td>
                                    </tr>
                                );
                            })}
                            </tbody>
                        </Table>
                    </Col>
                </Row>);
        }
        return (<Container>
            {table}
        </Container>);
    }

}

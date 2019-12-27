import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

export default class AppNavbar extends React.Component {

    render() {
        return (
            <Navbar bg={'light'}>
                <Navbar.Brand>
                    <Link to={'/'} className={'navbar-brand'}>SITE</Link>
                </Navbar.Brand>
                <Nav>
                    <Nav.Item>
                        <Link to={'/list'} className={'nav-link'}>List</Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        );
    }
}

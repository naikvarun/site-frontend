import React from 'react';
import {Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

export default class AppNavbar extends React.Component {

    render() {
        return (
            <Navbar bg={'light'}>
                <Navbar.Brand>
                    <Link to={'/'} className={'navbar-brand'}>SITE</Link>
                </Navbar.Brand>
            </Navbar>
        );
    }
}

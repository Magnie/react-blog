import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Col, Panel } from 'react-bootstrap';
import { Link } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'

class Main extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">React Blog</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <LinkContainer to="/" onlyActiveOnIndex={true}>
                                <NavItem>
                                    Home
                                </NavItem>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div className="container">
                    <Col md={9}>
                        {this.props.children}
                    </Col>
                    <Col md={3}>
                        <Panel>
                            You could put some links here.
                        </Panel>
                    </Col>
                    <Col md={12}>
                    </Col>
                </div>
                <hr />
                <Col md={12}>
                    Copyright &copy; 2016 Joseph Augustine
                </Col>
            </div>
        );
    }
}

export default Main;

import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Col } from 'react-bootstrap';
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
                            <LinkContainer to="/page">
                                <NavItem>
                                    Page
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
                        
                    </Col>
                    <Col md={12}>
                        Footer
                    </Col>
                </div>
            </div>
        );
    }
}

export default Main;

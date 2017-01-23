import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../../state/actions.js'

import { Navbar, Nav, NavItem, Col, Panel } from 'react-bootstrap';
import { Link } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'

class Main extends Component {
    logout = () => {
        this.props.dispatch(
            logout('test')
        );
    }
    render() {
        var auth_button = null;
        if (this.props.logged_in) {
            auth_button = (
                <NavItem onClick={this.logout}>
                    Logout
                </NavItem>
            );
        } else {
            auth_button = (
                <LinkContainer to="/auth/login">
                    <NavItem>
                        Login
                    </NavItem>
                </LinkContainer>
            );
        }
        
        var username = this.props.username;
        if (username) {
            username = (
                <Navbar.Text>
                    Hello, <Link to="/account">{username}</Link>!
                </Navbar.Text>
            );
        } else {
            username = (
                <Navbar.Text>
                    Welcome!
                </Navbar.Text>
            );
        }
        
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
                        {username}
                        <Nav pullRight>
                            <LinkContainer to="/" onlyActiveOnIndex={true}>
                                <NavItem>
                                    Home
                                </NavItem>
                            </LinkContainer>
                            {auth_button}
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

function mapStateToProps(state) {
    return {
        username: state.auth.account.username,
        logged_in: state.auth.account.logged_in,
    };
}

var MainContainer = connect(mapStateToProps)(Main);
export default MainContainer;

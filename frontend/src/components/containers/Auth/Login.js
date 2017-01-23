import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'
import { login_success, LOGIN_FAILED, LOGIN_REQUEST } from '../../../state/actions.js'
import { hashHistory } from 'react-router';

import { Link } from 'react-router'
import { Panel, Col, Row } from 'react-bootstrap';
import LoginView from '../../presentations/LoginView.js'

class Login extends Component {
    constructor(props) {
        if (props.logged_in) {
            hashHistory.push('/');
        }
        super(props);
    }
    componentWillMount() {
        this.setState({
            reason: '',
            enabled: true,
            style: '',
        });
    }
    reason = (message, style) => {
        var new_state = Object.assign({}, this.state);
        new_state.reason = message;
        new_state.style = style;
        this.setState(new_state);
    }
    enabled = (status) => {
        var new_state = Object.assign({}, this.state);
        new_state.enabled = status;
        this.setState(new_state);
    }
    login = (username, password) => {
        this.props.dispatch({
            type: LOGIN_REQUEST,
        });
        this.reason('Logging in..', '');
        this.enabled(false);
        
        var data = {
            username: username,
            password: password,
        };
        axios.post('/api/auth/login', data).then(
            (result) => {
                if (result.data.success) {
                    this.props.dispatch(
                        login_success(result.data.user.username)
                    );
                    hashHistory.goBack();
                } else {
                    this.props.dispatch({
                        type: LOGIN_FAILED,
                    });
                    
                    this.reason(result.data.error, 'text-danger');
                }
                this.enabled(true);
            },
            (error) => {
                this.props.dispatch({
                    type: LOGIN_FAILED,
                });
                
                this.reason(error.message, 'text-danger');
                this.enabled(true);
            }
        );
    }
    render() {
        var logged_in = this.props.logged_in;
        var reason = null;
        if (!logged_in && this.state.reason) {
            reason = (
                <p className="{this.state.style}">
                    {this.state.reason}
                </p>
            );
        }
        
        var login_view = null;
        if (!logged_in) {
            login_view = <LoginView enabled={this.state.enabled} onSubmit={this.login} />;
        }
        
        return (
            <Panel>
                <Col md={12}>
                    <h1>
                        Login
                    </h1>
                </Col>
                <Col md={6} mdOffset={3}>
                    <Row>
                        {login_view}
                    </Row>
                    <Row>
                        {reason}
                    </Row>
                    <Row>
                        <Link to="/auth/register">Register</Link>
                    </Row>
                </Col>
            </Panel>
        );
    }
}

function mapStateToProps(state) {
    return {
        logged_in: state.auth.account.logged_in,
    };
}

var LoginContainer = connect(mapStateToProps)(Login)
export default LoginContainer;

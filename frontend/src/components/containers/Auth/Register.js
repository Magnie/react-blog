import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'
import { register_success, REGISTER_REQUEST, REGISTER_FAILED } from '../../../state/actions.js'
import { hashHistory } from 'react-router';

import { Panel, Col, Row } from 'react-bootstrap';
import RegisterView from '../../presentations/RegisterView.js'

class Register extends Component {
    constructor(props) {
        if (props.logged_in) {
            hashHistory.push('/');
        }
        super(props);
    }
    componentWillMount() {
        this.setState({
            enabled: true,
            reason: '',
            style: '',
        });
    }
    reason = (message, style) => {
        var new_state = Object.assign({}, this.state);
        new_state.reason = message;
        new_state.style = style;
        this.setState(new_state);
    }
    register = (username, password) => {
        this.props.dispatch({
            type: REGISTER_REQUEST,
        });
        this.reason('Registering..', 'text-warning');
        var data = {
            username: username,
            password: password,
        };
        axios.post('/api/auth/register', data).then(
            (result) => {
                if (result.data.success) {
                    this.props.dispatch(
                        register_success()
                    );
                } else {
                    this.props.dispatch({
                        type: REGISTER_FAILED,
                    });
                    this.reason(result.data.error, 'text-danger');
                }
            },
            (error) => {
                this.props.dispatch({
                    type: REGISTER_FAILED,
                });
                this.reason(error.message, 'text-danger');
            }
        );
    }
    render() {
        var logged_in = this.props.logged_in;
        if (logged_in) {
            return (
                <Panel>
                    <Col md={12}>
                        You are already logged in.
                    </Col>
                </Panel>
            );
        }
        
        var reason = null;
        if (!logged_in && this.state.reason) {
            reason = (
                <p className={this.state.status}>
                    {this.state.reason}
                </p>
            );
        }
        return (
            <Panel>
                <Col md={12}>
                    <h1>
                        Register
                    </h1>
                </Col>
                <Col md={6} mdOffset={3}>
                    <Row>
                        <RegisterView enabled={this.state.enabled} onSubmit={this.register} />
                    </Row>
                    <Row>
                        {reason}
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

var RegisterContainer = connect(mapStateToProps)(Register)
export default RegisterContainer;

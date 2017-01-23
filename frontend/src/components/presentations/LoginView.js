import React, { Component } from 'react';
import { Col, Row, FormControl, ControlLabel, FormGroup, Button } from 'react-bootstrap';

class LoginView extends Component {
    componentWillMount() {
        this.setState({
            username: '',
            password: '',
        });
    }
    onUsernameChange = (event) => {
        var new_state = Object.assign({}, this.state);
        new_state.username = event.target.value;
        this.setState(new_state);
    }
    onPasswordChange = (event) => {
        var new_state = Object.assign({}, this.state);
        new_state.password = event.target.value;
        this.setState(new_state);
    }
    submit = (event) => {
        this.props.onSubmit(this.state.username, this.state.password);
        event.preventDefault();
    }
    render() {
        var disabled = !this.props.enabled;
        return (
            <Col md={12}>
                <form onSubmit={this.submit}>
                    <Row>
                        <FormGroup>
                            <ControlLabel>
                                Username
                            </ControlLabel>
                            <FormControl
                                type="text"
                                onChange={this.onUsernameChange}
                                placeholder="Username"
                                autoFocus={true}
                                />
                        </FormGroup>
                    </Row>
                    <Row>
                        <FormGroup>
                            <ControlLabel>
                                Password
                            </ControlLabel>
                            <FormControl
                                type="password"
                                onChange={this.onPasswordChange}
                                placeholder="Password"
                                />
                        </FormGroup>
                    </Row>
                    <Row>
                        <FormGroup>
                            <Button
                                    type="submit"
                                    bsStyle="success"
                                    disabled={disabled}
                                    block>
                                Submit
                            </Button>
                        </FormGroup>
                    </Row>
                </form>
            </Col>
        );
    }
}

export default LoginView;

import React, { Component } from 'react';
import { Link } from 'react-router'

class Username extends Component {
    render() {
        var path = `/user/${this.props.id}`;
        return (
            <Link to={path}>{this.props.username}</Link>
        );
    }
}

export default Username;

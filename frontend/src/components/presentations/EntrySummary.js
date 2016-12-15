import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import { Link } from 'react-router'

class EntrySummary extends Component {
    render() {
        var path = `/page/${this.props.id}`;
        return (
            <div className="">
                <Panel header={<Link to={path}>{this.props.title}</Link>}>
                    {this.props.entry}
                </Panel>
            </div>
        );
    }
}

export default EntrySummary;

import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import { Link } from 'react-router'

import EntryContent from './EntryContent.js'

class EntrySummary extends Component {
    render() {
        var path = `/page/${this.props.id}`;
        return (
            <div className="">
                <Panel header={
                        <span>
                            <Link to={path}>{this.props.title}</Link>
                            <span className="pull-right">
                                {this.props.created}
                            </span>
                        </span>
                    }>
                    <EntryContent entry={this.props.entry} />
                </Panel>
            </div>
        );
    }
}

export default EntrySummary;

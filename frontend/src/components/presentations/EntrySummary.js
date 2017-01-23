import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import { Link } from 'react-router'

import EntryContent from './EntryContent.js'
import Username from './Username.js'

class EntrySummary extends Component {
    render() {
        var path = `/page/${this.props.id}`;
        var created = new Date(this.props.created).toString();
        if (this.props.author) {
            var username = <Username id={this.props.author._id} username={this.props.author.username} />;
        }
        
        return (
            <div className="">
                <Panel header={
                        <span>
                            <Link to={path}>{this.props.title}</Link>
                            <span className="pull-right">
                                {created}
                            </span>
                        </span>
                    }>
                    <EntryContent content={this.props.content} />
                    <span className="pull-right">
                        {username}
                    </span>
                </Panel>
            </div>
        );
    }
}

export default EntrySummary;

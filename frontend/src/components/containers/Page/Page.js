import React, { Component } from 'react';
import axios from 'axios'

import { Panel } from 'react-bootstrap';
import EntryContent from '../../presentations/EntryContent.js'

class Page extends Component {
    componentWillMount() {
        this.setState({
            'entry': {'title': '', 'content': ''},
        });
    }
    componentDidMount() {
        axios.get(`/api/blog/entry/${this.props.params.id}`).then(
            (result) => {
                var entry = result.data.entry;
                this.setState({
                    'entry': entry,
                });
            }
        );
    }
    render() {
        return (
            <Panel>
                <h1>{this.state.entry.title}</h1>
                <EntryContent content={this.state.entry.content} />
            </Panel>
        );
    }
}

export default Page;

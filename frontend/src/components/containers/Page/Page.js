import React, { Component } from 'react';
import axios from 'axios'

import { Panel } from 'react-bootstrap';
import EntryContent from '../../presentations/EntryContent.js'

class Page extends Component {
    componentWillMount() {
        this.setState({
            'entry': {'title': '', 'entry': ''},
        });
    }
    componentDidMount() {
        console.log(this.props);
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
                <EntryContent entry={this.state.entry.entry} />
            </Panel>
        );
    }
}

export default Page;

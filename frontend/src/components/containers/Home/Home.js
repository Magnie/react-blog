import React, { Component } from 'react';
import ListSummary from '../../presentations/ListSummary.js'
import NewPost from '../NewPost/NewPost.js'

class Home extends Component {
    componentWillMount() {
        this.setState({
            'entries': [],
        });
    }
    componentDidMount() {
        this.setState({
            'entries': [
                {
                    'title': 'Test',
                    'entry': 'Testing a new post!',
                },
                {
                    'title': 'Hello World!',
                    'entry': 'Welcome to the React Blog!',
                },
            ],
        });
    }
    render() {
        return (
            <div className="">
                <ListSummary entries={this.state.entries} />
                <NewPost />
            </div>
        );
    }
}

export default Home;

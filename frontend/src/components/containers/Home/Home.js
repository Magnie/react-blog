import React, { Component } from 'react';
import ListSummary from '../../presentations/ListSummary.js'
import NewPost from '../NewPost/NewPost.js'
import axios from 'axios'

class Home extends Component {
    componentWillMount() {
        this.setState({
            'entries': [],
        });
    }
    componentDidMount() {
        this.getPosts();
    }
    newPost = (entry) => {
        axios.post('/api/blog/entry/create', entry).then(
            (result) => {
                if (result.data.count == 1) {
                    // Could refresh the whole list
                    // this.getPosts();
                    
                    // Or add it to our current list.
                    var new_state = Object.assign({}, this.state);
                    new_state.entries.unshift(result.data.document);
                    this.setState(new_state);
                    
                } else {
                    console.error('Error:', result.data);
                }
            }
        );
    }
    getPosts() {
        axios.get('/api/blog/entries/1').then(
            (result) => {
                var entries = result.data.entries;
                this.setState({
                    'entries': entries,
                });
            }
        );
    }
    render() {
        return (
            <div className="">
                <NewPost onSubmit={this.newPost} />
                <ListSummary entries={this.state.entries} />
            </div>
        );
    }
}

export default Home;

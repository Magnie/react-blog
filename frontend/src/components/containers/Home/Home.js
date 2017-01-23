import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios'
import ListSummary from '../../presentations/ListSummary.js'
import NewPost from '../NewPost/NewPost.js'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entries: [],
        };
    }
    componentDidMount() {
        this.getPosts();
    }
    newPost = (data) => {
        var entry = {
            title: data.title,
            content: data.content,
        };
        axios.post('/api/blog/entry/create', entry).then(
            (result) => {
                if (result.data.count === 1) {
                    var new_state = Object.assign({}, this.state);
                    var new_entries = [result.data.document].concat(new_state.entries);
                    new_state.entries = new_entries;
                    this.setState(new_state);
                } else {
                    console.error('Error:', result.data);
                }
            },
            (error) => {}
        );
    }
    getPosts() {
        var offset = 1;
        axios.get(`/api/blog/entries/${offset}`).then(
            (result) => {
                var new_state = Object.assign({}, this.state);
                new_state.entries = result.data.entries;
                this.setState(new_state);
            },
            (error) => {}
        );
    }
    render() {
        var new_post = null;
        if (this.props.logged_in) {
            new_post = <NewPost onSubmit={this.newPost} />;
        }
        return (
            <div className="">
                { new_post }
                <ListSummary entries={this.state.entries} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        logged_in: state.auth.account.logged_in,
    }
}

var HomeContainer = connect(mapStateToProps)(Home);
export default HomeContainer;

import React, { Component } from 'react';
import {connect} from 'react-redux';
import ListSummary from '../../presentations/ListSummary.js'
import NewPost from '../NewPost/NewPost.js'
import { get_entries, create_entry } from '../../../state/actions.js'

class Home extends Component {
    componentDidMount() {
        this.getPosts();
    }
    newPost = (entry) => {
        create_entry(this.props.dispatch, entry.title, entry.content);
    }
    getPosts() {
        get_entries(this.props.dispatch, 1);
    }
    render() {
        return (
            <div className="">
                <NewPost onSubmit={this.newPost} />
                <ListSummary entries={this.props.entries} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        entries: state.entries || [],
    }
}

var HomeContainer = connect(mapStateToProps)(Home);
export default HomeContainer;

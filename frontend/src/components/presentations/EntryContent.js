import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown'

class EntryContent extends Component {
    render() {
        return (
            <ReactMarkdown escapeHtml={true} source={this.props.content || ''} />
        );
    }
}

export default EntryContent;

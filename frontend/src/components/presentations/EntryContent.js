import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown'

class EntryContent extends Component {
    render() {
        if (typeof(this.props.content) === "string") {
            return (
                <ReactMarkdown escapeHtml={true} source={this.props.content || ''} />
            );
        } else {
            var json_content = JSON.stringify(this.props.content);
            return (
                <div>
                    <p>Error loading post.</p>
                    <p>{json_content}</p>
                </div>
            );
        }
    }
}

export default EntryContent;

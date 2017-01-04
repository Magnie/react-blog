import React, { Component } from 'react';
import EntrySummary from './EntrySummary.js'

class ListSummary extends Component {
    render() {
        return (
            <div className="">
                {this.props.entries.map(
                    function(entry, index) {
                        return (
                            <EntrySummary key={index}
                                id={entry._id}
                                title={entry.title}
                                author={entry.user}
                                created={entry.created}
                                content={entry.content} />
                        );
                    }
                )}
            </div>
        );
    }
}

export default ListSummary;

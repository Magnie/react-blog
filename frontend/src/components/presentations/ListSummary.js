import React, { Component } from 'react';
import EntrySummary from './EntrySummary.js'

class ListSummary extends Component {
    render() {
        return (
            <div className="">
                {this.props.entries.map(
                    function(entry, index) {
                        return (
                            <EntrySummary key={index} id={entry._id} title={entry.title} created={entry.created} entry={entry.entry} />
                        );
                    }
                )}
            </div>
        );
    }
}

export default ListSummary;

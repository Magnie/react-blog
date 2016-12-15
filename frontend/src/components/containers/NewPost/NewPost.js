import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import RichTextEditor from 'react-rte';

class NewPost extends Component {
    componentWillMount() {
        this.setState({
            'entry': RichTextEditor.createEmptyValue(),
        });
    }
    componentDidMount() {
        this.setState({
            'entry': RichTextEditor.createEmptyValue(),
        });
    }
    onchange = (value) => {
        this.setState({
            'entry': value,
        });
    }
    render() {
        return (
            <div className="">
                <RichTextEditor value={this.state.entry} onChange={this.onchange} />
                <Button bsStyle="success" block>Post</Button>
            </div>
        );
    }
}

export default NewPost;

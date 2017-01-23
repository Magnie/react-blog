import React, { Component } from 'react';
import { Panel, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import { Editor } from 'react-draft-wysiwyg';
import draftToMarkdown from 'draftjs-to-markdown';
import { convertToRaw } from 'draft-js';

class NewPost extends Component {
    componentWillMount() {
        this.reset();
    }
    componentDidMount() {
        this.setState({
            'title': this.props.title || '',
            'content': '',
        });
    }
    reset() {
        this.setState({
            'title': '',
            'content': '',
        });
    }
    update_rte = (value) => {
        var new_state = Object.assign({}, this.state);
        new_state.content = value;
        this.setState(new_state);
    }
    update_title = (event) => {
        var new_state = Object.assign({}, this.state);
        new_state.title = event.target.value;
        this.setState(new_state);
    }
    submit = () => {
        var rawContent = convertToRaw(this.state.content.getCurrentContent());
        var markup = draftToMarkdown(rawContent);
        var entry = {
            'title': this.state.title,
            'content': markup,
        };
        this.props.onSubmit(entry);
        
        // Clear the form
        this.reset();
    }
    render() {
        return (
            <Panel>
                <FormGroup>
                    <ControlLabel>Title</ControlLabel>
                    <FormControl type="text" value={this.state.title} onChange={this.update_title} />
                    <ControlLabel>Message</ControlLabel>
                    <Editor value={this.state.content} onEditorStateChange={this.update_rte} tabIndex={1} />
                </FormGroup>
                <hr />
                <Button bsStyle="success" className="pull-right" onClick={this.submit}>Post</Button>
            </Panel>
        );
    }
}

export default NewPost;

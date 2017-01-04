import React, { Component } from 'react';
import { Panel, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import RichTextEditor from 'react-rte';

class NewPost extends Component {
    componentWillMount() {
        this.reset();
    }
    componentDidMount() {
        this.setState({
            'title': this.props.title || '',
            'content': RichTextEditor.createEmptyValue(),
        });
    }
    reset() {
        this.setState({
            'title': '',
            'content': RichTextEditor.createEmptyValue(),
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
        var entry = {
            'title': this.state.title,
            'content': this.state.content.toString('markdown'),
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
                    <RichTextEditor value={this.state.content} onChange={this.update_rte} />
                </FormGroup>
                <Button bsStyle="success" className="pull-right" onClick={this.submit}>Post</Button>
            </Panel>
        );
    }
}

export default NewPost;

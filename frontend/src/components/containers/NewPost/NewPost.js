import React, { Component } from 'react';
import { Panel, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import RichTextEditor from 'react-rte';

class NewPost extends Component {
    componentWillMount() {
        this.setState({
            'title': '',
            'entry': RichTextEditor.createEmptyValue(),
        });
    }
    componentDidMount() {
        this.setState({
            'title': '',
            'entry': RichTextEditor.createEmptyValue(),
        });
    }
    update_rte = (value) => {
        var new_state = Object.assign({}, this.state);
        new_state.entry = value;
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
            'entry': this.state.entry.toString('markdown'),
        };
        this.props.onSubmit(entry);
    }
    render() {
        return (
            <Panel>
                <FormGroup>
                    <ControlLabel>Title</ControlLabel>
                    <FormControl type="text" value={this.state.title} onChange={this.update_title} />
                    <ControlLabel>Message</ControlLabel>
                    <RichTextEditor value={this.state.entry} onChange={this.update_rte} />
                </FormGroup>
                <Button bsStyle="success" className="pull-right" onClick={this.submit}>Post</Button>
            </Panel>
        );
    }
}

export default NewPost;

import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


export class AddMessage extends Component {
    state = {
        title: '',
        status: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addMessage(this.state);
    }

  render() {
    return (
      <Form className="form" onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input 
            type="text" 
            name="title" 
            id="title" 
            value={this.state.title} 
            onChange={this.handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="status">Status</Label>
          <Input 
            type="text" 
            name="title" 
            id="status" 
            value={this.state.status} 
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button color="primary" size="lg" block>Submit</Button>
      </Form>
    )
  }
}

export default AddMessage;

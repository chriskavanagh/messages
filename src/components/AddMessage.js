import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


export class AddMessage extends Component {
    state = {
        title: '',
        status: ''
    }

    handleChange = (e) => {
        //let { id } = e.target;
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addMessage(this.state);
        this.setState({
            title: '',
            text: '',
            status: ''
        })
    }

    h2Style = {
      color: "rgb(196, 196, 0)",
      marginTop: "12rem"
    }
    formStyle = {
      margin: "5rem 0 5rem 17rem",
      width: "50%"
    }

  render() {
    return (
      <div>
      <h2 style={this.h2Style}>Add A Message</h2>
      <Form style={this.formStyle} onSubmit={this.handleSubmit}>
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
          <Label for="title">Text</Label>
          <Input 
            type="text" 
            name="title" 
            id="text" 
            value={this.state.text} 
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
      </div>
    )
  }
}

export default AddMessage;

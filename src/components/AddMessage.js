import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export class AddMessage extends Component {
    state = {
        title: '',
        text: '',
        status: ''
    }

    handleChange = (e) => {
        const { id, value } = e.target;
        this.setState({
            [id]: value
            //[e.target.id]: e.target.value,
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
      color: "#191970",
      marginTop: "12rem"
    }

    formStyle = {
      margin: "5rem 0 15rem 17rem",
      width: "50%",
      border: "2px solid #B8860B",
      borderRadius: "15px",
      padding: "60px 30px 80px 30px"
    }

    iconStyle = {      
      marginRight: "5px"
    }

  render() {
    return (
      <div>
      <h2 style={this.h2Style}>Add A Message</h2>
      <Form style={this.formStyle} onSubmit={this.handleSubmit}>
      
        <FormGroup>
          <Label for="title">
            <FontAwesomeIcon style={this.iconStyle} icon="edit" />            
            Title
          </Label>
          <Input 
            type="text" 
            name="title" 
            id="title" 
            value={this.state.title} 
            onChange={this.handleChange}
          />
        </FormGroup>
        
        <FormGroup>
        <FontAwesomeIcon style={this.iconStyle} icon="file" />
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
        <FontAwesomeIcon style={this.iconStyle} icon="keyboard" />
          <Label for="status">Status</Label>
          <Input 
            type="text" 
            name="title" 
            id="status" 
            value={this.state.status} 
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button outline color="warning" size="lg" block>Submit</Button>
      </Form>
      </div>
    )
  }
} // end class

export default AddMessage;

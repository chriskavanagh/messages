import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
import Message from './Message';

export default class MesssageList extends Component {

state = {       
    messages: [
      {id: 12, title: 'I lost my phone', text:'Can you look at home for my phone?', status: 'not-read'},
      {id: 22, title: 'Urgent: Nigerian Prince', text:'I need help spending my millions of dollars.', status: 'not-read'},
      {id: 32, title: 'Can I haz Cheezburger', text:'Remember to bring home burgers', status: 'read'},
      {id: 42, title: 'Lipsum.com', text:'Lorem ipsum dolor sit amet', status: 'read'}
  ]};

    toggleRead = (msg) => {
        let message = this.state.messages.map((m) => {
            if(m.id === msg.id){
                m.status = msg.status;
            }
            return m;
        });
        this.setState({messages:message});
    }

  render() {
    return (
    <Container className="container">
      <ListGroup className="message-list">
        {this.state.messages.map((msg) => 
        <ListGroupItem className="justify-content-between">
          <Message key={msg.id} msg={msg} toggleRead={this.toggleRead}></Message>
        </ListGroupItem>            
        )}
      </ListGroup>
    </Container>
    )
  } // end render
} // end class

import React, { Component } from 'react';
import withSecretToLife from './HOC/SecretHoc';
import { Button } from 'reactstrap';


class Message extends Component {
    state = {
        id: this.props.msg.id,
        title: this.props.msg.title,
        text: this.props.msg.text,
        status: this.props.msg.status
    }

    toggle = (e) => {
        let msg = {...this.state};
        msg.status = (msg.status === "read") ? "not-read":"read";
        this.setState({...msg});
        this.props.toggleRead(msg);
    }

    render() {
        const { status, title, text } = this.props.msg;
        let label = (this.state.status === 'not-read') ? 'Mark As Read':'Mark As Unread';
        let triangleClass = (this.state.status === 'not-read') ? "triangle-topright":"none"
        let muted = (this.state.status === 'not-read') ? "none":"muted";
        return (
          <div className={ status + ' message-box' }>
            <div className={ triangleClass }></div>
            <h2 className={ muted }>{ title }</h2>
            <h3>{this.props.secretToLife}</h3>
            <p className={ muted }>{ text }</p>
            <p><Button color="warning" onClick={this.toggle}>{ label }</Button></p>
          </div>
        )
      }

} // end class

const WrappedComponent = withSecretToLife(Message)
export default WrappedComponent;
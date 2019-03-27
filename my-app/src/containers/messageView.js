import React, { Component } from 'react';
import MessageList from "../components/messageList";

class MessageView extends Component  {
  render(){
    return(
      <MessageList username={this.props.username} />
    )
  }
}

export default MessageView;

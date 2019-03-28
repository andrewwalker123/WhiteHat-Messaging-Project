import React, { Component } from 'react';
import MessageList from "../components/messageList";

class MessageView extends Component  {
  render(){
    return(
      <MessageList data={this.props}/>
    )
  }
}

export default MessageView;

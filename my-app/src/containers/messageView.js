import React, { Component } from 'react';
import MessageList from "../components/messageList";

export default class MessageView extends Component  {
  render(){
    return(
      <MessageList data={this.props}/>
    )
  }
}
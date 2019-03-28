import React, { Component } from 'react';
import Message from './message';

class MessageList extends Component {

  state = {
    newMessage: "",
    messagesList: [
      {
      userName: 'Ralf',
      timePosted: Date.now(),
      message: 'here is someone\'s message'
    },
      {
        userName: 'Caroline',
        timePosted: Date.now(),
        message: 'here is my message'
      }
    ],
    scrollPosition: 0
  };
componentDidUpdate() {

  document.getElementById('chat').scrollIntoView(false)
}

  handleSubmit = event => {
    event.preventDefault();
    {this.state.newMessage && 
    this.setState({messagesList: [...this.state.messagesList, {
        userName: this.props.username,
        timePosted: Date.now(),
        message: this.state.newMessage
      }]})
    }
  };

  handleChange = (event) => {
    this.setState({newMessage: event.target.value})
  };

  render() {
    return (
      <div className="bg-washed-blue">
        <h1 className="white bg-blue w-100 sans-serif ma0 pa2 fixed pl3">Sky 1</h1>
        <div id="chat" className="sans-serif pt5 pb5 pl3 pr3 flex flex-column">
          <p className="">Welcome to the Sky 1 chat</p>
          {this.state.messagesList.map((messageInfo, index ) => {
            return <Message key={index} myUserName={this.props.username} messageInfo={messageInfo}/>
          })}
        </div>
        <div>
          <form className="w-100 flex sans-serif ma0 ba fixed" style={{bottom:0}} onSubmit={this.handleSubmit} >
            <input className="bg-white w-80" type="text" placeholder="Write a message here" onChange={this.handleChange}/>
            <button className="bg-blue white w-20 pa3">SEND</button>
          </form>
        </div>
      </div>
    );
  }
}

export default MessageList;

import React, { Component } from 'react';
import Message from '../components/message';
import Header from '../components/Header'
import Body from '../components/Body'

class MessagePage extends Component {

  state = {
    newMessage: "",
    messagesList: []
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({messagesList: [...this.state.messagesList, this.state.newMessage]})
  }

  render() {
    return (
      <div className="bg-washed-blue">
       <Header headerTitle='Messages'/>
       <Body>
       <div className="sans-serif pt5 pb5 pl3 pr3 flex flex-column">
         <p className="">Welcome to the Sky 1 chat</p>
          <Message myMessage={true} message={"hello world"}/>
         <Message myMessage={false} message={"hello world"}/>
          </div>
         <div>
           <form className="w-100 flex sans-serif ma0 ba fixed" style={{bottom:0}} onSubmit={this.handleSubmit} >
             <input className="bg-white w-80" type="text" placeholder="Write a message here" onChange={event => this.setState({newMessage: event.target.value})}/>
             <button className="bg-blue white w-20 pa3">SEND</button>
           </form>
          </div>
          </Body>
     </div>
    );
  }
}

export default MessagePage;

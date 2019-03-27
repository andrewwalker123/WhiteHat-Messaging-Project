import React, { Component } from 'react';
import Message from './components/message';

class App extends Component {

  state = {
    newMessage: "Write a message here",
    messagesList: []
  }

  handleSubmit = event => {
    event.preventDefault()
    let messageArr = this.state.messagesList
    let message = this.state.newMessage
    this.setState({messagesList: messageArr.push(message), newMessage: "Write a message here"})
    console.log(this.state.messagesList)

  }

  render() {
    return (
      <div class="bg-washed-blue">
        <h1 class="white bg-blue w-100 sans-serif ma0 pa2 fixed pl3">Sky 1</h1>
      <div class="sans-serif pt5 pb5 pl3 pr3 flex flex-column">
        <p class="">Welcome to the Sky 1 chat</p>
        <Message myMessage={true} message={"hello world"}/>
        <Message myMessage={false} message={"hello world"}/>
        <Message myMessage={false} message={"hello world"}/>
        <Message myMessage={false} message={"hello world"}/>
        <Message myMessage={true} message={"hello world"}/>
        <Message myMessage={true} message={"hello world"}/>
        <Message myMessage={false} message={"hello world"}/>
        <Message myMessage={false} message={"hello world"}/>
        <Message myMessage={false} message={"hello world"}/>
        <Message myMessage={false} message={"hello world"}/>
        <Message myMessage={false} message={"hello world"}/>
        <Message myMessage={false} message={"hello world"}/>
        <Message myMessage={false} message={"hello world"}/>
        <Message myMessage={false} message={"hello world"}/>
        </div>
        <div>
          <form class="w-100 flex sans-serif ma0 ba fixed" Style="bottom:0;" onSubmit={this.handleSubmit} >
            <input class="bg-white w-80" type="text" value={this.state.newMessage} onChange={event => this.setState({newMessage: event.target.value})}/>
            <button class="bg-blue white w-20 pa3">SEND</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;

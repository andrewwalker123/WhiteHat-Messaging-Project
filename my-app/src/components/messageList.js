import React, { Component } from 'react';
import Message from './message';
import slugify from '../utils/slugify';
import Header from './Header'

class MessageList extends Component {
  constructor(props){
    super(props)
    const channelName = this.props.data.location.data.channelName;
    const user = this.props.data.username;
    const slug = slugify(channelName);
    this.state = {
      newMessage: "",
      channelName: this.props.data.location.data.channelName,
      user: user,
      slug: slugify(channelName),
      socket: new WebSocket(`ws://sky-chat.whitechapeau.com/${slug}/${user}`),
      messagesList: []
    };

  }
  componentDidMount(){
    this.state.socket.addEventListener('open', (event) => {
      this.state.socket.send(`${this.state.user} User has joined the chat!`);
    });

   this.state.socket.addEventListener('message', this.onMessage);
  }
 
  onMessage = (evt) => {
    let [resName, resTime, resMessage] = evt.data.split('|')
    this.setState({messagesList: [...this.state.messagesList, {
      userName: resName,
      timePosted: resTime,
      message: resMessage 
    }]})
  }

  handleSubmit = event => {
    event.preventDefault();
    {this.state.newMessage && 
    this.state.socket.send(this.state.newMessage)
    }
    this.setState({newMessage: ""})
  };

  handleChange = (event) => {
    this.setState({newMessage: event.target.value})
  };

  render() {
    return (
      <div className="bg-washed-blue">
        <Header headerTitle={this.state.channelName} headerImage={this.props.data.location.data.channelIcon}/>
        <div className="sans-serif pt5 pb5 pl3 pr3 flex flex-column">
          <p className="">{`Welcome to the ${this.state.channelName} chat`}</p>
          {this.state.messagesList.map((messageInfo, index ) => {
            if(Number(messageInfo.timePosted)){
              return <Message key={index} myUserName={this.state.user} messageInfo={messageInfo}/>
            }
          })}
        </div>
        <div>
          <form className="w-100 flex sans-serif ma0 ba fixed" style={{bottom:0}} onSubmit={this.handleSubmit} >
            <input className="bg-white w-80" type="text" placeholder="Write a message here" value={this.state.newMessage} onChange={this.handleChange}/>
            <button className="bg-blue white w-20 pa3">SEND</button>
          </form>
        </div>
      </div>
    );
  }
}

export default MessageList;

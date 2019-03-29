import React, { Component } from 'react';
import Message from './message';
import slugify from '../utils/slugify';
import Header from './Header';
import { withRouter } from 'react-router-dom';

class MessageList extends Component {
  constructor(props) {
    super(props);
    let intervalId = 0;
    const channelName = this.props.data.location.data.channelName;
    const user = this.props.data.username;
    const slug = slugify(channelName);
    const timeLeftSecs =
      (Date.parse(new Date(this.props.data.location.data.programme.stop)) -
        Date.parse(new Date())) /
      1000;
    this.state = {
      newMessage: '',
      channelName: this.props.data.location.data.channelName,
      user: user,
      slug: slugify(channelName),
      socket: new WebSocket(`ws://sky-chat.whitechapeau.com/${slug}/${user}`),
      messagesList: [],
      secondsLeft: 0,
      minutesLeft: 0,
      time: timeLeftSecs,
    };
  }

  componentDidMount() {
    this.state.socket.addEventListener('open', event => {
      messagesList: []
    }
  }
  componentDidUpdate() {
    document.getElementById('chat').scrollIntoView(false)
  }

  componentDidMount(){
    this.state.socket.addEventListener('open', (event) => {
      this.state.socket.send(`${this.state.user} has joined the chat!`);
    });

    this.state.socket.addEventListener('message', this.onMessage);

    this.intervalId = setInterval(this.timer, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);

  onMessage = (evt) => {
    let [resName, resTime, resMessage] = evt.data.split('|')
    this.setState({messagesList: [...this.state.messagesList, {
      userName: resName,
      timePosted: resTime,
      message: resMessage
    }]})
  }

  timer = () => {
    let secs = this.state.time;
    let minutes = Math.floor(secs / 60);
    this.setState({
      minutesLeft: minutes,
      secondsLeft: secs % 60,
      time: secs - 1,
    });
    if (this.state.time <= 0) {
      console.log('in redirect');
      return this.props.history.push('/channel');
    }
  };

  onMessage = evt => {
    let [resName, resTime, resMessage] = evt.data.split('|');
    this.setState({
      messagesList: [
        ...this.state.messagesList,
        {
          userName: resName,
          timePosted: resTime,
          message: resMessage,
        },
      ],
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    {this.state.newMessage &&
    this.state.socket.send(this.state.newMessage)
    }
    this.setState({ newMessage: '' });
  };

  handleChange = event => {
    this.setState({ newMessage: event.target.value });
  };

  render() {
    return (
      <div className="bg-washed-blue">
        {console.log(this.props.data.location.data.programme.stop)}
        {console.log(
          Date.parse(new Date(this.props.data.location.data.programme.stop)) -
            Date.parse(new Date()),
        )}
        <Header
          headerTitle={this.state.channelName}
          headerImage={this.props.data.location.data.channelIcon}
        />
        <div className="sans-serif pt5 pb5 pl3 pr3 flex flex-column">
      <div >
        <Header headerTitle={this.state.channelName} headerImage={this.props.data.location.data.channelIcon}/>
        <div id="chat" className="sans-serif pt5 pb5 pl3 pr3 flex flex-column">
          <p className="">{`Welcome to the ${this.state.channelName} chat`}</p>
          {this.state.messagesList.map((messageInfo, index) => {
            if (Number(messageInfo.timePosted)) {
              return (
                <Message
                  key={index}
                  myUserName={this.state.user}
                  messageInfo={messageInfo}
                />
              );
            }
          })}
        </div>
        <div className="w-100 flex flex-wrap fixed" style={{ bottom: 0 }}>
        <div >
          Time Left: {this.state.minutesLeft}:{this.state.secondsLeft}
        </div>
          <form
            className="w-100 flex sans-serif ma0 ba"
            onSubmit={this.handleSubmit}
          >
            <input
              className="bg-white w-80"
              type="text"
              placeholder="Write a message here"
              value={this.state.newMessage}
              onChange={this.handleChange}
            />
            <button className="bg-blue white w-20 pa3">SEND</button>
          </form>
          </div>
      </div>
    );
  }
}

export default withRouter(MessageList);

import React, { Component } from 'react';

export default class ChannelPage extends Component {
  render() {
      console.log('specific channel view channel props passed with Link', this.props.location.channel)
    return (
      <div>
        <h2>{this.props.location.channel.channelName}</h2>
        <img src={this.props.location.channel.channelIcon}></img>
        <h1>{this.props.location.channel.programme.title}</h1>    
      </div>
    )
  }
}

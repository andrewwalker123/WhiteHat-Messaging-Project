import React, { Component } from 'react';

export default class ChannelCard extends Component {
  render() {
      console.log('specific channel view channel props passed with Link', this.props.location.channel)
    return (
      <div>
        <h2>{this.props.channel.channelName}</h2>
        <img src={this.props.channel.channelIcon}></img>
        <h1>{this.props.channel.programme.title}</h1>    
        <p>{this.props.chan}</p>
      </div>
    )
  }
}

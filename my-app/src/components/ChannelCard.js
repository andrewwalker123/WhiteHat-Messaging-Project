import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class ChannelCard extends Component {
  render() {
    return (
        <Link to={{pathname: `/channel/:${this.props.channel.channelName}`, channel: this.props.channel}}>
            <h2>{this.props.channel.channelName}</h2>
            <img src={this.props.channel.channelIcon}></img>
            <h1>{this.props.channel.programme.title}</h1>
        </Link>  

    )
  }
}

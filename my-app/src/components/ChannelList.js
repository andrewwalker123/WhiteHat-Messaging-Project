import React, { Component } from 'react';
import ChannelCard from './ChannelCard'

export default class ChannelList extends Component {
    constructor() {
        super()
        this.state = {
            channelArray: [],
            currentlySelectedChannel: {}
        }
    }
    componentDidMount() {
        fetch('http://sky-api.whitechapeau.com').then((res) => {
            return res.clone().json()
        }).then((data) => {
            this.setState({channelArray: data})
        })
    }
  render() {
    return (
        <div>
            <h1>Hello {this.props.username}</h1>
            {this.state.channelArray.map(channel => {
                    return <ChannelCard channel={channel}/>
            })}
        </div>
    )
  }
}
import React, { Component } from 'react';
import ChannelCard from '../components/channelCard'
import Header from '../components/Header'
import Body from '../components/Body'
import slugify from '../utils/slugify';

export default class ChannelListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            channelArray: [],
            username: this.props.username
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
        <div className="">
            <Header headerTitle='Channels'/>
            <Body>
                <h1>Hello {this.state.username}</h1>
                {this.state.channelArray.map(channel => {
                    return <ChannelCard slug={slugify(channel.channelName)} channel={channel} username={this.state.username}/>
                 })}
            </Body>
        </div>
    )
  }
}
import React, { Component } from 'react';
import ChannelCard from '../components/ChannelCard'
import Header from '../components/Header'
import Body from '../components/Body'

export default class ChannelListPage extends Component {
    constructor(props) {
        super(props)
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
        <div className="bg-washed-blue">
            <Header headerTitle='Channels'/>
            <Body>
                <h1>Hello {this.state.username}</h1>
                {this.state.channelArray.map(channel => {
                    return <ChannelCard channel={channel} username={this.state.username}/>
                 })}
            </Body>
        </div>
    )
  }
}

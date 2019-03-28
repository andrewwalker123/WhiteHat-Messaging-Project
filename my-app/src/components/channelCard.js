import React from 'react';
import { Link } from 'react-router-dom'

const ChannelCard = (props) => {
    return (
        <Link to={{pathname: `/channel/${props.slug}`, data: props}}>
            <h2>{props.channel.channelName}</h2>
            <img src={props.channel.channelIcon}></img>
            <h1>{props.channel.programme.title}</h1>
        </Link>  

    )
}
export default ChannelCard
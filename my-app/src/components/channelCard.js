import React from 'react';
import { Link } from 'react-router-dom'

const ChannelCard = (props) => {
    console.log(props)
    return (
        <div className='items-stretch center ma0 bg-light-blue mb5 w-50 tl-ns bg-animate br4 ba b--black-10'>
        <Link className='no-underline' to={{pathname: `/channel/:${props.channel.channelName}`, data: props}}>
            <img src={props.channel.channelIcon} width='600' height='83' className='center'></img>
            <h1 className='tc white pt3 pb3'>{props.channel.programme.title}</h1>
        </Link>
        </div>
    )
}
export default ChannelCard
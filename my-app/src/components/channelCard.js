import React from 'react';
import { Link } from 'react-router-dom'

const ChannelCard = (props) => {
    return (
        <div className='justify-center center ma0 mb4 w-50 tl-ns bg-animate br4 ba b--black-10'>
        <Link className='no-underline' to={{pathname: `/channel/${props.slug}`, data: props}}>
            <img src={props.channel.channelIcon} width='600' height='83' className='center'/>
        </Link>
        </div>
    )
}
export default ChannelCard

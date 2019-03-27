import React from 'react';

const ChannelPage = (props) => {
  console.log(props)
    return (
      <div>
        <h2>{props.location.data.channel.channelName}</h2>
        <img src={props.location.data.channel.channelIcon}></img>
        <h1>{props.location.data.channel.programme.title}</h1>    
      </div>
    )
}
export default ChannelPage
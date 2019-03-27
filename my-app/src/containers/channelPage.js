import React from 'react';
import Header from '../components/Header'
import Body from '../components/Body'

const ChannelPage = (props) => {
  console.log(props)
    return (
      <div className="bg-washed-blue">
          <Header headerTitle={props.location.data.channel.channelName} headerImage={props.location.data.channel.channelIcon}/>
         <Body>
           <h1>{props.location.data.channel.programme.description}</h1>  
          </Body>
      </div>
    )
}
export default ChannelPage
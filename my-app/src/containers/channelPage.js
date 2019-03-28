import React from 'react';
import Header from '../components/Header'
import Body from '../components/Body'
import { Link } from 'react-router-dom'

const ChannelPage = (props) => {
  console.log(props)
    return (
      <div className="bg-washed-blue">
          <Header headerTitle={props.location.data.channel.channelName} headerImage={props.location.data.channel.channelIcon}/>
         <Body>
           <img src={props.location.data.channel.programme.contentUrl} height='50%' width='50%'></img>
           <h1>{props.location.data.channel.programme.title}</h1>
           <h2>{props.location.data.channel.programme.desc}</h2>
           <Link to={{pathname: `/channel/:${props.location.data.channel.channelName}/chat`, data: props.location.data}}>
            <div>
              <h1>Join Chat</h1>
            </div>
          </Link>
          </Body>
      </div>
    )
}
export default ChannelPage
import React from 'react';
import Header from '../components/Header';
import Body from '../components/Body';
import { Link } from 'react-router-dom';
import slugify from '../utils/slugify';

const ChannelPage = (props) => {

    const { channelName, channelIcon, programme: {contentUrl, title, desc} } = props.location.data.channel
    const slugUrl = slugify(channelName)
    return (
      <div className="bg-washed-blue">
          <Header headerTitle={channelName} headerImage={channelIcon}/>
         <Body>
           <img src={contentUrl} height='50%' width='50%'></img>
           <h1>{title}</h1>
           <h2>{desc}</h2>
           <Link to={{pathname: `/channel/${slugUrl}/chat`, data: props.location.data.channel}}>
            <div>
              <h1>Join Chat</h1>
            </div>
          </Link>
          </Body>
      </div>
    )}

export default ChannelPage
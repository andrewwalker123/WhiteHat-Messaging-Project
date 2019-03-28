import React from 'react';
import Header from '../components/Header';
import Body from '../components/Body';
import { Link } from 'react-router-dom';
import slugify from '../utils/slugify';

const ChannelPage = (props) => {

    const { channelName, channelIcon, programme: {contentUrl, title, desc} } = props.location.data.channel
    const slugUrl = slugify(channelName)
    return (
      <div className="">
          <Header headerTitle={channelName} headerImage={channelIcon}/>
         <Body>
           <Link to={{pathname: `/channel/:${channelName}/chat`, data: props.location.data}}>
             <div>
               <img src={contentUrl} height='50%' width='50%'></img>
             </div>
            <div>
              <h1>Join Chat</h1>
            </div>
          </Link>
      </div>
    )}

export default ChannelPage

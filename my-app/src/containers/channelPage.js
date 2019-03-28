import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Body from '../components/Body';
import slugify from '../utils/slugify';

const ChannelPage = (props) => {

  const { channelName, channelIcon, programme: {contentUrl, title, desc} } = props.location.data.channel
  const slugUrl = slugify(channelName);
  return (
    <div className="bg-washed-blue">
      <Header headerTitle={channelName} headerImage={channelIcon}/>
      <Body>
        <div>
          <img src={contentUrl} height='50%' width='50%'/>
        </div>
        <h1>{title}</h1>
        <h2>{desc}</h2>
      </Body>
      <Link to={{pathname: `/channel/${slugUrl}/chat`, data: props.location.data.channel}}>
        <button className="bg-green white pa3 w-100 sans-serif ma0 ba fixed" style={{bottom:0}}>JOIN CHAT</button>
      </Link>
    </div>
  )};

export default ChannelPage;

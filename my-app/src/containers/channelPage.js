import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Body from '../components/Body';
import slugify from '../utils/slugify';
import channelPage from '../css/channelPage.css'

const ChannelPage = (props) => {

  const { channelName, channelIcon, programme: {contentUrl, title, desc} } = props.location.data.channel
  const slugUrl = slugify(channelName);
  return (
    <div>
      <Header headerTitle={channelName}/>
      <Body>
        <div className="flex-container">
          <div className="image-wrapper">
            <img src={contentUrl} alt="show-thumbnail"/>
          </div>
          <div className="container">
            <h1 className="white sans-serif">{title}</h1>
            <h3 className="white tj">{desc}</h3>
          </div>

        </div>
      </Body>
      <Link to={{pathname: `/channel/${slugUrl}/chat`, data: props.location.data.channel}}>
        <button className="bg-green white pa3 w-100 sans-serif ma0 ba fixed" style={{bottom:0}}>JOIN CHAT</button>
      </Link>
    </div>
  )};

export default ChannelPage;

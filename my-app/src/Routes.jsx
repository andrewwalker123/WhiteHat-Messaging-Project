import React, { Component } from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';

import  MessagePage  from './containers/messagePage';
import LoginPage from './containers/loginPage';
import ChannelList from './containers/channelList';
import Channel from './containers/channelPage';

export default class Routes extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/" component={LoginPage} />
              <Route exact path="/home" component={ChannelList} />
              <Route exact path="/home/channel" component={Channel} />
              <Route exact path="/home/channel/chat" component={MessagePage} />
              <Redirect to="/" />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

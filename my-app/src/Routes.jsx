import React, { Component } from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';

import  MessagePage  from './containers/messagePage';
import LoginPage from './containers/loginPage';
import ChannelList from './containers/channelList';
import Channel from './containers/channelPage';

export default class Routes extends Component {

  state = {
    user: ""
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Switch>
              <Route 
                exact 
                path="/" 
                render={() => {
                  if (this.state.user) {
                    return <ChannelList />;
                  } else {
                    return <LoginPage />;
                  }
                }}
                />
              <Route exact path="/channel/:channel" component={Channel} />
              <Route exact path="/channel/:channel/chat" component={MessagePage} />
              <Redirect to="/" />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

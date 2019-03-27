import React, { Component } from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';

import  MessagePage  from './containers/messagePage';
import LoginPage from './containers/LoginPage';
import ChannelListPage from './containers/ChannelListPage';
import Channel from './containers/ChannelPage';

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
                    return <ChannelListPage />;
                  } else {
                    return <LoginPage />;
                  }
                }}
                />
              <Route exact path="/channel" component={ChannelListPage} />
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

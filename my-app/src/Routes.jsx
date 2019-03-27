import React, { Component } from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import MessageView  from './containers/messageView';
import LoginPage from './containers/loginPage';
import ChannelListPage from './containers/channelListPage';
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
                    return <ChannelListPage />;
                  } else {
                    return <LoginPage />;
                  }
                }}
                />
              <Route exact path="/channel" component={ChannelListPage} />
              <Route exact path="/channel/:channel" component={Channel} />
              <Route exact path="/channel/:channel/chat" component={MessageView} />
              <Redirect to="/" />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

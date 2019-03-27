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
  setUser = (userName) => {
    this.setState({
      user: userName
    })
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
                    return <ChannelListPage username={this.state.user}/>;
                  } else {
                    return <LoginPage setUser={this.setUser}/>;
                  }
                }}
                />
              {/* <Route exact path="/channel" component={ChannelListPage} username={userName}/> */}
              <Route exact path="/channel" render={(props) => <ChannelListPage username={this.state.user} {...props} /> }/> 
              <Route exact path="/channel/:channel" render={(props) => <Channel username={this.state.user} {...props} /> } />
              <Route exact path="/channel/:channel/chat" render={(props) => <MessagePage username={this.state.user} {...props} /> } />
              <Redirect to="/" />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

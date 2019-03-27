import React, { Component } from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import MessageView  from './containers/messageView';
import LoginPage from './containers/loginPage';
import ChannelListPage from './containers/channelListPage';
import Channel from './containers/channelPage';

export default class Routes extends Component {

  state = {
    user: ""
  };
  setUser = (userName) => {
    this.setState({
      user: userName
    })
  };

  render() {

    return (
      <div>
        {this.state.user ? (
          <BrowserRouter>
          <div>
            <Switch>
                <Route exact path="/channel" render={(props) => <ChannelListPage username={this.state.user} {...props} /> }/>
                <Route exact path="/channel/:channel" render={(props) => <Channel username={this.state.user} {...props} /> } />
                <Route exact path="/channel/:channel/chat" render={(props) => <MessageView username={this.state.user} {...props} /> } />
              <Redirect to="/channel" />
            </Switch>
          </div>
        </BrowserRouter>
        ):(
          <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/"  render={(props) => <LoginPage setUser={this.setUser}/> }/>
              <Redirect to="/" />
            </Switch>
          </div>
        </BrowserRouter>
        )}
      </div>
    );
  }
}

import React, { Component } from 'react';

class Message extends Component {
    render() {
      return (
        <div>
        {this.props.myMessage === true ? (
                <div>
                    <div class="flex">
                        <p class="w-40 tr br4 pa2" />
                        <p class="bg-blue w-60 white tr br4 pa2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris .</p>
                        {/* <p class="bg-blue w-60 white tr br4 pa2">{this.props.message}</p> */}
                    </div>
                    <p class="tr mt0 pr2">Me</p>
                </div>
        ):(
                <div>
                    <div class="flex">
                        <p class="bg-light-gray w-60 br4 pa2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p class="w-40 tr br4 pa2" />
                    </div>
                    <p class="mt0 pl2">User 0{Math.round(Math.random()*1000)}</p>
                </div>
        )}
        </div>
      );
    }
  }
  

  export default Message;
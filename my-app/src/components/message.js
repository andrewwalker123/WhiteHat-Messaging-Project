import React, { Component } from 'react';

class Message extends Component {

  convertTime = () => {
    let date = new Date(this.props.messageInfo.timePosted);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    return `${hours} : ${minutes}`
  };

    render() {
      return (
        <div>
        {this.props.messageInfo.userName === this.props.myUserName ? (
                <div>
                    <div className="flex justify-end">
                        <p className="bg-blue w-60 white tr br4 pa3">{this.props.messageInfo.message}</p>
                    </div>
                  <div className="flex justify-end pr3">
                    <span className="tr mt0 pr2">{this.props.messageInfo.userName}</span><span>{this.convertTime()}</span>
                  </div>
                </div>
        ):(
                <div>
                    <div className="flex">
                        <p className="bg-light-gray w-60 br4 pa3">{this.props.messageInfo.message}</p>
                    </div>
                  <div className="flex pl3">
                    <span className="mt0 pr2">{this.props.messageInfo.userName}</span><span>{this.convertTime()}</span>
                  </div>
                </div>
        )}
        </div>
      );
    }
  }


  export default Message;

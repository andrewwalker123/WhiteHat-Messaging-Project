import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Body from '../components/Body'

export default class LoginPage extends Component {
    constructor() {
        super()
        this.state = {
            username: ''
        }
    }
    onChangeHandler = (event) => {
        this.setState({username: event.target.value})
    }
    render() {
        return (
            <div className="bg-washed-blue">
                 <Header headerTitle='Login'/>
                 <Body>
                    <p>Welcome to Sky Chat. Enter your name below and start chatting.</p>
                    <input type='text' value={this.state.username} onChange={this.onChangeHandler}></input>
                    <Link to={{pathname: `/channel`, username: this.state.username}}>
                      <button>Login</button>
                    </Link>
                  </Body>
            </div>
        );
    }
}
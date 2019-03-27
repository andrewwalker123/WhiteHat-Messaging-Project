import React, { Component } from 'react';
import ChannelList from './ChannelList'
import { Link } from 'react-router-dom'

export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: ''
        }
    }
    onChangeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }
    render() {
        return (
        <div className='bg-lightest-blue'>
                <p>Welcome to Sky Chat. Enter your name below and start chatting.</p>
                <input type='text' name='username' value={this.state.username} onChange={this.onChangeHandler}></input>
                <Link to={{pathname: `/channel`, username: this.state.username}}>
                    <button>Login</button>
                </Link>
        </div>
        );
    }
}
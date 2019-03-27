import React, { Component } from 'react';
import { Link } from 'react-router-dom'

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
    handleClick = () => {
        this.props.setUser(this.state.username)
    }
    
    render() {
        return (
        <div className='bg-lightest-blue'>
                <p>Welcome to Sky Chat. Enter your name below and start chatting.</p>
                <input type='text' value={this.state.username} onChange={this.onChangeHandler}></input>
                <Link to={{pathname: `/channel`}}>
                    <button onClick={this.handleClick}>Login</button>
                </Link>
        </div>
        );
    }
}
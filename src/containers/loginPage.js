import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Body from '../components/Body'
import login from '../css/login.css'

export default class LoginPage extends Component {
    constructor() {
        super()
        this.state = {
            username: ''
        }
    }
    onChangeHandler = (event) => {
        this.setState({username: event.target.value})

    };
    handleClick = () => {
        this.props.setUser(this.state.username)
    };


    render() {
        return (
            <div className="">
                 <Header headerTitle='Login'/>
                 <Body>
                     <div className='absolute-center flex flex-column justify-center tc bg-blue mw6 w-90 center pa4 br2 ba b--black-10'>
                       <p className='pa0 f5 white f4-ns mb3 black-80'>Welcome to Sky Chat. Enter your name below and start chatting.</p>

                       <div className='pv4'>
                         <input type='text' className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns" placeholder="Username" value={this.state.username} onChange={this.onChangeHandler}></input>
                         <Link to={{pathname: `/channel`}}>
                           <button className='f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns' onClick={this.handleClick}>Login</button>
                         </Link>
                       </div>
                    </div>
                  </Body>
            </div>
        );
    }
}

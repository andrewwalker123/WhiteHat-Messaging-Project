import React from 'react';
import header from '../css/header.css';
import { Link } from 'react-router-dom';
import home from '../assets/home.png';

const Header = (props) => {
    if (props.headerImage == null) {
    return (
        <header className="gradient white bg-blue w-100 sans-serif ma0 pa2 pl3 top-0 flex justify-center">
            <Link to={{pathname: `/channel`}} className='home-button white'><img src={home}/></Link>
            <h1 className='title-centered mr2'>{props.headerTitle}</h1>
        </header>
    )
    } else {
        return (
        <header className="white bg-blue w-100 sans-serif ma0 pa2 pl3 top-0 flex items-center">
            <Link to={{pathname: `/channel`}} className='home-button white'><img src={home}/></Link>
            <h1 className='mr2'>{props.headerTitle}</h1>
        </header>
    )
    }
};
export default Header;

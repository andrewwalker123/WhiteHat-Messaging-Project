import React from 'react';
import header from '../css/header.css';
import { Link } from 'react-router-dom'

const Header = (props) => {
    if (props.headerImage == null) {
    return (
        <header className="gradient white bg-blue w-100 sans-serif ma0 pa2 pl3 top-0 flex justify-center">
            <h1 className='mr2'>{props.headerTitle}</h1>
            <Link to={{pathname: `/channel`}} className='f5 no-underline ph3 pv2 mb2 dib tc br3 bn bg-animate bg-black-70 hover-bg-black white absolute right-0'>Home</Link>
        </header>
    )
    } else {
        return (
        <header className="white bg-blue w-100 sans-serif ma0 pa2 pl3 top-0 flex items-center">
            <h1 className='mr2'>{props.headerTitle}</h1>
            <img src={props.headerImage} height='36px'></img>
            <Link to={{pathname: `/channel`}} className='f5 no-underline ph3 pv2 mb2 dib tc br3 bn bg-animate bg-black-70 hover-bg-black white absolute right-0'>Home</Link>
        </header>
    )
    }
}
export default Header;

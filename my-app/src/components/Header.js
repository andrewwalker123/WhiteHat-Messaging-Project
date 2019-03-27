import React from 'react';

const Header = (props) => {
    if (props.headerImage == null) {
    return (
        <header className="white bg-blue w-100 sans-serif ma0 pa2 pl3 top-0 flex items-center">
            <h1 className='mr2'>{props.headerTitle}</h1>
        </header>
    )
    } else {
        return (
        <header className="white bg-blue w-100 sans-serif ma0 pa2 pl3 top-0 flex items-center">
            <h1 className='mr2'>{props.headerTitle}</h1>
            <img src={props.headerImage} height='36px'></img>
        </header>
    )
    }
}
export default Header;
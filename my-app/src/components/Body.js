import React from 'react';
import body from '../css/body.css';


const Body = (props) => {
    return (
        <div className="gradient-body sans-serif pb5 pl3 pr3 flex flex-column" style={{minHeight: '95vh'}}>
        {props.children}
        </div>
    )
};
export default Body;

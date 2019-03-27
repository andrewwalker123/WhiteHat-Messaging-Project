import React from 'react';

const Body = (props) => {
    return (
        <div className="sans-serif pt5 pb5 pl3 pr3 flex flex-column" style={{minHeight: '95vh'}}>
        {props.children}
        </div>
    )
}
export default Body;
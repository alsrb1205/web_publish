import React from 'react';

export default function Book({img,title}) {
    return (
        <div style={{width:200}}>
            <img src={img} alt=""  style={{width:200}}/>
            <div>{title}</div>
        </div>
    );
}


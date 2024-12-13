import React from 'react';

export default function Book2({img,title}) {
    return (
        <div>
            <img src={img} alt="" />
            <div>{title}</div>
        </div>
    );
}


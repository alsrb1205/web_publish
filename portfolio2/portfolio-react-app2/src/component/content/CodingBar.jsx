import React from 'react';

export default function CodingBar({title,per}) {
    return (
        <>
            <div className="bar__metadata"><span>{title}</span><span>{per}%</span></div>
            <div className="bar__bg">
                <div className="bar__value" style={{ "width": `${per}%` }}></div>
            </div>

        </>
    );
}


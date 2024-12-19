import React from 'react';

export default function AboutJob({ img, name, period }) {
    return (
        <li className="job">
            <img src={img} alt="google" />
            <div>
                <p className="job__name">{name}</p>
                <p className="job__period">{period}</p>
            </div>
        </li>

    );
}


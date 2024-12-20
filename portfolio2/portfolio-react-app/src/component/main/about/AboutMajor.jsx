import React from 'react';

export default function AboutMajor({icon,title,desc}) {
    return (
            <li className="major">
                <i className={icon}></i>
                <p className="major__title">{title}</p>
                <p>{desc}</p>
            </li>
    );
}

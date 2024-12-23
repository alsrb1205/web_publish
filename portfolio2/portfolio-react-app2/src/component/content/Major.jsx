import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faServer } from '@fortawesome/free-solid-svg-icons';

export default function Major({ title, subjects, icon }) {
    return (
        <>
            {icon ==='html' && <FontAwesomeIcon icon={faHtml5} className='major__icon' />}
            {icon ==='mobile' && <FontAwesomeIcon icon={faMobile} className='major__icon' />}
            {icon ==='server' && <FontAwesomeIcon icon={faServer} className='major__icon' />}
            <p className="major__title">{title}</p>
            <p>{subjects}</p>
        </>
    );
}


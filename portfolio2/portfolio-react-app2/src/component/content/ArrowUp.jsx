import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowUp} from '@fortawesome/free-solid-svg-icons'

export default function ArrowUp() {
    return (
        <aside>
            <a className="arrow--up" href="#"><FontAwesomeIcon icon={faArrowUp} /></a>
        </aside>
    );
}


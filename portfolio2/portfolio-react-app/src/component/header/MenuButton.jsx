import React from 'react';

export default function MenuButton({ toggleMenu ,ref}) {
    return (
        <button id="menu_toggle" className="header__toggle" aria-label="navigation menu toggle">
            <i className="fa-solid fa-bars" onClick={toggleMenu} ref={ref}></i>
        </button>
    );
}

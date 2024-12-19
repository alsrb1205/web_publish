import React from 'react';

export default function HeaderMenu({active,name,href}) {
    return (
        <>
            <a className={`header__menu__item ${active ? "active" : ""}`} href={href}>{name}</a>
        </>
    );
}


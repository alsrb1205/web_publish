import React from 'react';

export default function Menu({ name, href, selected, click }) {
    return (
        <a className={`header__menu__item ${selected === name ? "active" : ""}`} href={href} onClick={()=>click(name)}>
            {name}
        </a>
    );
}
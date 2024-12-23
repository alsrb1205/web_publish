import React from 'react';

export default function Menu({ name, href, selectedMenu, setSelectedMenu }) {
    const handleMenu = () => {
        setSelectedMenu(name);
    }
    return (
        <a className={`header__menu__item ${selectedMenu === name ? "active" : ""}`} href={href} onClick={handleMenu}>
            {name}
        </a>
    );
}
import React, { useState } from 'react';

export default function HeaderMenu({ name, href, selectedMenu, setSelectedMenu, setIsOpen}) {
    const handleMenu = () => {
        setSelectedMenu(name);
        setIsOpen(false);
    }
    return (
        <>
            <a 
            className={`header__menu__item ${selectedMenu === name ? "active" : ""}`} 
            href={href} 
            onClick={handleMenu}>{name}</a>
        </>
    );
}


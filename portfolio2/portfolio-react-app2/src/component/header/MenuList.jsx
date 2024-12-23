import React, { useState } from 'react';
import Menu from './Menu';
export default function MenuList({isOpen}) {
    const [ selectedMenu, setSelectedMenu] = useState(null);

    const list = [
        {
            "name": "Home",
            "href": "#home"
        },
        {
            "name": "About",
            "href": "#about"
        },
        {
            "name": "Skills",
            "href": "#skill"
        },
        {
            "name": "My Work",
            "href": "#work"
        },
        {
            "name": "Testimonial",
            "href": "#testimonial"
        },
        {
            "name": "Contact",
            "href": "#contact"
        }
    ]
    return (
        <nav>
            <ul className={`header__menu ${isOpen ? "open" : ""}`}>
                {list && list.map((menu) =>
                    <li>
                        <Menu name={menu.name} href={menu.href} selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu}/>
                    </li>
                )}
            </ul>
        </nav>
    );
}


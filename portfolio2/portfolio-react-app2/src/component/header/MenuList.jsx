import React, { useState } from 'react';
import Menu from './Menu';
export default function MenuList({isOpen}) {
    const [ selected, setSelected] = useState('Home');

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
    const handleMenu = (name) => {
        setSelected(name);
    }

    return (
        <nav>
            <ul className={`header__menu ${isOpen ? "open" : ""}`}>
                {list && list.map((menu) =>
                    <li>
                        <Menu name={menu.name} href={menu.href} selected={selected} setSelected={setSelected} click={handleMenu} style={menu.name===selected ?
                        'header__menu__item active' : 'header__menu__item'
                        }/>
                    </li>
                )}
            </ul>
        </nav>
    );
}


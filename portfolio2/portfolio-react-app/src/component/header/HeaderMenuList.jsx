import React from 'react';
import MenuButton from './MenuButton';
import HeaderMenu from './HeaderMenu';

export default function HeaderMenuList({list}) {
    return (
        <>
            <nav>
                <ul className="header__menu">
                    {list&&list.map((menu)=>
                        <li>
                            <HeaderMenu name={menu.name}
                                        active={menu.active}
                                        href={menu.href}/>
                        </li>
                    )}
                </ul>
            </nav>
            <MenuButton/>
        </>
    );
}


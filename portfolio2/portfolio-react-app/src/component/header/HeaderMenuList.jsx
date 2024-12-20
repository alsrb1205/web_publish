import React, { useState, useEffect, useRef } from 'react';
import MenuButton from './MenuButton';
import HeaderMenu from './HeaderMenu';

export default function HeaderMenuList({ list }) {
    const menuRef = useRef(null);
    const buttonRef = useRef(null);
    const [selectedMenu, setSelectedMenu] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    useEffect(() => {
        const handleResize = () => {
            const isNowMobile = window.innerWidth <= 768;
            setIsMobile(isNowMobile);

            // 모바일 화면이 아닌 경우 메뉴 닫기
            if (!isNowMobile && isOpen) {
                setIsOpen(false);
            }
        };

        // 리스너 등록
        window.addEventListener('resize', handleResize);

        // 컴포넌트 언마운트 시 리스너 제거
        return () => window.removeEventListener('resize', handleResize);
    }, [isOpen]);

    const toggleMenu = () => {
        if (isMobile) { setIsOpen((prevState) => !prevState); }
    }
    const ClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target) && buttonRef.current && !buttonRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    }
    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', ClickOutside)
        } else {
            document.removeEventListener('mousedown', ClickOutside)
        }
        return () => {
            document.removeEventListener('mousedown', ClickOutside)
        }
    }, [isOpen])

    return (
        <>
            <nav>
                <ul className={`header__menu ${isOpen ? 'open' : ''}`} ref={menuRef}>
                    {list && list.map((menu) =>
                        <li>
                            <HeaderMenu name={menu.name}
                                href={menu.href}
                                setSelectedMenu={setSelectedMenu}
                                selectedMenu={selectedMenu}
                                setIsOpen={setIsOpen}
                            />
                        </li>
                    )}
                </ul>
            </nav>
            <MenuButton toggleMenu={toggleMenu} ref={buttonRef} />
        </>
    );
}


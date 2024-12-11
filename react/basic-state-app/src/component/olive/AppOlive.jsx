import React, { useState } from 'react';
import MenuList from './header/MenuList.jsx';
import Header from './Header.jsx';
import Body from './Body.jsx';
import './Olive.css';
import ProductList from './body/ProductList.jsx';

export default function AppOlive() {
    const [cartList, setCartList] = useState([]);
    //배열에 id 저장 --> 배열의 길이 --> cartCount

    const handleCartApp = (id) => {
        setCartList([...cartList,id]);
    }    

    return (
        <>
            <Header>
                <img src="https://static.oliveyoung.co.kr/pc-static-root/image/comm/h1_logo.png" alt="" />
                <MenuList count={cartList.length} />
            </Header>
            <Body>
                <ProductList cart={handleCartApp} />
            </Body>
        </>
    );
}
import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiShoppingBag } from "react-icons/fi";
import { AuthContext } from '../auth/AuthContext.js';
import { CartContext } from '../context/CartContext.js';
import axios from 'axios';

export default function Header() {
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
    const { cartList, setCartList, cartCount, setCartCount } = useContext(CartContext);
    const navigate = useNavigate();
    // 로그인 상태에 따라 cartCount 값 변경
    useEffect(() => {
        if (isLoggedIn) {
            // DB연동 로그인 id --> 갯수가져옴
            const id = localStorage.getItem("user_id");
            axios.post("http://localhost:9000/cart/count", { "id": id })
                .then(res => {
                    setCartCount(res.data.count);
                })
                .catch(err => console.log(err));

            axios.post("http://localhost:9000/cart/items", { "id": id })
                .then(res => {
                    setCartList(res.data);
                })
                .catch(err => console.log(err))
    
        } else {
            setCartCount(0);
        }
    }, [isLoggedIn])
    console.log('header-list',cartList);
    console.log('header-count',cartCount);
    
    const handleLoginToggle = () => {
        if (isLoggedIn) {
            const select = window.confirm("정말로 로그아웃 하시겠습니까?");
            if (select) {
                alert('로그아웃 되었습니다.');
                localStorage.removeItem('token');
                localStorage.removeItem('user_id');
                setIsLoggedIn(false);
                navigate('/');
            }
        } else {
            navigate('/login')
        }
    }

    return (
        <div className='header-outer'>
            <div className='header'>
                <Link to='/' className='header-left'>
                    <FiShoppingBag />
                    <span>Shoppy</span>
                </Link>
                <nav className='header-right'>
                    <Link to='/all'>Products</Link>
                    <Link to='/cart'>Mycart({cartCount})</Link>
                    <button type='button' onClick={handleLoginToggle}>
                        {isLoggedIn ? "Logout" : "Login"}
                    </button>
                    <Link to='/signup'>
                        <button type='button'>Signup</button>
                    </Link>
                    {
                        isLoggedIn &&
                        <Link to='/products/new'>
                            <button type='button'>New Product</button>
                        </Link>
                    }
                </nav>
            </div>
        </div>
    );
}


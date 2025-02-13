import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Carts from './pages/Carts.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import './styles/shoppy.css';
import DetailProduct from './pages/DetailProduct.jsx';
import NewProduct from './pages/NewProduct.jsx';
import { useEffect, useState } from 'react';
import { AuthProvider } from './auth/AuthContext.js';

export default function App() {
    // 장바구니 리스트 : 배열
    const [cartList, setCartList] = useState(() => {
        try {
            const initCartList = localStorage.getItem("cartItems")
            return initCartList ? JSON.parse(initCartList) : [];
        } catch (error) {
            console.log('로컬스토리지 데이터 작업도중 에러발생');
            console.log(error);
        }
    });  

    const [cartCount, setCartCount] = useState(() => {
        try {
            const initCartList = localStorage.getItem("cartItems")
            return initCartList ? JSON.parse(initCartList).length : 0;
        } catch (error) {
            console.log('로컬스토리지 데이터 작업도중 에러발생');
            console.log(error);

        }
    }); // 장바구니 상품 갯수

    // cartCount 가 업데이트 되면 localStorage에 cartList 를 저장
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartList));
    }, [cartList])

    /**장바구니 추가 */
    const addCart = (cartItem) => {
        // 입력받은 cartItem이 cartList에 존재하면 qty+1, 존재하지않으면 새로 추가
        // const updateCartList = cartList.some(checkItem => checkItem.pid === cartItem.pid && checkItem.size === cartItem.size)
        //   ? cartList.map(item =>
        //     item.pid === cartItem.pid && item.size === cartItem.size
        //       ? { ...item, qty: item.qty + 1 }// item의 qty + 1
        //       : item
        //   )
        //   : [...cartList, cartItem];
        const isCheck = cartList.some(checkItem => checkItem.pid === cartItem.pid
            && checkItem.size === cartItem.size); 

        let updateCartList = [];
        if (isCheck) {
            updateCartList = cartList.map(item =>
                item.pid == cartItem.pid && item.size === cartItem.size
                    ? { ...item, qty: item.qty + 1 } 
                    : item
            )
        } else {
            updateCartList = [...cartList, cartItem];
            setCartCount(cartCount + 1);
        }
        // const sortUpdateCartList = updateCartList.sort((a, b) => a.pid - b.pid)

        setCartList(updateCartList);
    }

    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout cartCount={cartCount} />}>
                        <Route index element={<Home />} />
                        <Route path='/all' element={<Products />} />
                        <Route path='/cart' element={<Carts />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/signup' element={<Signup />} />
                        <Route path='/products/:pid' element={<DetailProduct addCart={addCart} />} /> {/* DetailProduct.jsx 에서 정보를 전달 */}
                        <Route path='/products/new' element={<NewProduct />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

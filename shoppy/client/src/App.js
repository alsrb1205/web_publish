import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Carts from './pages/Carts.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import './styles/shoppy.css';
import DetailProduct from './pages/DetailProduct.jsx';
import { useState } from 'react';

export default function App() {
  const [cartList, setCartList] = useState([]);  // 장바구니 리스트 : 배열
  const [cartCount, setCartCount] = useState(0); // 장바구니 상품 갯수

  const addCart = (cartItem) => {
    setCartList([...cartList, cartItem]);
    setCartCount(cartCount+1);
  }  
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout cartCount={cartCount} />}>
          <Route index element={<Home />} />
          <Route path='/all' element={<Products />} />
          <Route path='/cart' element={<Carts cartList={cartList}/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/products/:pid' element={<DetailProduct addCart={addCart} />} /> {/* DetailProduct.jsx 에서 정보를 전달 */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


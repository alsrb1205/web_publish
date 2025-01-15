import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import Carts from './pages/Carts';
import Login from './pages/Login';
import Signup from './pages/Signup';
import './styles/shoppy.css';
import DetailProduct from './pages/DetailProduct';
import { useState } from 'react';

export default function App() {
  const [cartList,setCartList] = useState([]);
  const [cartCount,setCartCount] = useState(0);

  const addCart =(cartItem)=>{
    setCartList([...cartList,cartItem])
    setCartCount(cartCount+1);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout cartCount={cartCount}/>}>
          <Route index element={<Home />} />
          <Route path='/all' element={<Products />} />
          <Route path='/cart' element={<Carts cartList={cartList}/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/products/:pid' element={<DetailProduct addCart={addCart}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
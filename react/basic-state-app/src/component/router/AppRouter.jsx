import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Layout from './Layout';
import Support from './Support';
import SignUp2 from '../form/SignUp2'
import CgvLoginForm from '../form/CgvLoginForm'
import AppBestSeller from '../yes24/AppBestSeller'
export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='/login' element={<CgvLoginForm/>} />
                    <Route path='/signup' element={<SignUp2/>} />
                    <Route path='/about' element={<About />} />
                    <Route path='/support' element={<Support />} />
                    <Route path='/bestSeller' element={<AppBestSeller />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../router2/Layout';
import AppAirbnb from '../airbnb/AppAirbnb'
import AppAladin from '../aladin/AppAladin'
import Yes24 from '../yes24/AppBestSeller'
import Olive from '../olive/AppOlive'
import Avatar from '../avatar/AppAvatar'
import Counter from '../counter/AppCounter'
export default function AppRouter2() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route>
                        <Route path='/' element={<Layout/>}> {/** layout 관련 컴포넌트 */}
                            <Route index element={<Home/>} />
                            <Route path='/airbnb' element={<AppAirbnb/>} />
                            <Route path='/aladin' element={<AppAladin/>} />
                            <Route path='/yes24' element={<Yes24/>} />
                            <Route path='/Olive' element={<Olive/>} />
                            <Route path='/Avatar' element={<Avatar/>} />
                            <Route path='/Counter' element={<Counter/>} />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

function Home() {
    return (
        <h1>Home</h1>
    );
}
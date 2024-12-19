import React from 'react';
import { Outlet,Link } from 'react-router-dom';
import Header from './Header';
export default function Layout() {
    return (
        <div>
            <Header>
                <Link to="/" style={{'padding':'20px'}}>Home</Link>
                <Link to="/login" style={{'padding':'20px'}}>Login</Link>
                <Link to="/signup" style={{'padding':'20px'}}>SignUp</Link>
                <Link to="/about" style={{'padding':'20px'}}>About</Link>
                <Link to="/support" style={{'padding':'20px'}}>Support</Link>
                <Link to="/bestseller" style={{'padding':'20px'}}>Bestseller</Link>
            </Header>
            <Outlet/>
            {/* <Footer></Footer> */}
        </div>
    );
}


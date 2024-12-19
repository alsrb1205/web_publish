import React from 'react';
import { Outlet,Link } from 'react-router-dom';
import Header from './Header';

export default function Layout() {
    return (
        <div>
            <Header>
                <Link to="/" style={{'padding':'10px'}}>Home</Link>
                <Link to="/airbnb" style={{'padding':'10px'}}>Airbnb</Link>
                <Link to="/aladin" style={{'padding':'10px'}}>Aladin</Link>
                <Link to="/yes24" style={{'padding':'10px'}}>Yes24</Link>
                <Link to="/Olive" style={{'padding':'10px'}}>Olive</Link>
                <Link to="/Avatar" style={{'padding':'10px'}}>Avatar</Link>
                <Link to="/Counter" style={{'padding':'10px'}}>Counter</Link>
            </Header>
            <Outlet/>
            {/* <Footer>
                <div style={{}}>Footer</div>
            </Footer> */}
        </div>
    );
}


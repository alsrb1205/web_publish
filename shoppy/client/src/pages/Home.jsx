import React from 'react';
import ProductList from '../components/ProductList';

export default function Home() {
    return (
        <div className='content'>
            <div className='banner'>
                <h3>Shop with Us</h3>
                <p>Best Products, High Quality</p>
            </div>
            <ProductList />
        </div>
    );
}


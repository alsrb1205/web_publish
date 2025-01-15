import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductAvatar from './ProductAvatar';
import {Link} from 'react-router-dom';

export default function ProductList() {
    const [list, setList] = useState([]);
    useEffect(()=>{
        axios.get('data/products.json')
        .then(res => setList(res.data))
        .catch(error => console.log(error))
    }, [])

    const rows = [];
    for (let i = 0; i < list.length; i+=3) {
        rows.push(list.slice(i,i+3))
    }

    return (
        <div>
            {
                rows.map((rowsArray)=>
                <div className='product-list'>
                    {rowsArray.map((item)=>
                    <Link key={item.pid} to={`/products/${item.pid}`}>
                        <ProductAvatar img={item.image}/>
                    </Link>
                    )}
                </div>
                )
            }
        </div>
    );
}


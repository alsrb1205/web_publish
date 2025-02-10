import React, { useEffect, useState } from 'react';
import ProductAvatar from './ProductAvatar';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ProductList() {
    const [list, setList] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:9000/product/all')
        .then(res=>{setList(res.data)
            
        }
        )
        .catch(err=>console.log(err))
    }, []);

    // 출력 리스트 생성 [[{},{},{}],[{},{},{}],[{}]]
    const rows = [];
    for (let i = 0; i < list.length; i += 3) {
        rows.push(list.slice(i, i + 3))
    };
    
    return (
        <div>
            {
                rows.map((rowArray) =>
                    <div className='product-list'>
                        {rowArray.map((item) =>
                            <Link key={item.pid} to={`/products/${item.pid}`}>
                                <ProductAvatar img={`${item.image}`} />
                            </Link>
                        )}
                    </div>
                )
            }
        </div>
    );
}


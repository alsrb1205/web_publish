import React, { useEffect, useState } from 'react';
import ProductAvatar from './ProductAvatar';
import axios from 'axios';

export default function ProductList() {
    const [list, setList] = useState([]);
    useEffect(() => {
        axios.get('/data/products.json')
            .then((res)=>setList(res.data))
            .catch((error)=>{console.log(error)});
        // fetch('/data/products.json')
        //     .then(data => data.json())
        //     .then(jsonData => {
        //         setList(jsonData) //jsonData를 전역변수화
        //     })
        //     .catch(error => console.log(error));
    }, [])

    // 출력 리스트 생성 [[{},{},{}],[{},{},{}],[{}]]
    const rows = [];
    for (let i = 0; i < list.length; i += 3) {
        rows.push(list.slice(i, i + 3))
    }

    return (
        <div>
            {
                rows.map((rowArray) => 
                    <div className='product-list'>
                        {rowArray.map((item) =>
                            <ProductAvatar img={item.image} />
                        )
                        }
                    </div>
                )
            }
        </div>
    );
}


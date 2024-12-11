import { useEffect, useState } from 'react';
import Product from './Product';

export default function ProductList({cart}) {
    const [productList, setProductList] = useState([]);
    useEffect(() => {
        fetch("/data/olive.json")
            .then(result => result.json())
            .then(jsonData => setProductList(jsonData.productList))
            .catch(error => console.log(error));
    }, []);
    const totalCart = (id) => {
        cart(id); // AppOlive의 handleCartApp 함수 호출
    }

    return (
        <ul className='product-list-container'>
            {productList && productList.map((item) =>
                <li><Product
                id={item.id}
                        totalCart = {totalCart}
                        src={item.src}
                        brand={item.brand}
                        name={item.name}
                        price1={item.price1}
                        price2={item.price2}
                        isSale={item.isSale}
                        isCoupon={item.isCoupon}
                        isToday={item.isToday}
                /></li>
            )}
        </ul>
    );
}


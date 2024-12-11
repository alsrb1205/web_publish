import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export default function Product({ id,src, brand, name, price1, price2, isSale, isCoupon, isToday,totalCart }) {
    const handleCart=()=>{        
        totalCart(id);  //ProductList 컴포넌트 함수 호출
    }
    return (
        <div className='product-container'>
            <div>
                <img src={src} alt="" />
                <FontAwesomeIcon icon={faCartShopping} onClick={handleCart} className='cart'/>
            </div>
            <div>
                <p className='title'>{brand}</p>
                <div className='description'>{name}</div>
                <div className='price'>
                    <span className='sprice'>{price1}</span>
                    <span className='fprice'>{price2}</span>
                </div>
                <div className='tags'>
                    {isSale && <span className='t1'>세일</span>}
                    {isCoupon && <span className='t2'>쿠폰</span>}
                    {isToday && <span className='t3'>오늘드림</span>}

                </div>
            </div>
        </div>
    );
}


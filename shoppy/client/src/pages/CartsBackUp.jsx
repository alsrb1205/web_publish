import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../auth/AuthContext.js';
import { useNavigate } from 'react-router-dom';

export default function Carts({ refreshStorage }) {
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const [cartList, setCartList] = useState([]);

    useEffect(() => {
        if (isLoggedIn) {
            // DB - shoppy_cart 에서 정보
            const id = localStorage.getItem('user_id');
            console.log('DB')
            axios.post('http://localhost:9000/cart/items', { "id": id })
                .then(res => setCartList(res.data))
                .catch(err => console.log(err))
        } else {
            // localStorage > 주문하기 : 로그인  
            console.log('localStorage');
            addCartList();
        }
    }, [isLoggedIn]);

    /** 로컬스토리지 데이터 --> cartList 추가 */
    const addCartList = () => {
        const items = JSON.parse(localStorage.getItem("cartItems"));
        setTimeout(() => {
            setCartList(items);
        }, 10);
    }
    console.log(cartList);
    
    return (
        <div>
            <h1>Mycart</h1>
            <button>주문하기</button>
            <table border={1}>
                <tr>
                    <th>pid</th>
                    <th>pname</th>
                    <th>size</th>
                    <th>qty</th>
                    <th>description</th>
                    <th>image</th>
                    {
                        isLoggedIn &&
                            <th>배송지 주소</th>
                    }
                </tr>
                {
                    cartList && cartList.map((item, i) =>
                        <tr>
                            <td>{item.pid}</td>
                            <td>{item.pname}</td>
                            <td>{item.size}</td>
                            <td>{item.qty}</td>
                            <td>{item.info}</td>
                            <td>
                                <img src={item.image} alt="" style={{ width: '100px' }} />
                            </td>
                            {isLoggedIn && <td>{item.zipcode}/{item.address}</td>}
                            {/* <td>
                                <button onClick={() => handleOrder("each", item.pid, item.size)}>계속담아두기</button>
                            </td> */}
                        </tr>
                    )
                }
            </table>
        </div>
    );
}


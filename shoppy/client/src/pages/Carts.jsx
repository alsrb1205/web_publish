import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../auth/AuthContext.js';
import { useNavigate } from 'react-router-dom';

export default function Carts() {
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();
    // localStorage에 담긴 cartItems 배열 객체 출력
    const [cartList, setCartList] = useState(() => {
        try {
            const initCartList = localStorage.getItem("cartItems")
            return initCartList ? JSON.parse(initCartList) : [];
        } catch (error) {
            console.log('로컬스토리지 데이터 작업도중 에러발생');
            console.log(error);
        }
    });
    // pids 배열 생성 cartItems의 pid 값을 pids 배열에 추가
    const pids = cartList && cartList.map((item) => item.pid);
    // axios 이용하여 DB연동
    useEffect(() => {
        if (pids.length > 0) {
            axios.post("http://localhost:9000/product/cartItems", { "pids": pids })
                .then(res => {
                    // cartItems에 res.data 정보 추가
                    const updateCartItems = cartList.map((item) => {
                        const matchItems = res.data.find(data => data.pid === item.pid);
                        return matchItems
                            ? {
                                ...item,
                                "pname": matchItems.pname,
                                'price': matchItems.price,
                                'description': matchItems.description,
                                'image': matchItems.image
                            }
                            : item
                    }
                    );
                    setCartList(updateCartItems);
                })
                .catch(err => console.log(err));
        }
    }, [])
    /** 주문하기 이벤트 처리 */
    const handleOrder = () => {
        // 1. 로그인 여부 체크
        if (isLoggedIn) {
            // 로그인O -> DB 연동 후 저장
            const id = localStorage.getItem('user_id');
            const formData = { "id": id, "cartList": cartList };
            axios.post("http://localhost:9000/cart/add", formData)
                .then(res => {
                    if (res.data.result_rows) {
                        alert('장바구니 db추가');
                        localStorage.removeItem("cartItems")
                    }
                }
                )
                .catch(err => console.log(err))
        } else {
            // 로그인X -> 로그인 > DB 연동 후 저장
            window.confirm("로그인이 필요한 서비스입니다") && navigate('/login');
        }
    }
    const handleOrderOne = (e) => {        
        const id = localStorage.getItem('user_id');
        const formData= {"id":id, "item":e}
        axios.post("http://localhost:9000/cart/addone", formData)
        .then(res=>            
            {
                if (res.data.result_rows===1) {
                    alert('추가됨');
            }
        }
        )
        .catch(err=>console.log(err))
    }
    
    return (
        <div>
            <h1>Mycart</h1>
            <button onClick={handleOrder}>주문하기</button>
            <table border={1}>
                <tr>
                    <th>pid</th>
                    <th>pname</th>
                    <th>size</th>
                    <th>qty</th>
                    <th>description</th>
                    <th>image</th>
                    <th> </th>
                </tr>
                {
                    cartList && cartList.map((item, i) =>
                        <tr>
                            <td>{item.pid}</td>
                            <td>{item.pname}</td>
                            <td>{item.size}</td>
                            <td>{item.qty}</td>
                            <td>{item.description}</td>
                            <td>
                                <img src={item.image} alt="" style={{ width: '100px' }} />
                            </td>
                            <td>
                                <button onClick={()=>handleOrderOne(cartList[i])}>계속담아두기</button>
                            </td>
                        </tr>
                    )
                }
            </table>
        </div>
    );
}


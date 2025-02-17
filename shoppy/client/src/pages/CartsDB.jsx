import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../auth/AuthContext.js';
import { useNavigate } from 'react-router-dom';

export default function Carts({ refreshStorage, cartList, setCartList }) {
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();
    // localStorage에 담긴 cartItems 배열 객체 출력
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
    const handleOrder = (type, pid, size) => {
        const id = localStorage.getItem('user_id');
        let formData = [];
        if (type === 'all') {
            formData = { "id": id, "cartList": cartList };
        } else {
            const filterItem = cartList.filter(item => item.pid === pid && item.size === size)
            formData = { "id": id, "cartList": filterItem };
        }
        // 1. 로그인 여부 체크
        if (isLoggedIn) {
            // 로그인O -> DB 연동 후 저장
            axios.post("http://localhost:9000/cart/add", formData)
                .then(res => {
                    if (res.data.result_rows) {
                        alert('장바구니 db추가');
                        if (type === 'all') {
                            // 로컬스토리지 전체아이템 삭제
                            clearStorageAll();
                            // App.js의 cartList,cartCount 초기화
                            refreshStorage([], 0);
                        } else {
                            // 로컬스토리지 개별아이템 삭제
                            const updateCart = clearStorageEach(pid, size);
                            refreshStorage(updateCart, updateCart.length);
                        }
                    }
                }
                )
                .catch(err => console.log(err))
        } else {
            // 로그인X -> 로그인 > DB 연동 후 저장
            window.confirm("로그인이 필요한 서비스입니다 로그인 하시겠습니까?") && navigate('/login');
        }
    }
    // 로컬스토리지 전체아이템 삭제
    const clearStorageAll = () => {
        console.log('------------로컬스토리지 전체 삭제 시작--------------------');
        localStorage.removeItem("cartItems"); // 비동기
        navigate('/cartdb');
        setTimeout(() => { // setTimeout 으로 비동기처리
            setCartList([]);
        }, 0);
        console.log('------------로컬스토리지 전체 삭제 종료--------------------');
    }
    // 로컬스토리지 개별아이템 삭제
    const clearStorageEach = (pid, size) => {
        const updateCart = cartList.filter((item) => !(item.pid === pid && item.size === size));
        localStorage.removeItem("cartItems");
        localStorage.setItem("cartItems", updateCart);
        setTimeout(() => {
            setCartList(updateCart);
        }, 0);
        return updateCart;
    };

    return (
        <div>
            <h1>Mycart backup</h1>
            <button onClick={() => handleOrder("all")}>주문하기</button>
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
                                <button onClick={() => handleOrder("each", item.pid, item.size)}>계속담아두기</button>
                            </td>
                        </tr>
                    )
                }
            </table>
        </div>
    );
}


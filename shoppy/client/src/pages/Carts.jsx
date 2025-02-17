import React, { useContext, useEffect } from "react";
import "../styles/cart.css";
import { AuthContext } from "../auth/AuthContext";
import { CartContext } from "../context/CartContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Carts() {
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
    const { cartList, setCartList, cartCount, setCartCount } = useContext(CartContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) {
            // 테이블의 로그인 아이디의 카트 리스트 가져오기
            const id = localStorage.getItem("user_id");
            axios.post("http://localhost:9000/cart/items", { "id": id })
                .then(res => {
                    setCartList(res.data);
                })
                .catch(err => console.log(err))

        } else {
            const select = window.confirm("로그인이 필요한 서비스입니다. 로그인 하시겠습니까?");
            if (select) {
                navigate('/login');
            }
        }
    }, [])

    return (
        <div className="cart-container">
            <h2 className="cart-header"> 장바구니</h2>
            {
                cartList && cartList.map((item)=>
                    <>
                <div className="cart-item" >
                    <img src={item.image} alt="" />
                    <div className="cart-item-details">
                        <p className="cart-item-title">{item.pname}</p>
                        <p className="cart-item-title">{item.size}</p>
                        <p className="cart-item-price">
                            {item.price}원
                        </p>
                    </div>
                    <div className="cart-quantity">
                        <button >
                            -
                        </button>
                        <input type="text" value={item.qty} readOnly />
                        <button >
                            +
                        </button>
                    </div>
                    <button
                        className="cart-remove"
                    >
                        🗑
                    </button>
                </div>
                <div className="cart-actions">
                    <button>주문하기</button>
                </div>

            </>
                )
            }



        </div>
    );
}

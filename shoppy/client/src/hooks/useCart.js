import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import axios from "axios";

export function useCart() {
    const { cartList, setCartList, cartCount, setCartCount, totalPrice, setTotalPrice } = useContext(CartContext);

    // 함수 생성 - 비동기 로직 & useContext가 관리하는 변수는 await async를 통해 순서 보장!!!
    /**
     * 장바구니 전체 리스트 조회
     */
    const getCartList = async () => {
        const id = localStorage.getItem("user_id");
        const result = await axios.post("http://localhost:9000/cart/items", { "id": id })
        setCartList(result.data);
        setCartCount(result.data.length);
        calculateTotalPrice(result.data);
    }

    /**
     * 장바구니 카운트 조회
     */
    const getCount = async () => {
        const id = localStorage.getItem("user_id");
        const result = await axios.post("http://localhost:9000/cart/count", { "id": id })

        setCartCount(result.data.count);
    }

    /**
     * 장바구니 카운트 초기화
     */
    const setCount = (value) => {
        setCartCount(value);
    }

    /**
     * 장바구니 새로운 아이템 저장
     */
    const saveToCartList = async (formData) => {
        const result = await axios.post("http://localhost:9000/cart/add", formData);
        // DB 연동 --> cartList 가져와야함
        if (result.data.result_rows) {
            setCartCount(cartCount + 1);
            getCartList();
        }

        return result.data.result_rows;
    }

    /**
     * 장바구니 아이템 수량 업데이트
     */
    const updateCartList = async (cid, type) => {
        const result = await axios.put("http://localhost:9000/cart/updateQty", { "cid": cid, "type": type });
        result.data.result_rows && getCartList();

        return result.data.result_rows;
    }

    /**
     * 장바구니 항목 삭제
    */
    const deleteCartItem = async (cid) => {
        const select = window.confirm('해당 상품을 삭제하시겠습니까?')
        if (select) {
            try {
                await axios.delete("http://localhost:9000/cart/delete", { data: { "cid": cid } });
                getCartList();

            } catch (error) {
                console.error("에러발생", error);
            }

        }
    }
    /** gpt코드 ===> 오류처리 로직 추가 */
    // const deleteCartItem = async (cid) => {
    //     const select = window.confirm('해당 상품을 삭제하시겠습니까?');
    //     if (select) {
    //         try {
    //             const result = await axios.delete("http://localhost:9000/cart/delete", { 
    //                 data: { cid: cid } 
    //             });
    //             console.log(result.data); // 실제 응답 확인

    //             // 만약 서버에서 affectedRows를 반환한다면
    //             if (result.data.affectedRows && result.data.affectedRows > 0) {
    //                 getCartList();
    //             } else {
    //                 alert("삭제가 정상적으로 처리되지 않았습니다.");
    //             }
    //         } catch (error) {
    //             console.error("삭제 요청 중 에러 발생:", error);
    //             alert("삭제 요청 중 에러가 발생하였습니다. 다시 시도해주세요.");
    //         }
    //     }
    // };

    /**
     * 장바구니 총 주문금액 계산하기 - getCartList에서 호출하기때문에 return 안해도됨
     */
    const calculateTotalPrice = (cartList) => {
        const totalPrice = cartList.reduce((sum, item) => sum + item.price * item.qty, 0);
        setTotalPrice(totalPrice);
    }


    return { saveToCartList, updateCartList, getCartList, getCount, setCount, deleteCartItem, calculateTotalPrice };
}

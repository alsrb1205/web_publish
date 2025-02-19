import React, { useContext } from 'react';
import { OrderContext } from '../context/OrderContext';
import axios from 'axios';
import { useCart } from './useCart';

export function useOrder() {
    const { setOrderList, setMember } = useContext(OrderContext);
    const { calculateTotalPrice } = useCart();
    /** useContext로 관리되는 객체들의 CRUD 함수 정의 */

    /**
     * 전체 주문정보 가져오기 : getOrderList
     */
    const getOrderList = async () => {
        const id = localStorage.getItem("user_id");
        const result = await axios.post("http://localhost:9000/order/all", { "id": id });
        setOrderList(result.data);
        setMember(result.data[0]);        // 사용자 정보만 가져오면 되기때문에 0번지에서만 가져온다
        calculateTotalPrice(result.data); // useCart 훅에서 가져온 함수 totalprice는 cartContext에 저장
    }

    return { getOrderList };
}


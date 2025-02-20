import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useOrder } from '../hooks/useOrder';

export default function PaymentSuccess() {
    const { getOrderList, saveToOrder } = useOrder();
    const [searchParams] = useSearchParams();
    //useSearchParams : URL의 쿼리 스트링(search parameters)을 읽고 수정할 수 있게 해준다
    const pg_token = searchParams.get("pg_token");
    const [isRun, setIsRun] = useState(false);

    // token, tid 가 존재하면 shoppy_order 테이블에 주문내역을 insert, shoppy_cart는 delete
    // oid(pk), pid, id, odate, total_price, tid, type, size, qty 등...
    useEffect(() => {
        const tid = localStorage.getItem("tid");
        tid && setIsRun(true);

        const fetchOrderList = async () => {
            const orderList = await getOrderList();
            if (orderList.length > 0) {

                const totalPrice = orderList.reduce((sum, item) => sum + item.price * item.qty, 0);
                if (pg_token && tid) {
                    saveToOrder(orderList, totalPrice, tid, "kakaopay");
                }
            }
        }
        if (isRun) { fetchOrderList(); }
    }, [isRun])

    return (
        <div>
            {
                pg_token && <h2>결제완료</h2>
            }
        </div>
    );
}


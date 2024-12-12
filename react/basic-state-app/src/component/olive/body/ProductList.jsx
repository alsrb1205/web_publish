import { useEffect, useState } from 'react';
import Product from './Product';

export default function ProductList({ cart }) {
    const [productList, setProductList] = useState([]); //전체 상품 리스트
    const [list, setList] = useState([]); //출력용 리스트
    useEffect(() => {
        fetch("/data/olive.json")
            .then(result => result.json())
            .then(jsonData => {
                setProductList(jsonData.productList);
                setList(jsonData.productList);
            })
            .catch(error => console.log(error));
    }, []);
    const totalCart = (id) => {
        cart(id); // AppOlive의 handleCartApp 함수 호출
    }

    const [type, setType] = useState('total');

    const handleTypeChange = (event) => {
        setType(event.target.value);
    }

    useEffect(() => { // productList 필터링 하는 용도 filter() 는 배열로 반환
        if (type === "total") {
            setList(productList);
        } else {
            const list = productList.filter((item) => {
                if (type === "sale" && item.isSale) {
                    return item;
                } else if (type === "coupon" && item.isCoupon) {
                    return item;
                } else if (type === "today" && item.isToday) {
                    return item;
                }
            })
            setList(list);
        };
    }, [type]);

    return (
        <>
            <div>
                <input type="radio" name="type" id="" value="total" onClick={handleTypeChange} />전체
                <input type="radio" name="type" id="" value="sale" onClick={handleTypeChange} />세일
                <input type="radio" name="type" id="" value="coupon" onClick={handleTypeChange} />쿠폰
                <input type="radio" name="type" id="" value="today" onClick={handleTypeChange} />오늘드림
                {/* input 타입은 자동으로 함수에 이벤트를 전달한다 */}
            </div>
            <ul className='product-list-container'>
                {list && list.map((item) =>
                    <li><Product
                        id={item.id}
                        totalCart={totalCart}
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
        </>
    );
}
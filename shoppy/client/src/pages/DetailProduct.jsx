import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PiGiftThin } from "react-icons/pi";
import axios from "axios";
import QnA from "../components/QnA/QnA";
import DetailMenu from "../components/QnA/DetailMenu";
import Review from "../components/review/Review";
import Detail from "../components/detail-tap/Detail";
import Delivery from "../components/delivery/Delivery";

export default function DetailProduct({ addCart }) {
  const { pid } = useParams();
  const [product, setProduct] = useState({});
  const [size, setSize] = useState("XS");
  // tab state 추가
  const [activeTab, setActiveTab] = useState('detail');


  useEffect(() => {
    axios
      .get("/data/products.json") // http://localhost:3000/data/products.json
      .then((res) => {
        res.data.filter((product) => {
          if (product.pid === pid) setProduct(product);
        });
      })
      .catch((error) => console.log(error));
  }, [pid]);

  useEffect(() => {
    axios.get('/data/qna.json')
      .then((res) => {
        // pid에 맞는 QnA 찾기
      const qnaData = res.data.find(d => d.pid === parseInt(pid));
       setTotalItemCount(qnaData ? qnaData.qnalist.length : 0);
      })
      .catch((error) => {
        console.error(error);
        setTotalItemCount(0); 
      })
   }, [pid]);


  //장바구니 추가 버튼 이벤트
  const addCartItem = () => {
    //장바구니 추가 항목 : { pid, size, count, price }
    // alert(`${pid} --> 장바구니 추가 완료!`);
    // console.log(product.pid, product.price, size, 1);
    const cartItem = {
      pid: product.pid,
      size: size,
      qty: 1,
      price: product.price,
    };
    addCart(cartItem); // App.js의 addCart 함수 호출
  };

   // 1) QnAList에서 구한 총 아이템 수를 저장할 state
   const [totalItemCount, setTotalItemCount] = useState(0);

   // 2) QnA로 콜백을 내려줄 함수
   //    QnA -> QnAList에서 totalItemCount를 구하면 이 함수를 통해 숫자를 올려보낼 것임
   const handleTotalItemCount = (count) => {
     setTotalItemCount(count);
   };

  return (
    <div className="content">
      <div className="product-detail-top">
        <div className="product-detail-image-top">
          <img src={product.image} />
          <ul className="product-detail-image-top-list">
            <li>
              <img src={product.image} alt="" />
            </li>
            <li>
              <img src={product.image} alt="" />
            </li>
            <li>
              <img src={product.image} alt="" />
            </li>
          </ul>
        </div>

        <ul className="product-detail-info-top">
          <li className="product-detail-title">{product.name}</li>
          <li className="product-detail-title">{`${parseInt(
            product.price
          ).toLocaleString()}원`}</li>
          <li className="product-detail-subtitle">{product.info}</li>
          <li>
            <p className="product-detail-box">신규회원, 무이자 할부 등</p>
          </li>
          <li className="flex">
            <label className="product-detail-label">사이즈 </label>
            <select
              className="product-detail-select2"
              onChange={(e) => setSize(e.target.value)}
            >
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </li>
          <li className="flex">
            <button type="button" className="product-detail-button order">
              바로 구매
            </button>
            <button
              type="button"
              className="product-detail-button cart"
              onClick={addCartItem}
            >
              쇼핑백 담기
            </button>
            <div type="button" className="gift">
              <PiGiftThin />
              <div className="gift-span">선물하기</div>
            </div>
          </li>
          <li>
            <ul className="product-detail-summary-info">
              <li>상품 요약 정보</li>
            </ul>
          </li>
        </ul>
      </div>

      {/* DETAIL / REVIEW / Q&A / RETURN & DELIVERY  */}
      <div className="product-detail-tab">
        <DetailMenu activeTab={activeTab} setActiveTab={setActiveTab} totalItemCount={totalItemCount}/>
        <div>
          {activeTab === 'detail' && <Detail selectedPid={pid} product={product} />}
          {activeTab === 'review' && <Review />}
          {activeTab === 'qna' && <QnA onTotalItemCount={handleTotalItemCount}/>}
          {activeTab === 'delivery' && <Delivery />}
        </div>

      </div>
    </div>
  );
}

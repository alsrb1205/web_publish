import React, { useEffect, useState } from "react";
import axios from "axios";
import DetailItem from "./DetailItem.jsx";

export default function Detail({ selectedPid, product }) {
  const [detailImgList, setDetailImgList] = useState([]);
  const [detailDesList, setDetailDesList] = useState([]);
  const [detailInfoList, setDetailInfoList] = useState([]);

  useEffect(() => {
    /* 이미지 리스트 */
    axios
      .get("/data/product_detail.json")
      .then((res) => {
        const filteredImg = res.data.filter(
          (item) => item.pid === selectedPid
        );
        if (filteredImg) {
          setDetailImgList(filteredImg[0].images);
        }
      })
      .catch((error) => console.log(error));

    /* 제품 정보, 상세 설명 */
    axios
      .get("/data/product_detail_des.json")
      .then((res) => {
        const filteredDes = res.data.filter((des) => des.pid === selectedPid);
        if (filteredDes) {
          setDetailDesList(filteredDes[0].description);
        }
      })
      .catch((error) => console.log(error));

    /* 상품 정보 고시 */
    axios
    .get("/data/product_detail_info.json")
    .then((res) => {
      const filteredInfo = res.data.filter((info) => info.pid === selectedPid);
      if (filteredInfo) {
        setDetailInfoList(filteredInfo[0].contents);
      }
    })
    .catch((error) => console.log(error));
  }, [selectedPid]);

  return (
    <div className="detail-container">
      <div className="detail-cont">
        {/* 이미지 리스트 */}
        <div className="detail-image">
          {detailImgList &&
            detailImgList.map((img, index) => <DetailItem key={index} img={img} />)}
        </div>
        {/* 제품 정보 */}
        <div className="detail-description">
          <p>{product.name}</p>
          <p>{product.ename}</p>

          {/* 상세 설명 */}
          <>
            {detailDesList &&
              detailDesList.map((section, index) => (
                <div key={index}>
                  <h3>
                    {section[0]}  
                  </h3>
                  {section.slice(1).map((item,index) =>(
                    <p key={index}>{item}</p> 
                  ))}
                </div>
              ))}
          </>
        </div>
      </div>

      <div className="detail-info">
        <h3>상품 정보 고시</h3>
        <ul>
          {detailInfoList && detailInfoList.map((info, index) => (
            <li key={index}><span className="detail-info-title">{info.title}</span><span>{info.txt}</span></li>)
          )}
        </ul>
        <p className="detail-info-txt">본 상품 정보 및 거래 조건의 내용은 판매자가 직접 등록한 것으로서 등록된 정보에 대한 책임은 판매자에게 있습니다.</p>
      </div>
    </div> // detail-container
  );
}
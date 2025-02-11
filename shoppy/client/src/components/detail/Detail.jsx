import React, { useEffect, useState } from "react";
import axios from "axios";
import DetailItem from "./DetailItem.jsx";
import ImageList from "../common/ImageList.jsx";
import { useDetailDes } from "../../hooks/listCount.js";
import { useParams } from "react-router-dom";

export default function Detail({ product,imgList }) {
  const { pid } = useParams();

  const{detailDesList,detailInfoList}= useDetailDes(pid);
  return (
    <div className="detail-container">
      <div className="detail-cont">
        {/* 이미지 리스트 */}
        <div className="detail-image">
          <ImageList imgList={imgList}/>
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
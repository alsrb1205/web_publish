import React, { useEffect, useState } from "react";
import DetailItem from "./DetailItem.jsx";
import axios from "axios";

export default function Detail({ selectedPid, products }) {
  const [detailTapImgList, setDetailTapImgList] = useState([]);

  useEffect(() => {
    axios
      .get("/data/product_detail.json")
      .then((res) => {
        // 선택된 pid에 해당하는 데이터 찾기
        const filteredItems = res.data.filter(
          (item) => item.pid === selectedPid
        );
        if (filteredItems) {
          setDetailTapImgList(filteredItems[0].images); // images 배열만 저장
        }
      })
      .catch((error) => console.log(error));
  }, [selectedPid]);

  return (
    <div className="product-detail-tab-d">
      <>
        {detailTapImgList &&
          detailTapImgList.map((img) => <DetailItem img={img} />)}
      </>
    </div>
  );
}

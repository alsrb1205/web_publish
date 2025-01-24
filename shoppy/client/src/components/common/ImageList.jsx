import React from "react";

export default function ImageList({ imgList }) {
  //   console.log("imgList-->", imgList);

  return (
    <>
      {imgList &&
        imgList.map((image, index) => <img key={index} src={image} alt="" />)}
    </>
  );
}
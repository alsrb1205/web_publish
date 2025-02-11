import React from "react";

export default function ImageList({ imgList }) {

  return (
    <>
      {imgList &&
        imgList.map((image, index) => <img key={index} src={`${image}`} alt="" />)}
    </>
  );
}
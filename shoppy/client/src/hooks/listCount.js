import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function useQnA(pid) {
    const [qnaList, setQnaList] = useState([]);
    const [qnaCount, setQnaCount] = useState(0);
    useEffect(() => {
        axios
            .get("/data/qna.json")
            .then((res) => {
                // pid가 일치하는 데이터 필터
                const farray = res.data.filter((d) => (d.pid === parseInt(pid)))
                setQnaList(farray[0].qnalist)
                setQnaCount(farray[0].qnalist.length)
            })
            .catch((error) => console.log(error))
    }, [pid])

    return ({ qnaList, qnaCount });
}

export function useReview(pid) {
    const [reviewList, setReviewList] = useState([]);
    const [reviewCount, setReviewCount] = useState(0);

    useEffect(() => {
        axios.get('/data/reviewcontent.json')
            .then((res) => {
                const rarray = res.data.products.filter((reviewComment) => reviewComment.pid === pid);
                const totalReviews = rarray[0].reviews.length;
                setReviewList(rarray[0].reviews);
                setReviewCount(totalReviews);
            })
            .catch(err => console.log(err))
    }, [pid])

    return ({ reviewList, reviewCount });
}

export function useProduct(pid) {
    const [product, setProduct] = useState([]);
    const [imgList, setImgList] = useState([]);
    const [detailImgList, setDetailImgList] = useState([]);

    useEffect(() => {
        axios.post("http://localhost:9000/product/detail", { "pid": pid })
            .then((res) => {
                setProduct(res.data);
                // image 배열의 3개 이미지를 출력형태로 생성하여 배열에 저장
                // const imgList = res.data.image.filter((image,i)=>{if (i<3) return image})
                // setImgList(imgList);

                // mysql에서 json_array() 사용해서 imgList 배열만듬
                setImgList(res.data.imgList);
                setDetailImgList(res.data.detailImgList);
            })
            .catch(err => console.log(err))
    }, [pid])

    return ({ product, imgList, detailImgList });
}

export function useDetailDes(pid) {
    const [detailDesList, setDetailDesList] = useState([]);
    const [detailInfoList, setDetailInfoList] = useState([]);

    useEffect(() => {
        axios.get('/data/products.json')
            .then(res => {
                const darray = res.data.filter((d) => d.pid === pid);
                setDetailDesList(darray[0].description);
                setDetailInfoList(darray[0].contents);
            })
            .catch(err => console.log(err))
    }, [pid])
    return ({ detailDesList, detailInfoList });
}
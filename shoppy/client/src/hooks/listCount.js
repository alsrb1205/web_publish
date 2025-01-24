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
    const [detailDesList, setDetailDesList] = useState([]);
    const [detailInfoList, setDetailInfoList] = useState([]);
    const [product, setProduct] = useState([]);
    const [imgList, setImgList] = useState([]);

    useEffect(() => {
        axios.get("/data/products.json")
            .then((res) => {
                const filterProduct = res.data.filter((des) => des.pid === pid);

                setProduct(filterProduct[0]);
                setDetailDesList(filterProduct[0].description);
                setDetailInfoList(filterProduct[0].contents);
                setImgList(filterProduct[0].imgList);
            })
            .catch(err => console.log(err))
    }, [pid])

    return ({ detailDesList, detailInfoList, product, imgList });
}
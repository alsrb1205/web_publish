import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ReviewImage() {
    const [reviewData, setReviewData] = useState([]);
    const { pid } = useParams();

    useEffect(() => {
        axios
            .get('/data/reviewcontent.json')
            .then((res) => {
                const iarray = res.data.products.filter((ri) => (ri.pid === pid))
                setReviewData(iarray[0].reviewImages)
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="review-images">
            {reviewData.map((src) =>
                <img src={src} />
            )}
        </div>
    );
}

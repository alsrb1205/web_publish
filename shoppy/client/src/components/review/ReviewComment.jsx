import React, { useState, useEffect } from 'react';

export default function ReviewComment() {
    const [reviewData, setReviewData] = useState([]);

    useEffect(() => {
        fetch('/data/reviewcontent.json')
            .then((response) => response.json())
            .then((data) => setReviewData(data.products))
            .catch((error) => console.error(error));
    }, []);

    return (
        < div className="reviews-list" >
            {
                reviewData.map((review, index) => (
                    <div key={index} className="review-item">
                        <div className="review-header">
                            <span className="review-user">{review.user}</span>
                            <span className="review-date">{review.date}</span>
                        </div>
                        <div className="review-details">
                            <p>구매옵션: {review.buyOption}</p>
                            <p>사이즈 정보: {review.sizeInfo}</p>
                        </div>
                        <div className="review-satisfaction">
                            <p>사이즈 만족도: {review.satisfaction.size}</p>
                            <p>색상 만족도: {review.satisfaction.color}</p>
                            <p>소재 만족도: {review.satisfaction.material}</p>
                        </div>
                        <div className="review-comment">
                            <p>{review.comment}</p>
                        </div>
                        <div className="review-actions">
                            <button type="button">신고</button>
                            <button type="button">숨김</button>
                        </div>
                    </div>
                ))
            }
        </div >
    );
}


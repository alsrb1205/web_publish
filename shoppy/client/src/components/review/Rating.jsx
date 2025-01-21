import React, { useState, useEffect } from 'react';

export default function Rating() {
    const [reviewData, setReviewData] = useState([]);

    useEffect(() => {
        fetch('/data/reviewcontent.json')
            .then((response) => response.json())
            .then((data) => setReviewData(data.products))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="review-container">
            <h2>상품 만족도</h2>
            <div className="ratings-summary">
                {/* 평점 데이터 출력 */}
                {reviewData.map((product, index) => (
                    <div key={index} className="rating-item">
                        
                        <div className="rating-category">
                            <h4>사이즈</h4>
                            <div className="progress-bar">
                                <div
                                    className="progress small"
                                    style={{ width: `${product.size.small}%` }}
                                ></div>
                                <div
                                    className="progress medium"
                                    style={{ width: `${product.size.justRight}%` }}
                                ></div>
                                <div
                                    className="progress large"
                                    style={{ width: `${product.size.large}%` }}
                                ></div>
                            </div>
                            <p>
                                <span>작음 {product.size.small}%</span>
                                <span>적당함 {product.size.justRight}%</span>
                                <span>큼 {product.size.large}%</span>
                            </p>
                        </div>
                        <div className="rating-category">
                            <h4>색상</h4>
                            <div className="progress-bar">
                                <div
                                    className="progress match"
                                    style={{ width: `${product.color.same}%` }}
                                ></div>
                                <div
                                    className="progress similar"
                                    style={{ width: `${product.color.similar}%` }}
                                ></div>
                                <div
                                    className="progress different"
                                    style={{ width: `${product.color.different}%` }}
                                ></div>
                            </div>
                            <p>
                                <span>같음 {product.color.same}%</span>
                                <span>비슷함 {product.color.similar}%</span>
                                <span>다름 {product.color.different}%</span>
                            </p>
                        </div>
                        <div className="rating-category">
                            <h4>소재</h4>
                            <div className="progress-bar">
                                <div
                                    className="progress match"
                                    style={{ width: `${product.material.same}%` }}
                                ></div>
                                <div
                                    className="progress similar"
                                    style={{ width: `${product.material.similar}%` }}
                                ></div>
                                <div
                                    className="progress different"
                                    style={{ width: `${product.material.different}%` }}
                                ></div>
                            </div>
                            <p>
                                <span>같음 {product.material.same}%</span>
                                <span>비슷함 {product.material.similar}%</span>
                                <span>다름 {product.material.different}%</span>
                            </p>
                        </div>
                        <div>
                            <span className="stars">{product.star}</span>
                            <span className="score">{product.rating}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

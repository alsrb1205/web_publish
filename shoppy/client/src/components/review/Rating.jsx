import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Rating() {
    const [reviewData, setReviewData] = useState([]);
    const { pid } = useParams();

    useEffect(() => {
        axios
            .get("/data/reviewcontent.json")
            .then((res) => {
                const rarray = res.data.products.filter((rating) => rating.pid === pid);
                setReviewData(rarray);
            })
            .catch((error) => console.error(error));
    }, [pid]);

    return (
        <div className="review-container">
            <div className="review-title">상품 만족도</div>
            <div className="review-top">
                {reviewData.map((product, index) => (
                    <div key={index}>
                        {/* 별점 및 평점 */}
                        <div className="rating-group">
                            <div className="rating-stars">
                                <span>구매하신 분들의 상품에 대한 평점입니다.</span>
                                <div >
                                    <span className="stars">{product.star}</span> {/* ★☆ */}
                                    <span className="score">{product.rating}</span>
                                </div>
                            </div>

                            {/* 리뷰 상세 항목 그룹 */}
                            <div className="review-detail-group">
                                {/* 사이즈 */}
                                <div className="rating-category">
                                    <h4>사이즈</h4>
                                    <div className="review-percent-style">
                                        <span className="review-detail-font">작음</span>
                                        <div className="progress-bar">
                                            <div
                                                className="progress-bar-color"
                                                style={{ width: `${product.size.small}%` }}
                                            ></div>
                                        </div>
                                        <span>{product.size.small}%</span>
                                    </div>
                                    <div className="review-percent-style">
                                        <span className="review-detail-font">적당함</span>
                                        <div className="progress-bar">
                                            <div
                                                className="progress-bar-color"
                                                style={{ width: `${product.size.justRight}%` }}
                                            ></div>
                                        </div>
                                        <span>{product.size.justRight}%</span>
                                    </div>
                                    <div className="review-percent-style">
                                        <span className="review-detail-font">큼</span>
                                        <div className="progress-bar">
                                            <div
                                                className="progress-bar-color"
                                                style={{ width: `${product.size.large}%` }}
                                            ></div>
                                        </div>
                                        <span>{product.size.large}%</span>
                                    </div>
                                </div>

                                {/* 색상 */}
                                <div className="rating-category">
                                    <h4>색상</h4>
                                    <div className="review-percent-style">
                                        <span className="review-detail-font">같음</span>
                                        <div className="progress-bar">
                                            <div
                                                className="progress-bar-color"
                                                style={{ width: `${product.color.same}%` }}
                                            ></div>
                                        </div>
                                        <span>{product.color.same}%</span>
                                    </div>
                                    <div className="review-percent-style">
                                        <span className="review-detail-font">비슷함</span>
                                        <div className="progress-bar">
                                            <div
                                                className="progress-bar-color"
                                                style={{ width: `${product.color.similar}%` }}
                                            ></div>
                                        </div>
                                        <span>{product.color.similar}%</span>
                                    </div>
                                    <div className="review-percent-style">
                                        <span className="review-detail-font">다름</span>
                                        <div className="progress-bar">
                                            <div
                                                className="progress-bar-color"
                                                style={{ width: `${product.color.different}%` }}
                                            ></div>
                                        </div>
                                        <span>{product.color.different}%</span>
                                    </div>
                                </div>

                                {/* 소재 */}
                                <div className="rating-category">
                                    <h4>소재</h4>
                                    <div className="review-percent-style">
                                        <span className="review-detail-font">같음</span>
                                        <div className="progress-bar">
                                            <div
                                                className="progress-bar-color"
                                                style={{ width: `${product.material.same}%` }}
                                            ></div>
                                        </div>
                                        <span>{product.material.same}%</span>
                                    </div>
                                    <div className="review-percent-style">
                                        <span className="review-detail-font">비슷함</span>
                                        <div className="progress-bar">
                                            <div
                                                className="progress-bar-color"
                                                style={{ width: `${product.material.similar}%` }}
                                            ></div>
                                        </div>
                                        <span>{product.material.similar}%</span>
                                    </div>
                                    <div className="review-percent-style">
                                        <span className="review-detail-font">다름</span>
                                        <div className="progress-bar">
                                            <div
                                                className="progress-bar-color"
                                                style={{ width: `${product.material.different}%` }}
                                            ></div>
                                        </div>
                                        <span>{product.material.different}%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ReviewComment() {
    const [reviewData, setReviewData] = useState([]);
    const { pid } = useParams();

    useEffect(() => {
        axios
            .get('/data/reviewcontent.json')
            .then((res) => {
                const rcArray = res.data.products.filter((reviewComment) => reviewComment.pid === pid);
                setReviewData(rcArray);
            })
            .catch((error) => console.error(error));
    }, [pid]);

    return (
        <>
            <div className="comment-menu">
                <ul>
                    <li>최신순</li>
                    <li>평점 높은순</li>
                    <li>평점 낮은순</li>
                    <li>추천순 <button>?</button></li>
                </ul>
            </div>
            <div className="reviews-list">
                <table>
                    <colgroup>
                        <col style={{ width: '160px' }} /> {/* 별점 영역 */}
                        <col style={{ width: 'auto' }} /> {/* 리뷰 내용 영역 */}
                    </colgroup>
                    <tbody>
                        {reviewData.map((review, index) => (
                            <tr key={index}>
                                {/* 별점 */}
                                <td className="review-stars">{review.reviews.star}</td>

                                {/* 리뷰 내용 */}
                                <td>
                                    {/* 구매옵션 & 사이즈 정보 */}
                                    <div className="review-details">
                                        <div className="review-info-container">
                                            <span className="review-buy-option">구매옵션: {review.reviews.buyOption}</span>
                                            <div className="review-user-info">
                                                <span className="review-user">{review.reviews.user}</span>
                                                <span className="review-date">{review.reviews.date}</span>
                                            </div>
                                        </div>
                                        <span className="review-size-info">사이즈 정보: {review.reviews.sizeInfo}</span>
                                    </div>


                                    {/* 만족도 */}
                                    <div className="review-satisfaction">
                                        <ul>
                                            <li>사이즈  {review.reviews.satisfaction.size}</li>
                                            <li>색상  {review.reviews.satisfaction.color}</li>
                                            <li>소재  {review.reviews.satisfaction.material}</li>
                                        </ul>
                                    </div>
                                    {/* 리뷰 이미지 */}
                                    <div className="review-comment-image">
                                        <img src={review.reviews.reviewImages}/>
                                    </div>


                                    


                                    {/* 리뷰 코멘트 */}
                                    <div className="review-comment">
                                        <p>{review.reviews.comment}</p>
                                    </div>

                                    {/* 액션 버튼 */}
                                    <div className="review-actions">
                                        <div>
                                            <button type="button"><span>신고</span></button>
                                            <button type="button"><span>숨김</span></button>
                                        </div>
                                        <div>
                                            <button type="button">👍</button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div>
                    {/* 페이지 로직 */}
                </div>
            </div>
        </>
    );
}
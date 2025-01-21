import React, {useState, useEffect} from 'react';

export default function ReviewImage() {
    const [reviewData, setReviewData] = useState([]);
    
        useEffect(() => {
            fetch('/data/reviewcontent.json')
                .then((response) => response.json())
                .then((data) => setReviewData(data.products))
                .catch((error) => console.error(error));
        }, []);

    return (
        <div className="review-images">
            {reviewData.map((item, index) =>
                item.reviewImages.map((src, idx) => (
                    <img
                        key={`${index}-${idx}`}
                        src={src}
                        alt={`Review image ${idx + 1}`}
                        className="review-image"
                    />
                ))
            )}
        </div>
    );
}


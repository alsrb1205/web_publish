import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QnAList from './QnAList';
import Pagination from '../Pagination';

export default function QnA({onTotalItemCount}) {
    const navigate = useNavigate(); // React Router의 네비게이션 훅

    // 페이지 정보 관련 state
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const itemsPerPage = 6;

    // QnAList에서 전체 페이지를 알려주는 함수
    const receiveTotalPages = (page) => {
        setTotalPages(page)
    };

    // QnAList → QnA로 올라온 totalItemCount를
    // QnA → DetailProduct(onTotalItemCount)로 넘김
    const receiveTotalItemCount = (count) => {
        onTotalItemCount(count); // 결국 DetailProduct의 handleTotalItemCount를 호출
    };

    // "상품문의" 버튼 클릭 시
    const inquiry = () => {
        const result = window.confirm("로그인이 필요합니다. 로그인 페이지로 이동하시겠습니까?");
        if (result) {
            // 확인 버튼을 누른 경우
            navigate("/login") // 로그인 페이지로 이동
        }
    };


    return (
        <div className='product-qna'>
            <div className='question-button'>
                <button type='button' onClick={inquiry}>상품문의</button>
            </div>
            {/* 컴포넌트 props 변경 */}
            <QnAList
                currentPage={currentPage}    // 현재 페이지
                itemsPerPage={itemsPerPage}  // 한 페이지당 보여줄 개수
                sendTotalPages={receiveTotalPages} // 전체 페이지 수를 부모(QnA)에 알려주는 함수
                // QnAList가 아이템 개수를 알려주면 QnA → DetailProduct로 올림
                onSendTotalItemCount={receiveTotalItemCount}
            />
            <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage} // Pagination 내부에서 페이지 바뀔 때 QnA의 state도 업데이트
                totalPages={totalPages}
            // pagesPerGroup={5}  // 커스텀하고 싶다면 prop으로도 내려줄 수 있음 (기본값 5)
            />
        </div>
    );
}

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QnAList from './QnAList';
import Pagination from '../Pagination';

export default function QnA({ qnaList }) {
    const navigate = useNavigate(); // React Router의 네비게이션 훅

    // 페이지 정보 관련 state
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const itemsPerPage = 6;

    // QnAList가 아닌, QnA에서 직접 totalPages 계산
    useEffect(() => {
        const pages = Math.ceil(qnaList.length / itemsPerPage);
        setTotalPages(pages);
    }, [qnaList, itemsPerPage]);


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
                list={qnaList}
            />
            <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage} // Pagination 내부에서 페이지 바뀔 때 QnA의 state도 업데이트
                totalPages={totalPages}
            />
        </div>
    );
}

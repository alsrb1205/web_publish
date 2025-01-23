import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import QnAList from './QnAList';

export default function QnA() {
    const navigate = useNavigate(); // React Router의 네비게이션 훅
    const inquiry = () => {
        const result = window.confirm("로그인이 필요합니다. 로그인 페이지로 이동하시겠습니까?");
        if (result) {
            // 확인 버튼을 누른 경우
            navigate("/login") // 로그인 페이지로 이동
        }
    };

    // Pagination 이동 함수
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const itemsPerPage = 6;
    const pagesPerGroup = 5; // 페이지 그룹당 보이는 최대 페이지 수
    const [pageGroup, setPageGroup] = useState(1);
    const startPage = (pageGroup - 1) * pagesPerGroup + 1;
    const endPage = Math.min(pageGroup * pagesPerGroup, totalPages);
    const handlePageChange = (page) => {
        setCurrentPage(page); // 페이지 상태 업데이트
    };

    const handleGroupChange = (group) => {
        setPageGroup(group);
        const firstPageOfGroup = (group - 1) * pagesPerGroup + 1;
        setCurrentPage(firstPageOfGroup); // 새로운 그룹의 첫 번째 페이지로 이동
    };

    const receiveTotalPages = (page) => {
        setTotalPages(page)
    };

    return (
        <div className='product-qna'>
            <div className='question-button'>
                <button type='button' onClick={inquiry}>상품문의</button>
            </div>
            <QnAList currentPage={currentPage} itemsPerPage={itemsPerPage} sendTotalPages={receiveTotalPages} />
            <ul className="pagination">
                <li>
                    <button
                        type="button"
                        disabled={pageGroup === 1}
                        onClick={() => handleGroupChange(1)}>
                        &lt;&lt;
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                        disabled={pageGroup === 1}
                        onClick={() => handleGroupChange(pageGroup - 1)}>
                        &lt;
                    </button>
                </li>
                {[...Array(endPage - startPage + 1)].map((_, index) => (
                    <li>
                        <button
                            type="button"
                            className={currentPage === index + 1 ? "active" : ""}
                            onClick={() => handlePageChange(index + 1)}>
                            {startPage + index}
                        </button>
                    </li>
                ))}
                <li>
                    <button
                        type="button"
                        disabled={endPage === totalPages} // 총 페이지 수에 따라 변경 가능
                        onClick={() => handleGroupChange(pageGroup + 1)}>
                        &gt;
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                        disabled={endPage === totalPages}
                        onClick={() => handleGroupChange((Math.ceil(totalPages / pagesPerGroup)))}>
                        &gt;&gt;
                    </button>
                </li>
            </ul>
        </div>
    );
}

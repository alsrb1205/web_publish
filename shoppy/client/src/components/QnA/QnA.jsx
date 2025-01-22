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
    
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const itemsPerPage = 6;
    const pagesPerPage = 5;
    // Pagination 이동 함수
    const handlePageChange = (page) => {
        setCurrentPage(page); // 페이지 상태 업데이트
    };
    const receiveTotalPages = (page)=>{
        setTotalPages(page)
    }

    return (
        <div className='product-qna'>
            <div className='question-button'>
                <button type='button' onClick={inquiry}>상품문의</button>
            </div>
            <QnAList currentPage={currentPage} itemsPerPage={itemsPerPage} sendTotalPages={receiveTotalPages}/>
            <ul className="pagination">
                <li>
                    <button
                        type="button"
                        disabled={currentPage === 1}
                        onClick={() => handlePageChange(1)}
                    >
                        &lt;&lt;
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                        disabled={currentPage === 1}
                        onClick={() => handlePageChange(currentPage - 1)}
                    >
                        &lt;
                    </button>
                </li>
                {[...Array(totalPages)].map((_, index) => (
                    <li>
                        <button
                            type="button"
                            className={currentPage === index + 1 ? "active" : ""}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </button>
                    </li>
                ))}
                <li>
                    <button
                        type="button"
                        disabled={currentPage === totalPages} // 총 페이지 수에 따라 변경 가능
                        onClick={() => handlePageChange(currentPage + 1)}
                    >
                        &gt;
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                        disabled={currentPage === 5}
                        onClick={() => handlePageChange(totalPages)}
                    >
                        &gt;&gt;
                    </button>
                </li>
            </ul>
        </div>
    );
}

// <ul className='pagination'>
//     <li><Link to={'#'}><button type='button'>&lt;&lt;</button></Link></li>
//     <li><Link><button type='button'>&lt;</button></Link></li>
//     <li><Link>1</Link></li>
//     <li><Link>2</Link></li>
//     <li><Link>3</Link></li>
//     <li><Link>4</Link></li>
//     <li><Link><button type='button'>&gt;&gt;</button></Link></li>
//     <li><Link><button type='button'>&gt;</button></Link></li>
// </ul>

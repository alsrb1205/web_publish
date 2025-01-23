import React, { useEffect, useState } from 'react';

export default function Pagination({
    totalPages,       // 전체 페이지 수
    currentPage,      // 현재 페이지(부모에서 내려 받음)
    setCurrentPage,   // 현재 페이지를 변경할 수 있게 해주는 setter
    pagesPerGroup = 5 // 페이지네이션 그룹당 보여줄 페이지 개수 (기본값 5)
}) {
    // 페이지 그룹 상태
    const [pageGroup, setPageGroup] = useState(1);

     // currentPage 변경 시, 해당 page가 속한 그룹도 재계산
    useEffect(() => {
        setPageGroup(Math.floor((currentPage - 1) / pagesPerGroup) + 1);
    }, [currentPage, pagesPerGroup]);

     // 현재 그룹의 시작 페이지와 끝 페이지
    const startPage = (pageGroup - 1) * pagesPerGroup + 1;
    const endPage = Math.min(pageGroup * pagesPerGroup, totalPages);

    // 개별 페이지 클릭 시
    const handlePageChange = (page) => {
        setCurrentPage(page); // 페이지 상태 업데이트
    };

     // 그룹 이동(≪, <, >, ≫) 버튼 클릭 시
    const handleGroupChange = (targetGroup) => {
        setPageGroup(targetGroup);
        // 해당 그룹의 첫 번째 페이지로 이동
        const firstPageOfGroup = (targetGroup - 1) * pagesPerGroup + 1;
        setCurrentPage(firstPageOfGroup);
    };
    return (
        <ul className="pagination">
            {/* 맨 처음 그룹으로 (≪) */}
            <li>
                <button
                    type="button"
                    disabled={pageGroup === 1}
                    onClick={() => handleGroupChange(1)}
                >
                    &lt;&lt;
                </button>
            </li>

            {/* 이전 그룹 (<) */}
            <li>
                <button
                    type="button"
                    disabled={pageGroup === 1}
                    onClick={() => handleGroupChange(pageGroup - 1)}
                >
                    &lt;
                </button>
            </li>

            {/* 현재 그룹의 페이지들 */}
            {[...Array(endPage - startPage + 1)].map((_, index) => {
                const page = startPage + index;
                return (
                    <li key={page}>
                        <button
                            type="button"
                            className={currentPage === page ? 'active' : ''}
                            onClick={() => handlePageChange(page)}
                        >
                            {page}
                        </button>
                    </li>
                );
            })}

            {/* 다음 그룹 (>) */}
            <li>
                <button
                    type="button"
                    disabled={endPage === totalPages}
                    onClick={() => handleGroupChange(pageGroup + 1)}
                >
                    &gt;
                </button>
            </li>

            {/* 마지막 그룹 (≫) */}
            <li>
                <button
                    type="button"
                    disabled={endPage === totalPages}
                    onClick={() => handleGroupChange(Math.ceil(totalPages / pagesPerGroup))}
                >
                    &gt;&gt;
                </button>
            </li>
        </ul>
    );
}


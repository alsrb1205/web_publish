import React, { useEffect, useState } from 'react';
import { FaLock } from "react-icons/fa";


export default function QnAList({
    list,
    currentPage,
    itemsPerPage,
}) {
    const [openAnswer, setOpenAnswer] = useState(null);

    // 질문 클릭 시 답변 토글
    const toggleAnswer = (item, index) => {
        if (openAnswer === index) {
            setOpenAnswer(null);
        } else if (item.isSecret) {
            alert('비밀글입니다.')
        } else {
            setOpenAnswer(index);
        }
    }
    // currentPage 변경 시 openAnswer 닫기
    useEffect(() => {
        setOpenAnswer(null);
    }, [currentPage]);

    // 현재 페이지의 아이템들만 잘라서 노출
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = list.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <table className='qna-table'>
            <tbody>
                {currentItems && currentItems.map((item, index) =>
                    <>
                        <tr>
                            <td className='complete'><span>{item.complete}</span></td>
                            <td className='question'
                                onClick={() => { toggleAnswer(item, index) }}>
                                <span>{item.question}{item.isSecret === true ? <FaLock /> : ''}</span>
                            </td>
                            <td className='qna-email'><span>{item.email}</span></td>
                            <td className='qna-date'><span>{item.date}</span></td>
                        </tr>
                        {openAnswer === index &&
                            <tr className='answer-content'>
                                <td></td>
                                <td colSpan={2}>
                                    <div className='ask'>
                                        <p className='answer-content-title'>질문</p>
                                        <p>블랙제품 언제출고될까요??</p>
                                    </div>
                                    <div className='answer'>
                                        <p className='answer-content-title'>답변</p>
                                        <span className='answer-date'>2025.01.21</span>
                                        <p>금일 출고 진행 되실 예정으로 참고 부탁 드립니다.</p>
                                        <br />
                                        <br />
                                        <br />
                                        <p>궁금하신 사항은 언제든지 문의 부탁드립니다.
                                            감사합니다.</p>
                                    </div>
                                </td>
                                <td></td>
                            </tr>
                        }
                    </>
                )
                }
            </tbody>
        </table>
    );
}


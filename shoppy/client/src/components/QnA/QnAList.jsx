import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaLock } from "react-icons/fa";


export default function QnAList({ currentPage, itemsPerPage,sendTotalPages }) {
    const [list, setList] = useState([]);
    const { pid } = useParams();
    const [openAnswer, setOpenAnswer] = useState(null);

    useEffect(() => {
        axios
            .get("/data/qna.json")
            .then((res) => {
                const farray = res.data.filter((d) => (d.pid === parseInt(pid)))
                setList(farray[0].qnalist)
            })
            .catch((error) => console.log(error))
    }, []);
    
    useEffect(() => {
        setOpenAnswer(null);
    }, [currentPage]);

    const toggleAnswer = (item, index) => {
        if (openAnswer === index) {
            setOpenAnswer(null);
        } else if (item.isSecret) {
            alert('비밀글입니다.')
        } else {
            setOpenAnswer(index);
        }
    }
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = list.slice(indexOfFirstItem, indexOfLastItem);
    useEffect(()=>{
        const totalPages = Math.ceil(list.length / itemsPerPage);
        sendTotalPages(totalPages);
    },[list])
    console.log(list);
    



    return (
        <table className='qna-table'>
            <tbody>
                {currentItems &&currentItems.map((item, index) =>
                    <>
                        <tr>
                            <td className='complete'><span>{item.complete}</span></td>
                            <td className='question'
                                onClick={() => { toggleAnswer(item, index) }}>
                                <span>{item.question}{item.isSecret ===true ? <FaLock/>: ''}</span>
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


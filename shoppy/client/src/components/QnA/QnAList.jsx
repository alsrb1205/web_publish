import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function QnAList() {
    const [list, setList] = useState([]);
    const { pid } = useParams();
    useEffect(() => {
        axios
          .get("/data/qna.json")
          .then((res) => {
              const farray = res.data.filter((d)=>(d.pid === parseInt(pid)))
              setList(farray[0].qnalist)
            })
            .catch((error) => console.log(error))
        }, []);
      console.log(list);
      
    return (
        <table className='qna-table'>
            {list && list.map((item) =>
                    <tbody>
                        <tr>
                            <td className='complete'><span>{item.complete}</span></td>
                            <td className='question'><p>{item.question}</p></td>
                            <td className='qna-email'><span>{item.email}</span></td>
                            <td className='qna-date'><span>{item.date}</span></td>
                        </tr>
                        <tr className='answer'>
                            <td>
                                <div>
                                    <div><p>배송 언제와요</p>
                                    </div>
                                    <div>
                                        <span>2025.01.21</span>
                                        <p>다음주</p>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                )
            }
        </table>
    );
}


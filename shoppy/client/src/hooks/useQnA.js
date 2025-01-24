import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function useQnA(pid) {
    const [qnaList, setQnaList] = useState([]);
    const [qnaCount, setQnaCount] = useState(0);
    useEffect(() => {
        axios
            .get("/data/qna.json")
            .then((res) => {
                // pid가 일치하는 데이터 필터
                const farray = res.data.filter((d) => (d.pid === parseInt(pid)))
                setQnaList(farray[0].qnalist)
                setQnaCount(farray[0].qnalist.length)
            })
            .catch((error) => console.log(error))
    }, [pid])

    return ({ qnaList, qnaCount });
}


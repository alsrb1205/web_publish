import { useEffect, useState } from 'react';
import BoxOffice from './BoxOffice.jsx';

export default function AppBoxOffice() {
    const [dailyBoxOffice, setDailyBoxOffice] = useState([]);

    useEffect(() => {
        const key = `5935a9ef2d7d40f1641ecb0fa87f346b`;
        const url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=20241203`;

        fetch(url)
            .then(result => result.json())
            .then(daily => setDailyBoxOffice(daily.boxOfficeResult.dailyBoxOfficeList))
            .catch(error => console.log(error));
    }, []);

    return (
        <>
            <h1>KOBIS BoxOffice</h1>
            <div className='title'>
                <BoxOffice
                    rank="순위"
                    title="제목"
                    open="개봉일"
                    cnt="당일관객수"
                    total="누적관객수"
                    amt="누적매출액"
                    type="title"
                />
            </div>
            <div className='content'>
                {dailyBoxOffice.map(boxoffice =>
                    <div className='rank'>
                        <BoxOffice
                            rank={boxoffice.rank}
                            title={boxoffice.movieNm}
                            open={boxoffice.openDt}
                            cnt={boxoffice.audiCnt}
                            total={boxoffice.audiAcc}
                            amt={boxoffice.salesAmt}
                            type="content"
                        />
                    </div>
                )}
            </div>
        </>
    );
}
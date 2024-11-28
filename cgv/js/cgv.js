import { kobisBoxOffice, searchMoviePoster } from "./commons.js";
createMovieChartList(1);

/*
 *  index -> 무비차트 리스트 생성 함수
 */
function createMovieChartList(page) {
    const date = new Date();
    const searchDt = date.getFullYear().toString().concat(date.getMonth() + 1, date.getDate() - 1);

    kobisBoxOffice('Daily', searchDt)
        .then((result) => {
            const rankList = result.boxOfficeResult.dailyBoxOfficeList;
            let posterList = []; //Promise 객체타입의 10개의 이미지 포스터
            rankList.forEach((element) => {
                const movieNm = element.movieNm;
                const openDt = element.openDt.replaceAll('-', '')
                posterList.push(getPoster(movieNm, openDt));

            })
            Promise.all(posterList) // 비동기식 처리를 묶어서 한번에 실행 
                .then((poster) => {
                    let output = `<ul>`;
                    (page === 2) ? output += `<li><span class="movie-chart" id="arrow-left">&lt;&lt;</span></li>` : output += ``;
                    let idx = 0;
                    (page !== 1) ? idx += 5 : idx = 0;
                    rankList.forEach((movie, i) => {
                        i += idx;
                        if (i < page * 5) {
                            output += `
                                        <li>
                                            <div>
                                                <img src="${poster[i]}" alt="moviechart1" width="200px">
                                            </div>
                                            <div><h3>${rankList[i].movieNm}</h3></div>
                                            <div><h5>${rankList[i].audiAcc}</h5></div>
                                        </li>
                                        `;
                        }
                    });
                    (page === 1) ? output += `<li><span class="movie-chart" id="arrow-right">&gt;&gt;</span></li></ul>` : output += `</ul>`;
                    ;
                    document.querySelector(".content-moviechart-list").innerHTML = output;

                    // arrow 클릭 이벤트
                    let arrows = document.querySelectorAll(".movie-chart");
                    arrows.forEach((arrow) => {
                        arrow.addEventListener('click', (event) => {
                            (event.target.id === 'arrow-right') ? createMovieChartList(2) : createMovieChartList(1);
                        });
                    })
                })
                .catch(error => console.log(error));
        })
        .catch();

} // createMovieChartList

/** commons.js 파일의 searchMoviePoster 비동기식 함수를 순서대로 호출 */
async function getPoster(movieNm, openDt) {
    return await searchMoviePoster(movieNm, openDt);
}



import { kobisBoxOffice as boxOffice, searchMoviePoster, kmdbMovieDetail } from "./commons.js";
initForm();

function initForm() {
    const output = `
        <h1>일별 박스 오피스</h1>
        <div id="search">
            <select id="type">
                <option value="Default">선택</option>
                <option value="Daily">일별</option>
                <option value="Weekly">주간/주말</option>
            </select>
            <input type="text" id="searchDt" placeholder="예시) 20241121">
            <button type="button" id="searchBtn">Search</button>
        </div>
        <div id="result"></div>
        <div id="poster"></div>
        <div id="imageModal" class="modal">
            <span id="closeModal" class="close">&times;</span>
            <div id="modalContent" class="modal-content"></div>
        </div>
</div>
        
        `;
        // <div id="imageModal" class="modal">
        //     <div class="modal-content">
        //         <span id="closeModal" class="close">&times;</span>
        //         <img id="modalImage" src="" alt="Modal Image" width="500px">
        //     </div>
        // </div>
    document.querySelector("body").innerHTML = output;

    // 기본 박스오피스 화면 출력 : 20240101
    searchBoxOffice('Daily', '20240101');


    /**Search 버튼 이벤트 추가 */
    let searchButton = document.querySelector("#searchBtn");
    searchButton.addEventListener('click', () => {
        // searchDt 입력창, 박스오피스 타입의 유효성 체크
        let type = document.querySelector("#type");
        let searchDt = document.querySelector("#searchDt");
        if (type.value === 'Default') {
            alert('박스오피스 타입을 선택해주세요')
            type.focus();
        } else if (searchDt.value === '') {
            alert('검색 일자를 입력해주세요')
            searchDt.focus();
        } else if (searchDt.value.length != 8) {
            alert('양식을 맞춰주세요');
        } else {
            // 일별&주간/주말 박스오피스 정보 화면 출력
            searchBoxOffice(type.value, searchDt.value);
        }
    });
} //end of initform


/**
 * 일별 박스오피스 정보 화면 출력
 */
function searchBoxOffice(ktype, searchDt) {
    boxOffice(ktype, searchDt)
        .then((result) => {
            const type = result.boxOfficeResult.boxofficeType;
            const range = result.boxOfficeResult.showRange;
            let rankList = null;
            let posterList = [];
            if (ktype === 'Daily') {
                rankList = result.boxOfficeResult.dailyBoxOfficeList;
            } else if (ktype === 'Weekly') {
                rankList = result.boxOfficeResult.weeklyBoxOfficeList;
            }

            // 영화 포스터 가져오기 - KMDB
            rankList.forEach((element) => {
                let movieNm = element.movieNm;
                let openDt = element.openDt.replaceAll('-', '');
                posterList.push(getPoster(movieNm, openDt));
            });
            Promise.all(posterList) // 비동기식 처리는 모두 종료가 되도록 실행
                .then((poster) => {
                    let output = `
                <h3>박스오피스 타입 : ${type}</h3>
                <h3>박스오피스 일자 : ${range}</h3>
                <table>
                    <tr>
                        <th>순위</th>
                        <th>제목</th>
                        <th>개봉일</th>
                        <th>당일관객수</th>
                        <th>누적관객수</th>
                    </tr>
                    `;
                    rankList.forEach((element, i) => {
                        output += `
                    <tr>
                        <td>${element.rank}</td>
                        <td><img src="${poster[i]}" width="100px" class="poster" id="${element.movieNm},${element.openDt.replaceAll('-', '')}">${element.movieNm}</td>
                        <td>${element.openDt}</td>
                        <td>${element.audiCnt}</td>
                        <td>${element.audiAcc}</td>
                    </tr>
                        `
                    });
                    output += `</table>`
                    // console.log(output);
                    // 테이블 화면 출력
                    document.querySelector("#result").innerHTML = output;

                    // 이미지 클릭 이벤트
                    const images = document.querySelectorAll(".poster");
                    images.forEach((image) => image.addEventListener('click', onMovieDetail)); //함수에 괄호를 주지않고 호출하면 결과를 받고 돌아오지않고 그 함수로 간다
                })
                .catch(); // Promise.all()
        })
        .catch();
};

/**순차적으로 비동기식 호출을 위해 getPoster 함수 생성 */
async function getPoster(movieNm, openDt) {
    return await searchMoviePoster(movieNm, openDt);
}

/** 이미지 이벤트 처리 함수 */
function onMovieDetail(event) {
    const modal = document.getElementById('imageModal');
    const modalContent = document.getElementById('modalContent'); // 모달 텍스트 내용
    const closeModalBtn = document.getElementById('closeModal');

    // 기존 모달 초기화
    modalContent.innerHTML = '';

    let [movieNm, openDt] = event.target.id.split(',');

    // KMDB API를 통해 영화 상세 정보 가져오기
    kmdbMovieDetail(movieNm, openDt)
        .then((result) => {
            const count = result.TotalCount;

            if (!count) {
                modalContent.innerHTML = `<h5>검색하신 데이터가 존재하지 않습니다.</h5>`;
                modal.style.display = 'block';
                return;
            }

            const info = result.Data[0].Result[0];
            const posterArray = info.posters.split("|");
            const stillsArray = info.stlls.split("|");
            const actors = info.actors.actor.map(actor => actor.actorNm);
            const actorFive = actors.slice(0, 5);

            const title = info.title.replaceAll("!HS", "").replaceAll('!HE', "");

            // 모달 내용 생성
            let output = `
                <div class="modal-content-container">
                    <div class="modal-header">
                        <h3>${title}</h3>
                        <h5>${info.titleEng} - ${info.prodYear}년</h5>
                    </div>
                    <div class="modal-body">
                        <div class="modal-left">
                            <img src="${posterArray[0]}" alt="Poster" class="poster-img">
                        </div>
                        <div class="modal-right">
                            <p><strong>장르:</strong> ${info.genre}</p>
                            <p><strong>감독:</strong> ${info.directors.director[0]?.directorNm || '정보 없음'}</p>
                            <p><strong>출연:</strong> <span id="actors">${actorFive.join(', ')}</span>
                                <button type="button" id="more_actors">더보기</button>
                                <button type="button" id="close_actors" style="display:none">접기</button>
                            </p>
                            <p><strong>제작사:</strong> ${info.company || '정보 없음'}</p>
                            <p><strong>개봉일:</strong> ${info.repRlsDate || '정보 없음'}</p>
                            <p><strong>상영시간:</strong> ${info.runtime || '정보 없음'}분</p>
                        </div>
                    </div>
                    <div class="modal-stills">
                        <h4>스틸컷</h4>
            `;

            // 스틸컷 추가
            stillsArray.forEach(still => {
                output += `<img src="${still}" class="still-img">`;
            });

            output += `
                    </div>
                </div>
            `;

            // 모달에 내용 삽입
            modalContent.innerHTML = output;

            // '더보기' 버튼 이벤트 처리
            const moreActorsBtn = document.getElementById('more_actors');
            const closeActorsBtn = document.getElementById('close_actors');
            const actorsElement = document.getElementById('actors');

            moreActorsBtn.addEventListener('click', () => {
                actorsElement.textContent = actors.join(', ');
                moreActorsBtn.style.display = 'none';
                closeActorsBtn.style.display = 'inline-block';
            });

            closeActorsBtn.addEventListener('click', () => {
                actorsElement.textContent = actorFive.join(', ');
                moreActorsBtn.style.display = 'inline-block';
                closeActorsBtn.style.display = 'none';
            });

            // 모달 표시
            modal.style.display = 'block';
        })
        .catch((error) => {
            console.error("KMDB 영화 상세 조회 실패:", error);
            modalContent.innerHTML = `<h5>영화 정보를 가져오는 중 에러가 발생했습니다.</h5>`;
            modal.style.display = 'block';
        });

    // 모달 닫기 버튼 이벤트 처리
    closeModalBtn.onclick = () => {
        modal.style.display = 'none';
    };

    // 모달 외부 클릭 시 닫기 (이벤트 중복 방지)
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}
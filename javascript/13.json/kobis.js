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
            <div class="modal-content">
                <span id="closeModal" class="close">&times;</span>
                <img id="modalImage" src="" alt="Modal Image" width="500px">
            </div>
        </div>
</div>
        
        `;
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

/** 이미지 이벤트 처리 함수 */
function onMovieDetail(event) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeModalBtn = document.getElementById('closeModal');

    let [movieNm, openDt] = event.target.id.split(',');



    kmdbMovieDetail(movieNm, openDt)
        .then((result) => {
            const imageSrc = event.target.src; // 클릭한 이미지의 src를 가져옴
            modalImage.src = imageSrc; // 모달 창에 이미지 넣기
            modal.style.display = 'block'; //모달 창을 넣기
        })
        .catch((error) => { console(log(error)) });







        
    //모달 닫기버튼
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none'; //모달 창 닫기
    })
    // 모달 바깥쪽 클릭시 모달 닫기
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    })

}//onMovieDetail

/**순차적으로 비동기식 호출을 위해 getPoster 함수 생성 */
async function getPoster(movieNm, openDt) {
    return await searchMoviePoster(movieNm, openDt);
}


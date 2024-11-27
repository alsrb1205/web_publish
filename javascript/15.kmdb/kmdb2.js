import { kmdb } from "./commons.js";
initform();

function initform() {
    let output = `
        <h1>KMDB API</h1>
        <div>
            <select id="type">
                <option value="default">선택</option>
                <option value="director">영화감독</option>
                <option value="actor">영화배우</option>
            </select>
            <input type="text" id="type_value" placeholder="감독/배우">
            <input type="text" id="title" placeholder="영화제목을 입력해주세요">
            <button type="button" id="search">Search</button>
        </div>
        <div id="result"></div>
    `;
    document.querySelector("body").innerHTML = output;

    // 버튼 이벤트 추가
    document.querySelector("#search")
        .addEventListener('click', () => {
            let type = document.querySelector("#type")
            let typeValue = document.querySelector("#type_value")
            let title = document.querySelector("#title")
            // validation check(유효성 체크)
            if (type.value === 'default') {
                alert("타입을 선택해주세요");
                type.focus();
            } else if (typeValue.value === '') {
                alert("감독/배우를 입력해주세요");
                typeValue.focus();
            } else if (title.value === '') {
                alert("영화 제목을 입력해주세요");
                title.focus();
            } else {
                searchMovieResult(type.value, typeValue.value, title.value);    //KMDB API 연동 후 출력화면
            }
        });
} // initform()

export function searchMovieResult(type, value, title) {
    return kmdb(type, value, title)
        .then((result) => {
            let count = result.TotalCount;
            let output = '';
            let actorFive = [];
            let actorAll = [];

            if (count) {
                let info = result.Data[0].Result[0];
                let directors = info.directors.director;
                let actors = info.actors.actor;
                let posterArray = info.posters.split("|");
                let stillsArray = info.stlls.split("|");
                let staffs = info.staffs.staff;

                let title = info.title.replaceAll("!HS", "").replaceAll('!HE', "");

                actors.forEach((actor, i) => {
                    if (i < 5) actorFive.push(actor.actorNm);
                });
                actors.forEach((actor) => {
                    actorAll.push(actor.actorNm);
                });

                output += `    
                <div class="container">
                    <div class="container-content">
                        <h3>${title}</h3>
                        <h5>${info.titleEng} - ${info.prodYear}년</h5>
                        <hr>
                        <p>${info.type} ${info.rating} ${info.nation} ${info.runtime}분 ${info.repRlsDate}</p>
                        <p><span>제작사 </span><span>${info.company}</span></p>
                        <p><span>감독 </span><span>${staffs[0].staffNm}</span></p>
                        <p><span>출연 </span><span id="actors">${actorFive.join(', ')}</span>
                        <button type="button" id="more_actors">더보기</button>
                        <button type="button" id="close_actors" style="display:none">접기</button>
                        </p>
                    </div> 
                    <div class="container-img">
                        <img src="${posterArray[0]}" alt="">
                    </div>
                </div>
                <div class="container-stills">
                `;
                stillsArray.forEach((still) => {
                    output += `<img src="${still}">`;
                });
                output += `</div>`;
            } else {
                output += `<h5>검색하신 데이터가 존재하지 않습니다.</h5>`;
            }

            return { output, actorFive, actorAll };
        })
        .catch((error) => {
            console.log(error);
            return { output: `<h5>에러가 발생했습니다.</h5>`, actorFive: [], actorAll: [] };
        });
}


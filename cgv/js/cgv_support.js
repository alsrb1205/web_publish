window.addEventListener("DOMContentLoaded", (event) => {
    createNoticeList();
});

function createNoticeList() {
    fetch("../data/notice.json")
        .then((result) => { return result.json() }) //fetch 실행결과 => result(문자열) => json()
        .then((jsonData) => {
            const list = jsonData.list;
            showNoticeList(jsonData.list);
        })
        .catch(error => console.log(error));
}// createNoticeList

function onChangeNoticeList(code) {
    // 1. list 배열에서 code를 filtering 새로운 배열 반환
    fetch("../data/notice.json")
        .then((result) => result.json())
        .then((jsonData) => {
            if (code === 'total') {  // 전체 메뉴 버튼 누르면 공지 전체 리스트 출력
                showNoticeList(jsonData.list);
            } else {
                let filterList = jsonData.list.filter((object) => object.code === code); //[{}, {}] 메뉴 버튼 누르면 해당 코드에 맞는 데이터 출력
                showNoticeList(filterList);
            }
        })
        .catch(error => console.log(error))
    // 2. 테이블 출력코드 생성
    // 3. 화면 출력
}

/*************************************************
 *             화면 출력 함수
 *************************************************/
function showNoticeList(list) {
    let output = `
    <thead>
        <tr>
            <th>번호</th>
            <th>구분</th>
            <th>제목</th>
            <th>등록일</th>
            <th>조회수</th>
        </tr>
    </thead>
    <tbody>
`;
    list.forEach((notice, i) => {
        output += `
    <tr>
        <td>${list.length - i}</td> 
        <td>${notice.type}</td>
        <td><a href="#">${notice.title}</a></td>
        <td>${notice.date}</td>
        <td>${notice.hits}</td>
    </tr>

`; // list.length - i => 번호 반대로 출력하기위함
    })
    output += `</tbody>
    <tfoot>
        <tr>
            <td colspan="5">1 2 3 4 5 >> </td>
        </tr>
    </tfoot>
`;
    document.querySelector("table").innerHTML = output;
}
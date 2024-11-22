/**
 * KOBIS 박스오피스 정보 호출 함수
 */
export async function kobisBoxOffice(type, searchDt) {
    const key = `5935a9ef2d7d40f1641ecb0fa87f346b`;
    const url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/search${type}BoxOfficeList.json?key=${key}&targetDt=${searchDt}`;
    let kobis = await fetch(url);
    let jsonData = await kobis.json();

    return jsonData;
};

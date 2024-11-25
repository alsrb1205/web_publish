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

/**
 * KOBIS 영화 리스트 호출 함수
 */
export async function kobisMovieList() {
    const key = `5935a9ef2d7d40f1641ecb0fa87f346b`;
    const curPage = 1;
    const itemPerPage = 100;
    const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${key}&curPage=${curPage}&itemPerPage=${itemPerPage}`;
    const movieList = await fetch(url);
    const jsonData = await movieList.json();

    return jsonData;
}

/**
 * KOBIS 영화 정보 상세 호출 함수
 */
export async function kobisMovieDetail(movieCd) {
    const key = `5935a9ef2d7d40f1641ecb0fa87f346b`;
    const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=${key}&movieCd=${movieCd}`;
    const movie = await fetch(url);
    const jsonData = await movie.json();

    return jsonData;
}
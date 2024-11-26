/** KMDB API 호출 */
export async function kmdb(type, value, title) {
    const serviceKey = `8CZ2UOB2E04XCEZ5E9F0`;
    let url = `https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y&${type}=${value}&title=${title}&ServiceKey=${serviceKey}`;

    let api = await fetch(url);
    let jsonData = await api.json();

    return jsonData;    
}
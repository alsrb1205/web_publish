// 1. text 배열을 입력받아, 길이가 3자 이상인 text들을 새로운 배열 객체로 생성하여 반환
const textFilter = (object) => {
    return object.filter((text) => text.length >= 3);
};
const textFilter2 = (object) => {
    let result = object.filter((text) => text.length >= 3);
    return result;
};

let textArray = ['abc', 'asdasd', 'qwer', 'a', 'b', 'cd'];
let result = textFilter(textArray);
console.log(result);

// 2. 숫자 배열을 입력받아, 짝수만 필터링하여 출력하는 함수
const evenNumber = (array) => {
    return array.filter((number) => !(number % 2)); // 짝수%2 의 나머지는 0이고 false이기때문에 버려진다. !를 붙여 true로 변환
};
// 홀수
const oddNumber = (array) => {
    return array.filter((number) => number % 2)
}

let numberArray = [1, 2, 3, 4, 5];
console.log(evenNumber(numberArray));
console.log(oddNumber(numberArray));

// 3. 사원의 아이디를 받아서, 7자리 번호를 랜덤하게 생성하여 아이디와 번호를 조합하여 사번 생성
// 아이디를 배열객체로 입력받고, 출력도 배열형태로 출력
const createEmpNumber = (array) => {
    // 중복된 데이터 처리 (Set을 Array로)
    let array2 = new Set(array);
    return Array.from(array2).map((id) => id.concat('_', Math.floor(Math.random() * 10000000)));
}
const employeeIds = ['hong', 'test', 'asd', 'test1234', 'hong', 'test', 'asd', 'test1234'];
const employeeNumbers = createEmpNumber(employeeIds);
console.log(employeeNumbers);

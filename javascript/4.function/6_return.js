// 함수의 실행결과 반환 키워드 :: return
function add(a, b) {
    // console.log(parseInt(a)+parseInt(b));
    return (parseInt(a) + parseInt(b));
}
let result = add(1, 2);
console.log(result);

// 이름, 나이를 매개변수로 입력하여, 객체를 생성한 후
// 반환하는 함수를 정의해주세요

let resultObj = createObject('홍길동', 30);
console.log(resultObj);
console.log(resultObj.name);
console.log(resultObj.age);


function createObject(name, age) { //어느 위치에 정의해도 적용된다
    let obj = {
        name: name,
        age: age
    };
    return obj; // obj의 주소값 반환
}

// 두 수를 입력받아 곱한값을 출력하는 함수를 작성해주세요
// 두 수는 0보다 커야함
// function multi(a, b) {
//     if (a > 0 && b > 0) {
//         return (parseInt(a) * parseInt(b));
//     }
//     console.log('0보다 커야 합니다.');
//     return;
// }
// let multiResult = multi(1, 13);
// console.log(multiResult);

function multi(a, b) {
    let result = 0;
    if (a > 0 && b > 0) {
        result = parseInt(a) * parseInt(b);
    }else{
        result ='0보다 커야 합니다.';
    }
    return result;
}
let multiResult = multi(1, 13);
console.log(multiResult);

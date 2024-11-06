/*
    변수 선언 : var, let, const
    형식 : (var, let, const) 변수명 = 데이터값;
*/

// name 이라는 변수를 선언하고 홍길동 이름으로 초기화합니다.
// age 변수를 선언하고, 20으로 초기화합니다.
let name = "홍길동";
let age = 20;
const address = "서울시";


// 공유 으로 바꿔주세요.
name = "공유";
age = '서울시';
age = 30;
// address = "부산시"; //const로 다른값 할당 불가!!!
// let age =40; //let으로 재선언 불가!!!

// name, age 변수의 값을 콘솔에 출력
console.log(name);
console.log(age);
console.log(address);
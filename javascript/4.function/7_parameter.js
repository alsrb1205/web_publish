// 함수의 값 전달 인자
// parameter,argument, 매개변수
function add(a, b) {
    return a + b;
}
function add2(...numbers) { // Spread operator (전개 구문)
    return numbers
}
function add3(a,b, ...datas) { // a, b 를 제외한 나머지 datas 는 배열로 저장된다.
    console.log(a);
    console.log(b);
    console.log(datas);
}
// 함수 호출
let sum = add(100, 200);
let sum2 = add2(400,3,23,4,1,1,2,34)


console.log(sum);
console.log(sum2);
add3(1,2,3,4,5,6,7);

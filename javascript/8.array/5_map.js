// 순회 메소드가 적용되는 map 함수는 파라미터 인자로 콜백함수를 입력받아,
// 처리한 결과를 새로운 배열객체로 생성하여 반환함!!
let numbers = [1, 2, 3, 4, 5];
let fnumbers = [1.901, 2.002, 3.03, 4.04, 5.05];
//numbers 배열요소에 각각 10을 곱한 결과 출력
let numbers2 = numbers.map((x) => x * 10); // []
console.log(numbers2);

//fnumbers 배열 요소를 모두 정수로 변환
let fnumbers2 = fnumbers.map((x) => Math.trunc(x))
// let fnumbers2 = fnumbers.map(Math.trunc); // 생략하여 사용가능
console.log(fnumbers2);

// 배열의 요소로 Object literal 값이 있는 경우
let objects = [
    { name: "홍길동", age: 20 },
    { name: "김철수", age: 21 },
    { name: "최영희", age: 22 },
];
objects.forEach((obj, i) => { console.log(i, obj) });

// 홍길동, 최영희 이름을 가진 학생정보만 배열출력
let objects2 = objects.map((obj) => {
    let rObj = {};
    if (obj.name === "홍길동") {
        rObj = obj;
    }
    else if (obj.name === "최영희") {
        rObj = obj;
    }
    return rObj;
}
); // [{}]
console.log(objects2);


var kvArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 },
];

var reformattedArray = kvArray.map(function (obj) {
    var rObj = {};
    rObj[obj.key] = obj.value;
    return rObj;
});
console.log(kvArray);

console.log(reformattedArray);

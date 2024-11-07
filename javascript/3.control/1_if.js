// 제어문 - 조건문 : if, while, do~while
// if(조건식:비교연산자포함){ 조건식이 참인 경우 실행; }
// if(조건식){ 조건식이 참인 경우; } else { 조건식이 거짓인 경우; }
// 삼항 연산자 : (조건식) ? 참인 경우 : 거짓인 경우;
// if(조건식1){ 조건식1이 참일때; } else if(조건식2){ 조건식2가 참일때; } ... else { 모든 조건식에 해당되지 않을 때; }

// 입력되는 과일명이 apple 인 경우에는 사과이모지 출력
// 사과 이외의 과일은 이름만 출력
let fruit = "apple";
if (fruit === "apple") {
    console.log('🍎');
} else {
    console.log(fruit);
}

// 위의 조건식을 삼항연산자로 작성
let display = undefined;
(fruit === "apple") ? (display='🍎') : (display=fruit) ;
console.log(display);

// 점심메뉴 : 피자, 햄버거 중 선택한 이모지 출력

let menu = "undefined";
menu = 'pizza';
if (menu === "pizza"){
    console.log('🍕');
} else {
    console.log('🍔');
}

let choiceMenu = undefined;
(menu === "pizza") ? choiceMenu='🍕' : choiceMenu='🍔';
console.log(choiceMenu);

// 학생명이 홍길동, 홍길순, 김영희 인지 체크하여
// 해당하는 경우 이름을 출력하고, 
// 해당하지 않는 경우 '해당 학생 없음' 으로 출력
// 출력포맷 : 실행결과 ==> 

    let student = undefined;
    let result = undefined;
    student = "홍길동";
    if (student === "홍길동"){
        // console.log(`실행결과 ==> ${student}`);   
        result = student;
    } else if (student === "홍길순"){
        // console.log(`실행결과 ==> ${student}`);
        result = student;
    } else if (student === "김영희"){
        // console.log(`실행결과 ==> ${student}`);
        result = student;
    } else{
        // console.log(`실행결과 ==> 해당 학생 없음`);
        result = '해당 학생 없음';
    }
    console.log(`${result}`);
    
    // 여러줄의 로직이 필요한 경우에는 삼항연산자 사용 불가
    


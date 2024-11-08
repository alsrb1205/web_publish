// 제어문 - 조건문 : switch(조건) ~ case

/* 
    switch(숫자, 문자){
        case 숫자,문자 : 
            실행문;
            break;
        case 반복~~
        default :
            실행문;
    }

*/

// 임의의 숫자를 입력받아 
// 짝수이면 빨간사과, 홀수이면 초록사과를 출력해주세요
//  홀수 짝수 이외의 값이 나올 수 없기 때문에 효율적이지 않다.
let number = 100;
let result = undefined;
switch(number%2){
    case 0 :
        result = '🍎';
        break;
    case 1 :
        result = '🍏';
        break;
    default : 
        result = '해당과일없음';
}
console.log(result);



// 0: 월요일, 1: 화요일, 2: 수요일,....
let usage = `[0]월요일,[1]화요일,[2]수요일...`
let day = 1;
let resultDay = undefined;
switch(day){
    case 0 :
        resultDay = "월요일"; break;
    case 1 :
        resultDay = "화요일"; break;
    case 2 :
        resultDay = "수요일"; break;
    case 3 :
        resultDay = "목요일"; break;
    case 4 :
        resultDay = "금요일"; break;
    case 5 :
        resultDay = "토요일"; break;
    case 6 :
        resultDay = "일요일"; break;
    default :
        console.log(`사용법: ${usage}`);         
}
if(!(resultDay === undefined)){
    console.log(`선택한 요일은 [${resultDay}] 입니다`);
}






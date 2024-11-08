// 임의의 숫자를 입력받아 
// 짝수이면 빨간사과, 홀수이면 초록사과를 출력해주세요

// 1. 숫자 입력받기
let number = 3;
result =undefined;
// 2. 숫자 체크(짝수,홀수)
//    결과에 따라 값 입력
if(number % 2)  result = '🍏';
// if((number % 2) === 0) 
// 1:true 0:false기 때문에 위와같은 식으로 쓰지 않아도 된다.
// 짝수:true 홀수:false
else result = '🍎';


// 3. 값 출력
console.log(결과=`${result}`);

// 삼항연산자 : () ? : ;
let choice = undefined;
(!(number%2)) ? choice='🍎' : choice='🍏' ;
console.log(choice);

// 삼항연산자 코드 줄이기
let emoji = (!(number%2)) ? '🍎' : '🍏' ;
console.log(emoji);



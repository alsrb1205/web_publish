// 논리연산자 : &&, ||
/*
    (논리식1) && (논리식2) = 결과값
      true        true    = true
      true        false   = false
      false        true   = false
      false       false   = false

    (논리식1) || (논리식2) = 결과값
      true        true    = true
      true        false   = true
      false        true   = true
      false       false   = false

*/

let a = 1;
let b=2;
console.log((a<b)&&(b>a)); // true
console.log((a<b)&&(b<a)); // false
console.log((a===b)&&(b>a)); // false
console.log((a===b)&&(b<a)); // false

console.log((a<b)||(b>a)); // true
console.log((a<b)||(b<a)); // true
console.log((a===b)||(b>a)); // true
console.log((a===b)||(b<a)); // false

// 임의의 숫자를 입력받아, 1~9 까지의 범위에 포함되면 출력
let number = 11;
if((number<10) && (number>0)){
    // 숏컷연산 : &&연산인 경우 false를 앞에
    console.log(`number는 사용가능한 숫자[${number}]입니다.`);
    
} else{    
    console.log(`number를 다시 입력해주세요.`);

}

// 임의의 숫자를 입력받아, 0보다 크면 출력
let number2 = 2;
if((number2>0) || (number2<10)){
    // 숏컷연산 : ||연산인 경우 true를 앞에
    console.log(`number2는 사용가능한 숫자[${number2}]입니다.`);
    
} else{    
    console.log(`number2를 다시 입력해주세요.`);

}



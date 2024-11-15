// String 클래스의 메소드 정리
let name = "홍길동";
let sname = new String("홍길동");
console.log(typeof name, typeof sname);
console.log(name === sname.valueOf());

let text = "Hello JavaScript~~~!!";
console.log(text.charAt(6));
console.log(text[18]);
console.log(text.indexOf('J'));
console.log(text.toUpperCase());
console.log(text.toLowerCase());



//  Welcome~ Hello JavaScript~~~!!
console.log("Welcome~".concat(text));

// 입력폼 -->    -->DB 저장시 소문자 저장

// 문자열 추출
console.log(text.substring(0, 2)); // end자릿수 전까지 추출
console.log(text.substring(6, 10)); // end자릿수 전까지 추출
console.log(text.slice(0, 2)); // end자릿수 전까지 추출
console.log(text.slice(4));
console.log(text.slice(-4));

// 문자열 공백 삭제 
text = '      JavaScript!!!!!       '
console.log(text.trim());

// 구분자를 이용하여 문자열 추출

const fruit = '🍎,🍋,🍏,🍊';
const fruitArray = fruit.split(',');
console.log(fruit);
console.log(fruitArray);



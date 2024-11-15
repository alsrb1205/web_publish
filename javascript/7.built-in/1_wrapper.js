// 기본(원시) 데이터타입(Primitive DataType) - number, string, boolean...
// 기본 데이터타입을 클래스로 정의한 것을 wrapper 클래스 라고 한다.

/** Number class */
let a = '123';
if(typeof a ==='string')a = parseInt(a);
if (a===123)console.log(a);

// number타입으로 변환
if(Number("123")===123) console.log(`a=>${a}`);

let maxValue = Number.MAX_VALUE;
let minValue = Number.MIN_VALUE;

console.log(maxValue);
console.log(minValue);

let x = 100;
let y = new Number(100);
console.log(typeof x); // number
console.log(typeof y); //object 
console.log(x===y); // false가 나오는 이유 정리! y는 Number객체를 생성한 것이기 때문에
console.log(x===y.valueOf()); //valueOf : 값만 비교

/** String class + Template literal(``) */
let str = "hello~";
let str2 = new String("hello~");
console.log(typeof str);
console.log(typeof str2);
console.log(str=== str2);
console.log(str=== str2.valueOf());

/** Boolean class */
let flag = true;
let flag2 = new Boolean(true);
console.log(typeof flag);
console.log(typeof flag2);
console.log(flag=== flag2);
console.log(flag=== flag2.valueOf());

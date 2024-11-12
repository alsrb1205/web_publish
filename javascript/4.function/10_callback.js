// 콜백함수는 함수 호출시 파라미터 인자로 제공되는 함수 형식을 의미함

const job = (a, callback) => {
    callback(a);
}

const job2 = (a,b, callback) => {
    console.log('asdasd');
    
    callback(a,b);
}

const print = (a) => console.log(a);

const printAll = (a, b) => {
    console.log(a);
    console.log(b);
}

job(100,print);
job2(100,200, printAll);

function greet(name, callback) {
    console.log(`Hello, ${name}`);
    callback();
}

greet("Alice", function() {
    console.log("Callback 함수가 실행되었습니다.");
});

// setTimeout 함수 호출
setTimeout((second) => console.log(`setTimeout ${second}초 후 실행`),1000,1); //webapi에 있다가 1초후 나옴

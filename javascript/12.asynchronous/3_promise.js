// 빌트인 클래스인 Promise를 통해 비동기식 처리
let promise1 = new Promise((resolve, reject)=>{
    // 실행할 비동기식 로직
    setTimeout(()=>{
        resolve('success');
        // reject('fail');
    },3000);
});

promise1
    .then((result)=>{console.log('3초 경과!!!');}) // 성공한 경우 시간 경과후 callback queue에 들어가는 실행함수 정의
    .catch((error)=>{console.log('error');}); // 실패한 경우

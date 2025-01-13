// readme.txt 파일을 읽어서 내용을 화면에 출력
const fs = require('fs');
const fsp = require('fs').promises;

// fs.readFile('파일 경로', 파일을 읽은 후 실행 함수::콜백함수 () => {});
fs.readFile('./readme.txt', (err, data) => {
    if (err) {
        console.log('파일을 읽어오지 못했습니다');
    }
    else {
        console.log(data);
        console.log(data.toString());
    }
})
// 프로미스 타입으로 리턴
fsp.readFile('./readme.txt')
    .then((data) => {
        console.log('fsp =>',data.toString());
    })
    .catch((err) => {
        console.log('fsp=>','파일을 읽어오지 못했습니다')
    });
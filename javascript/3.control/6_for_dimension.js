// 중첩 for문 : 이차원 형태의 저장소 데이터 출력
/*
    1(1,1) 2(1,2) 3(1,3)
    4(2,1) 5(2,2) 6(2,3)

    // 행, 열

    for(){ 행
        for(){ 열
        }
    } 
*/
// \t : tab키
for (let i = 1; i < 3; i++) {
    let rows = '';
    for (let j = 1; j < 4; j++) {
        if (i == 1) {
            rows += `${j}\t`;
        } else {
            rows += `${j + 3}\t`;
        }
    }
    console.log(rows);
}

console.log('...........................');


for (let i = 0; i < 5; i++) {
    let rows = '';
    for (let j = 1; j < 4; j++) {
        rows += `${i * 3 + j}\t`;
    }
    console.log(rows);
}


console.log('...........................');



let count = 1; // for문 밖에서 선언해줘야 함
for (let i = 1; i < 6; i++) {
    let rows = '';
    for (let j = 1; j < 4; j++) {
        rows += `${count++}\t`
    }
    console.log(rows);
}


// 구구단 2단 출력

for (let i = 1; i <=9; i++) {
    console.log(`3*${i}=${i * 3}`);
}
// 구구단 2단 출력

for (let i = 1; i <=9; i++) {
    console.log(`2*${i}=${i * 2}`);
}

// 2단~9단 출력
// console.clear();

for(let i=1;i<=9;i++){  // 1~9
    let rows = '';
    for(let j=2;j<=9;j++){  //2~9
        rows+= `[${j} * ${i} = ${j*i}]\t`
    }
    console.log(rows);
}


// console.clear();

// 별찍기
for (let i = 1; i <= 5; i++) {
    let rows = '';
    for (let j = 1; j <= i; j++) {
        rows += `${'*'}`
    }
    console.log(rows);
}

// 반대방향
for (let i = 5; i >=1; i--) {
    let rows = '';
    for (let j = i; j >= 1; j--) {
        rows += '🍕';
    }
    console.log(rows);
}
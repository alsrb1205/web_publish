// 구구단 3~5단
let start = 3;
let finish = 5;
for (let row= 1; row<= 9; row++) {
    let output = '';
    for (let col = start; col <= finish; col++) {
        output += `[${col} * ${row} = ${col * row}]\t`
    }
    console.log(output);
}
// 별

for (let row= 1; row<= 3; row++) {
    let output = '';
    for (let col = 1; col <= row; col++) {
        output += '*';
    }
    console.log(output);
}


// 초록사과 3열만 빨간사과

for (let row= 1; row<= 5; row++) {
    let output = '';
    for (let col = 1; col <= row; col++) {
        if (row=== 3) {
            output += '🍎\t';
        } else {
            output += '🍏\t';
        }
    }
    console.log(output);
}
// 종료되는 시점을 알고 있을 때
/**
 *      while (조건식){
 *            실행문;
 *      }
 */

// 1~5 까지 출력
// 3이면 종료
for (let i = 1; i <= 5; i++) {
    if (i === 3) break;
    console.log(`i = ${i}`);
}

let count = 1;
while (count <= 5) {
    if (count === 3) break;
    console.log(`count = ${count}`);
    count++; // 조건식에 증감식이 없기 때문에 무한루프에 빠지지 않기위해
}

// 메뉴 선택
let flag = true;
let menu = 2;
while (flag) {
    console.log(`1 : 🍕\t 2 : 🍔\t 0: 종료 `);
    if (menu === 1) {
        console.log(`선택하신 메뉴는 🍕 입니다.`);
        // while loop 자연스럽게 종료!!       
        flag = false;
    } else if (menu === 2) {
        console.log(`선택하신 메뉴는 🍔입니다`);
        // while loop 자연스럽게 종료!!
        flag = false;
    } else if (menu === 0) {
        console.log(`선택을 종료합니다.`);
        // while loop 자연스럽게 종료!!
        flag = false;
    }
}
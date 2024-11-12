// 모듈, 라이브러리는 공통된 기능을 구현하는 함수들의 집합이다.
// export 키워드를 통해 전역에서 사용할 수 있도록 함

// 구구단을 출력하는 함수 생성
export function gugudan() {
    for (let row = 1; row <= 9; row++) {
        let output = '';
        for (let col = 2; col <= 9; col++) {
            output += `${col}*${row}=${row * col}\t`;
        }
        console.log(output);
    }
}

// 구구단 선택 함수 형식 : start~end 단 출력
// gugudan(start, end); start단 부터 end 단 까지
// 입력되는 start는 0보다 커야 한다.
// end는 10단 이상 출력되지 않도록 한다.
export function selectGugudan(start, end) {
    for (let row = 1; row <= 9; row++) {
        let output = '';
        for (let col = start; col <= end; col++) { // col에 start end값을 넣는다.
            output += `${col}*${row}=${row * col}\t`;
        }
        console.log(output);
    }
}

// 구구단 한 단만 출력
export function singleGugudan(dan) {
    for (let row = 1; row <= 9; row++) {
        let output = '';
        console.log(`${dan}*${row}=${row * dan}`);
    }
}

// fruitsTower('🍎',5); 5층짜리 탑 만들기
export function fruitsTower(emoji, floor) {
    for (let row = 1; row <= floor; row++) {
        let output = '';
        for (let col = 1; col <= row; col++) {
            output += emoji;
        }
        console.log(output);
    }
}

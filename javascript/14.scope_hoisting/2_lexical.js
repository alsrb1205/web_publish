// lexical(렉시컬) - 실행컨텍스트안에 포함된 개념으로 스코프별로 메모리를 효율성있게 관리하는 영역, 변수선언, 실행코드, 외부호출 코드
// 콜스택(Call stack) - 호출되는 코드(함수)를 순차적으로 실행
// 변수의 선언시 let const 를 활용하여 정확한 스코프 범위 설정 중요!!!
{
    let a = 10;
    console.log(`a --> ${a}`);
    console.log(aa);

    {
        let b = 20;
        var aa = 100; // var는 전역으로 선언됨
        console.log(`b --> ${b}`);
        {
            let c = 30;
            console.log(`c --> ${c}`);
            console.log(`a --> ${a}`);
            console.log(`b --> ${b}`);
        } // level 3
    } // level 2 
} // level 1
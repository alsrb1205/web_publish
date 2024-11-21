import sum, { sub, mul, div } from "./commons.js"; // defalut 함수는 안묶어도됨
calcForm();

function calcForm() {
    let output = `
        <h1>DHTML-Calculator</h1>
        <ul>
            <li>
                <input type="text" id="number1" placeholder="첫번째 숫자">
                <input type="text" id="number2" placeholder="두번째 숫자">
            </li>
            <li>
                <button type="button" class="button" data-operation="sum">➕</button>
                <button type="button" class="button" data-operation="sub">➖</button>
                <button type="button" class="button" data-operation="mul">✖</button>
                <button type="button" class="button" data-operation="div">➗</button>
            </li>
            <li>
                <h3 id="result">Result : </h3>
            </li>
        </ul>
`;
    document.querySelector('#content').innerHTML = output;

    let buttonList = document.querySelectorAll('.button');
    buttonList.forEach((button) => {
        button.addEventListener('click', () => {
            let number1 = document.querySelector('#number1').value;
            let number2 = document.querySelector('#number2').value;
            let result = 0;
            let operation = button.dataset.operation;
            switch (operation) {
                case 'sum': result = sum(number1, number2); break;
                case 'sub': result = sub(number1, number2); break;
                case 'mul': result = mul(number1, number2); break;
                case 'div': result = div(number1, number2); break;
            }
            console.log(result);
            document.querySelector("#result").textContent = `Result : ${result}원`;
        });
    });

}


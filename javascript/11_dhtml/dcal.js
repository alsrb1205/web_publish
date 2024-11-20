window.addEventListener('DOMContentLoaded', function() {
    calcForm();
})

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
            <h3>Result : </h3>
        </li>
    </ul>
`;
document.querySelector('#content').innerHTML = output;
}
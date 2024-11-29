/*************************************************
 *              아이디, 패스워드 실시간 체크
 *************************************************/
function handleChange(event) {
    const idMsg = document.querySelector('#error-msg-id');
    const pwdMsg = document.querySelector('#error-msg-pwd');
    if (event.target.id === "id") {
        (event.target.value.trim().length !== 0) ? idMsg.style.color = 'green' : idMsg.style.color = 'red';
    } else {
        (event.target.value.trim().length !== 0) ? pwdMsg.style.color = 'green' : pwdMsg.style.color = 'red';
    }
}

/*************************************************
 *              로그인 폼 체크
 *************************************************/
function loginFormCheck() {
    const id = document.querySelector("#id");
    const pwd = document.querySelector("#pwd");
    const msgId = document.querySelector('#error-msg-id')
    const msgPwd = document.querySelector('#error-msg-pwd')
    if (id.value === '') {
        msgId.textContent = '아이디를 입력해주세요';
        msgId.style.fontSize = '12px';
        msgId.style.color = 'red';
        msgId.style.paddingTop = '10px';
    } else if (pwd.value === '') {
        msgPwd.textContent = '비밀번호를 입력해주세요';
        msgPwd.style.fontSize = '12px';
        msgPwd.style.color = 'red';
        msgPwd.style.paddingTop = '10px';
    } else {
        alert('입력 완료')
    }
}

/*************************************************
 *              회원가입 폼 체크
 *************************************************/
function joinFormCheck() {
    const id = document.querySelector("#id");
    const pwd = document.querySelector("#pwd");
    const cpwd = document.querySelector("#cpwd");
    const name = document.querySelector("#name");
    const phone = document.querySelector("#phone");
    const email = document.querySelector("#email");
    const emaildomain = document.querySelector("#emaildomain");
    const idCheckResult = document.querySelector("#idCheckResult")

    const idMsg = document.querySelector("#error-msg-id");
    const pwdMsg = document.querySelector("#error-msg-pwd");
    const cpwdMsg = document.querySelector("#error-msg-cpwd");
    const nameMsg = document.querySelector("#error-msg-name");
    const phoneMsg = document.querySelector("#error-msg-phone");
    const emailMsg = document.querySelector("#error-msg-email");

    if (id.value === "") {
        idMsg.style.color = "red";
        id.focus();
    } else if (pwd.value === "") {
        pwdMsg.style.color = "red";
        pwd.focus();
    } else if (cpwd.value === "") {
        cpwdMsg.style.color = "red";
        cpwd.focus();
    } else if (name.value === "") {
        nameMsg.style.color = "red";
        name.focus();
    } else if (phone.value === "") {
        phoneMsg.style.color = "red";
        phone.focus();
    } else if (email.value === "") {
        emailMsg.style.color = "red";
        email.focus();
    } else if (emaildomain.value === "default") {
        emaildomain.style.outlineColor = "red";
        emaildomain.focus();
    } else if (idCheckResult.value === "default") {
        alert("아이디 중복체크를 진행해주세요")
    }
    else {
        alert('가입 성공')
    }
}

function handleChangeJoin(event) {
    const idMsg = document.querySelector("#error-msg-id");
    const pwdMsg = document.querySelector("#error-msg-pwd");
    const cpwdMsg = document.querySelector("#error-msg-cpwd");
    const nameMsg = document.querySelector("#error-msg-name");
    const phoneMsg = document.querySelector("#error-msg-phone");
    const emailMsg = document.querySelector("#error-msg-email");


    if (event.target.id === "id") {
        (event.target.value.trim().length !== 0) ? idMsg.style.color = 'green' : idMsg.style.color = 'red';
    } else if (event.target.id === "pwd") {
        (event.target.value.trim().length !== 0) ? pwdMsg.style.color = 'green' : pwdMsg.style.color = 'red';
    } else if (event.target.id === "cpwd") {
        (event.target.value.trim().length !== 0) ? cpwdMsg.style.color = 'green' : cpwdMsg.style.color = 'red';
    } else if (event.target.id === "name") {
        (event.target.value.trim().length !== 0) ? nameMsg.style.color = 'green' : nameMsg.style.color = 'red';
    } else if (event.target.id === "phone") {
        (event.target.value.trim().length !== 0) ? phoneMsg.style.color = 'green' : phoneMsg.style.color = 'red';
    } else if (event.target.id === "email") {
        (event.target.value.trim().length !== 0) ? emailMsg.style.color = 'green' : emailMsg.style.color = 'red';
    } else if (event.target.id === "emaildomain") {
        (event.target.value.trim() !== "default") ? emaildomain.style.outlineColor = 'green' : emaildomain.style.outlineColor = 'red';
    }
}
/*************************************************
 *             아이디 중복 체크
 *************************************************/

function idDupCheck(event) {
    const did = "test";
    const id = document.querySelector("#id");
    const idMsg = document.querySelector("#error-msg-id");

    if (id.value === "") {
        idMsg.style.color = "red";
        id.focus();
    } else {
        if (did === id.value.trim()) {
            alert('이미 사용중인 아이디입니다.')
            id.focus();
        } else {
            alert('사용이 가능한 아이디입니다.')
            document.querySelector("#idCheckResult").value = "success";
            // event.target.style.backgroundColor = "gray";
        }
    }
}
/*************************************************
 *             패스워드/패스워드 확인 체크
 *************************************************/
function passwordCheck() {
    const pwd = document.querySelector("#pwd");
    const cpwd = document.querySelector("#cpwd");
    const pwdMsg = document.querySelector("#error-msg-pwd");
    const cpwdMsg = document.querySelector("#error-msg-cpwd");
    if (pwd.value === "") {
        pwdMsg.style.color = "red";
        pwd.focus();
    } else if (cpwd.value === "") {
        cpwdMsg.style.color = 'red';
        cpwd.focus();
    } else {
        if (pwd.value === cpwd.value) {
            alert('패스워드가 동일합니다')
        } else {
            alert('패스워드가 다릅니다. 다시 입력해주세요')
            pwd.value = "";
            cpwd.value = "";
            pwdMsg.style.color = "red";
            cpwdMsg.style.color = "red";
            pwd.focus();
        }
    }
}

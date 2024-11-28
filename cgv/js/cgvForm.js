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
        msgId.style.fontSize ='12px';
        msgId.style.color ='red';
        msgId.style.paddingTop ='10px';
    } else if (pwd.value === '') {
        msgPwd.textContent = '비밀번호를 입력해주세요';
        msgPwd.style.fontSize ='12px';
        msgPwd.style.color ='red';
        msgPwd.style.paddingTop ='10px';

    } else {
    }
}
/***********************************
 *          로그인 폼 체크
 ************************************/
// export const validateLogin = (refs) => {
//     let result = true;
//     if (refs.idRef.current.value === '') {
//         alert('아이디를 입력해주세요');
//         refs.idRef.current.focus();
//         result = false;
//     } else if (refs.pwdRef.current.value === '') {
//         alert('패스워드를 입력해주세요');
//         refs.pwdRef.current.focus();
//         result = false;
//     }
//     return result;
// }
export const validateLogin = ({ idRef, pwdRef }, msgRef) => {
    let result = true;
    if (idRef.current.value === '') {
        msgRef.current.style.setProperty('color', 'red');
        idRef.current.focus();
        result = false;
    } else if (pwdRef.current.value === '') {
        msgRef.current.style.setProperty('color', 'red');
        pwdRef.current.focus();
        result = false;
    } else {
        msgRef.current.style.setProperty('color', 'white');
    }
    return result;
}






/***********************************
 *          회원가입 폼 체크
 ************************************/
export const validateSignup = (refs, msgRefs) => {
    const refEntries = Object.entries(refs.current);
    const msgRefEntries = Object.entries(msgRefs.current);
    // refEntries 배열객체와 msgRefEntries 배열객체의 인덱스를 동일하게 체크한다
    for (let i = 0; i < refEntries.length; i++) {
        const item = refEntries[i];
        const name = item[0];
        const ref = item[1];

        // const msgItem = msgRefEntries[i];
        // const msgName = msgItem[0];
        // const msgRef = msgItem[1];

        // emaildomainMsgRef 를 임의로 추가하지 않고 사용하려면 위에 3줄을 지우고 이렇게 구성하면 된다.

        let msgItem, msgName, msgRef = null;
        if (i < refEntries.length - 1) {
            msgItem = msgRefEntries[i];
            msgName = msgItem[0];
            msgRef = msgItem[1]; // 데이터 입력폼의 메시지 객체 주소 
        }

        if (name !== 'emaildomainRef') {
            if (ref.current.value === '') {
                msgRef.current.style.setProperty('color', 'red');
                ref.current.focus();
                return false;
            } else {
                msgRef.current.style.setProperty('color', 'green');
            }
        } else if (name === 'emaildomainRef') {
            if (ref.current.value === 'default') {
                alert('이메일 주소를 선택해주세요');
                ref.current.focus();
                return false;
            }
        }
    }
    return true;
};
// let result = true;
// if (refs.idRef.current.value === '') {
//     alert('아이디를 입력해주세요');
//     refs.idRef.current.focus();
//     result = false;
// } else if (refs.pwdRef.current.value === '') {
//     alert('패스워드를 입력해주세요');
//     refs.pwdRef.current.focus();
//     result = false;
// } else if (refs.cpwdRef.current.value === '') {
//     alert('패스워드를 입력해주세요');
//     refs.cpwdRef.current.focus();
//     result = false;
// } else if (refs.cpwdRef.current.value != refs.pwdRef.current.value) {
//     alert('패스워드가 맞지 않습니다');
//     refs.cpwdRef.current.focus();
//     result = false;
// } else if (refs.nameRef.current.value === '') {
//     alert('이름을 입력해주세요');
//     refs.nameRef.current.focus();
//     result = false;
// } else if (refs.phoneRef.current.value === '') {
//     alert('번호를 입력해주세요');
//     refs.phoneRef.current.focus();
//     result = false;
// } else if (refs.emailRef.current.value === '') {
//     alert('이메일을 입력해주세요');
//     refs.emailRef.current.focus();
//     result = false;
// } else if (refs.domainRef.current.value === 'default') {
//     alert('도메인을 선택해주세요');
//     refs.domainRef.current.focus();
//     result = false;
// } else if ( document.querySelector("#idCheckResult").value === "default") {
//     alert('아이디 중복확인을 진행해주세요');
//     result = false;
// }
// return result;
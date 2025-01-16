/***********************************
 *          로그인 폼 체크
 ************************************/
export const validateLogin = (idRef, pwdRef) => {
    let result = true;
    if (idRef.current.value === '') {
        alert('아이디를 입력해주세요');
        idRef.current.focus();
        result = false;
    } else if (pwdRef.current.value === '') {
        alert('패스워드를 입력해주세요');
        pwdRef.current.focus();
        result = false;
    }
    return result;
}

/***********************************
 *          회원가입 폼 체크
 ************************************/
export const validateSignup = (refs, msgRefs) => {
    const refEntries = Object.entries(refs);
    const msgRefEntries = Object.entries(msgRefs);
    for (let i = 0; i < refEntries.length; i++) {
        const [name, ref] = refEntries[i];
        const [msgName, msgRef] = msgRefEntries[i];
        if (name !== 'domainRef') {
            if (ref.current.value === '') {
                msgRef.current.style.setProperty('color', 'red');
                ref.current.focus();
                return false;
            }
        } else if (name === 'domainRef') {
            if (ref.current.value === 'default') {
                alert('aaa');
                ref.current.focus();
                return false;
            }
        }
    }
    return true;
}
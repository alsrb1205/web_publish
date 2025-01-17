/***********************************
 *          로그인 폼 체크
 ************************************/
export const validateLogin = (idRef, pwdRef, msgRef) => {
    let result = true;
    if (idRef.current.value === '') {
        msgRef.current.style.setProperty('color','red');
        idRef.current.focus();
        result = false;
    } else if (pwdRef.current.value === '') {
        msgRef.current.style.setProperty('color','red');
        pwdRef.current.focus();
        result = false;
    } else {
        msgRef.current.style.setProperty('color','white');
    } 
    return result;
}

/***********************************
 *          회원가입 폼 체크
 ************************************/
export const validateSignup = (refs, msgRefs) => {
    const refEntries = Object.entries(refs.current);
    const msgRefEntries = Object.entries(msgRefs.current);

    for (let i = 0; i < refEntries.length; i++) {
        const [name, ref] = refEntries[i];
        let msgItem, msgName, msgRef = null;
        if(i<refEntries.length-1) {
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
                alert('aaa');
                ref.current.focus();
                return false;
            }
        }
    }
    return true;
}
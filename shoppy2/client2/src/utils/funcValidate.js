/***********************************
 *          로그인 폼 체크
 ************************************/
export const validateLogin = (idRef, pwdRef, msgRef) => {
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

    for (let i = 0; i < refEntries.length; i++) {
        const [name, ref] = refEntries[i];
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
                alert('도메인을 선택해주세요');
                ref.current.focus();
                return false;
            }
        }
    }
    return true;
}

export const handleDuplicateIdCheck = (idRef, idMsgRef, pwdRef, setIdCheckResult) => {
    const did = 'test';
    if (idRef.current.value === did) {
        alert('이미 사용중인 아이디입니다.');
        idRef.current.focus();
        return false;
    } else if (idRef.current.value === '') {
        idMsgRef.current.style.setProperty('color', 'red');
        idRef.current.focus();
        return false;
    } else {
        alert('사용 가능');
        setIdCheckResult('complete');
        pwdRef.current.focus();
        return false;
    }
};

export const handlePwdCheck = (pwdRef, pwdMsgRef, cpwdRef, cpwdMsgRef, nameRef) => {
    if (pwdRef.current.value === '') {
        pwdMsgRef.current.style.setProperty('color', 'red');
        pwdRef.current.focus();
        return false;
    } else if (cpwdRef.current.value === '') {
        cpwdMsgRef.current.style.setProperty('color', 'red');
        cpwdRef.current.focus();
        return false;
    } else if (pwdRef.current.value === cpwdRef.current.value) {
        alert('비밀번호가 일치합니다');
        nameRef.current.focus();
        return false;
    } else {
        alert('비밀번호가 다릅니다. 다시 입력해주세요.');
        pwdRef.current.value = '';
        cpwdRef.current.value = '';
        pwdRef.current.focus();
        return false;
    }
}

import axios from "axios";
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
            }
            else {
                msgRef.current.style.setProperty('color', 'green');
            }
        } else {
            if (ref.current.value === 'default') {
                alert('이메일 주소를 선택해주세요');
                ref.current.focus();
                return false;
            }
        }
    }

    return true;
};

export const handleDuplicateIdCheck = (idRef, idMsgRef, pwdRef, setIdCheckResult) => {
    if (idRef.current.value === '') {
        idMsgRef.current.style.setProperty('color', 'red');
        setIdCheckResult('default');
        idRef.current.focus();
        return false;
    } else {
        axios.post('http://localhost:9000/member/idcheck', { "id": idRef.current.value })
            .then(res => {
                if (res.data.result === 1) {
                    alert('사용중인 아이디입니다');
                    setIdCheckResult('default');
                    idRef.current.focus();
                    return false;
                } else {
                    alert('사용 가능');
                    setIdCheckResult('complete');
                    pwdRef.current.focus();
                    return false;
                }
            })
            .catch(err=>console.log(err))
    }
}

export const handlePwdCheck = (pwdRef, cpwdRef, nameRef, pwdMsgRef, cpwdMsgRef) => {
    if (pwdRef.current.value === '') {
        pwdMsgRef.current.style.setProperty('color', 'red');
        pwdRef.current.focus();
        return false;
    } else if (cpwdRef.current.value === '') {
        cpwdMsgRef.current.style.setProperty('color', 'red');
        cpwdRef.current.focus();
        return false;
    } else {
        if (pwdRef.current.value === cpwdRef.current.value) {
            alert('비밀번호가 동일합니다.');
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
}

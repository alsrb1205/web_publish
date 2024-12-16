/**
 * CgvLoginForm 유효성 체크 함수
 * @returns 
 */
//props 사용 불가!!!
export const validateForm = (param) => {
    let result = true;
    if (param.refs.idRef.current.value === '') {
        param.setErrorMsg({ ...param.errorMsg, ['id']: '아이디를 입력해주세요' })
        param.refs.idRef.current.focus()
        result = false;
    } else if (param.refs.pwdRef.current.value === '') {
        param.setErrorMsg({ ...param.errorMsg, ['pwd']: '패스워드를 입력해주세요' })
        param.refs.pwdRef.current.focus()

        result = false;
    }
    return result;
}
/**
 * Login2 컴포넌트 유효성 체크 함수
 */
export const validateLogin2 = (param) => {
    let result = true;
    if (param.idRef.current.value === '') {
        param.setErrorMsg({...param.errorMsg,['id']:'아이디를 입력해주세요'});
        param.idRef.current.focus()
        result = false;
    } else if (param.pwdRef.current.value === '') {
        param.setErrorMsg({...param.errorMsg,['pwd']:'패스워드를 입력해주세요'});
        param.pwdRef.current.focus()
        result = false;
    }
    return result;
};
/**
 * UserInfo 컴포넌트 유효성 체크 함수
 */

export const validateUserInfo = (param) => {
    let result = true;
    if (param.nameRef.current.value === '') {
        param.setErrorMsg({...param.errorMsg,['name']:'이름을 입력해주세요.'})
        param.nameRef.current.focus();
        result = false;
    } else if (param.addressRef.current.value === '') {
        param.setErrorMsg({...param.errorMsg,['address']:'주소를 입력해주세요.'})
        param.addressRef.current.focus();
        result = false;

    } else if (param.ageRef.current.value === '') {
        param.setErrorMsg({...param.errorMsg,['age']:'나이를 입력해주세요.'})
        param.ageRef.current.focus();
        result = false;
    }
    return result;
}
/**
 * CgvJoin 컴포넌트 유효성 체크 함수
 */
export const validateSignUp = (param) => {
    const fields = [
        { name: 'id', message: '아이디를 입력해주세요' },
        { name: 'pwd', message: '비밀번호를 입력해주세요' },
        { name: 'cpwd', message: '비밀번호를 입력해주세요' },
        { name: 'name', message: '이름을 입력해주세요' },
        { name: 'phone', message: '전화번호를 입력해주세요' },
        { name: 'email', message: '이메일을 입력해주세요' },
        { name: 'emaildomain', message: '이메일을 선택해주세요', defaultValue: 'default' }
    ];

    for (const field of fields){
        const ref = param.refs[`${field.name}Ref`];
        const value = ref.current.value;

        if(value === '' || ('defaultValue' in field && value === field.defaultValue)) {
            param.setErrorMsg({...param.errorMsg,[field.name]:field.message})
            ref.current.focus();
            return false;
        }
    }
    return true;
}

export const errorCheckSignUp =(name,value,errorMsg,setErrorMsg)=>{
    const names = [
        { name: 'id', message: '아이디를 입력해주세요' },
        { name: 'pwd', message: '비밀번호를 입력해주세요' },
        { name: 'cpwd', message: '비밀번호를 입력해주세요' },
        { name: 'name', message: '이름을 입력해주세요' },
        { name: 'phone', message: '전화번호를 입력해주세요' },
        { name: 'email', message: '이메일을 입력해주세요' },
        { name: 'emaildomain', message: '이메일을 선택해주세요', defaultValue: 'default' }

    ];

    names.map(item=>(item.name===name) ? (
        (value==='') ? setErrorMsg({...errorMsg,[item.name]:item.message}) : setErrorMsg({...errorMsg,[item.name]:''})
    ) : '')
}




// export const validateSignUp = (param) => {
//     let result = true;
//     if (param.refs.idRef.current.value === '') {
//         param.setErrorMsg({...param.errorMsg,['id']:'아이디를 입력해주세요'})
//         param.refs.idRef.current.focus()
//         result = false;
//     } else if (param.refs.pwdRef.current.value === '') {
//         param.setErrorMsg({...param.errorMsg,['pwd']:'비밀번호를 입력해주세요'})
//         param.refs.pwdRef.current.focus()
//         result = false;
//     } else if (param.refs.cpwdRef.current.value === '') {
//         param.setErrorMsg({...param.errorMsg,['cpwd']:'비밀번호를 입력해주세요'})
//         param.refs.cpwdRef.current.focus()
//         result = false;
//     } else if (param.refs.nameRef.current.value === '') {
//         param.setErrorMsg({...param.errorMsg,['name']:'이름을 입력해주세요'})
//         param.refs.nameRef.current.focus()
//         result = false;
//     } else if (param.refs.phoneRef.current.value === '') {
//         param.setErrorMsg({...param.errorMsg,['phone']:'전화번호를 입력해주세요'})
//         param.refs.phoneRef.current.focus()
//         result = false;
//     } else if (param.refs.emailRef.current.value === '') {
//         param.setErrorMsg({...param.errorMsg,['email']:'이메일을 입력해주세요'})
//         param.refs.emailRef.current.focus()
//         result = false;
//     } else if (param.refs.emaildomainRef.current.value === 'default') {
//         param.setErrorMsg({...param.errorMsg,['emaildomain']:'이메일을 선택해주세요'})
//         param.refs.emaildomainRef.current.focus()
//         result = false;
//     }
//     return result;
// }


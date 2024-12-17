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
        param.setErrorMsg({ ...param.errorMsg, ['id']: '아이디를 입력해주세요' });
        param.idRef.current.focus()
        result = false;
    } else if (param.pwdRef.current.value === '') {
        param.setErrorMsg({ ...param.errorMsg, ['pwd']: '패스워드를 입력해주세요' });
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
        param.setErrorMsg({ ...param.errorMsg, ['name']: '이름을 입력해주세요.' })
        param.nameRef.current.focus();
        result = false;
    } else if (param.addressRef.current.value === '') {
        param.setErrorMsg({ ...param.errorMsg, ['address']: '주소를 입력해주세요.' })
        param.addressRef.current.focus();
        result = false;

    } else if (param.ageRef.current.value === '') {
        param.setErrorMsg({ ...param.errorMsg, ['age']: '나이를 입력해주세요.' })
        param.ageRef.current.focus();
        result = false;
    }
    return result;
}
/**
 * SignUp 컴포넌트 유효성 체크 함수
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

    for (const field of fields) {
        const ref = param.refs[`${field.name}Ref`];
        const value = ref.current.value;

        if (value === '' || ('defaultValue' in field && value === field.defaultValue)) {
            param.setErrorMsg({ ...param.errorMsg, [field.name]: field.message })
            ref.current.focus();
            return false;
        }
    }
    return true;
}

/**
 * Signup 에러 체크 함수
 */
export const errorCheckSignUp = (name, value, errorMsg, setErrorMsg) => {
    const names = [
        { name: 'id', message: '아이디를 입력해주세요' },
        { name: 'pwd', message: '비밀번호를 입력해주세요' },
        { name: 'cpwd', message: '비밀번호를 입력해주세요' },
        { name: 'name', message: '이름을 입력해주세요' },
        { name: 'phone', message: '전화번호를 입력해주세요' },
        { name: 'email', message: '이메일을 입력해주세요' },
        { name: 'emaildomain', message: '이메일을 선택해주세요', defaultValue: 'default' }

    ];

    names.map(item => (item.name === name) ? (
        (value === '') ? setErrorMsg({ ...errorMsg, [item.name]: item.message }) : setErrorMsg({ ...errorMsg, [item.name]: '' })
    ) : '')
}

/**
 * SignUp3 컴포넌트 유효성 체크 함수
 */

export function validateFormSignUp3(refs) {
    const refEntries = Object.entries(refs);

    const msgs = { 'idRef': '아이디', 'passRef': '패스워드', }

    // !!! 배열.map() or 배열.forEach() 함수는 배열객체를 순회하는 것이 목적이므로 if 체크후 focus가 적용되지 않음 for of... 를 사용하는것이 적절

    for (const item of refEntries) {
        const name = item[0];
        const ref = item[1];
        if (ref.current.value === '') {
            alert(`${msgs[name]}을 입력해주세요`)
            ref.current.focus();
            return false;
        }
    }
    return true;
}

/**
 * SignUp2 아이디 중복체크 함수
 */

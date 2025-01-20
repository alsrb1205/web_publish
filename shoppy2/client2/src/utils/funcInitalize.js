import React, { useRef } from "react";


export function initSignup() {
    const names = ['id', 'pwd', 'cpwd', 'name', 'phone', 'emailname'];
    const namesKor = ['아이디', '비밀번호', '비밀번호 확인', '이름', '전화번호', '이메일'];
    const placeholdersKor = ['아이디(6~12자 이내)', '비밀번호 입력(문자,숫자,특수문자 포함 6~12자)', '비밀번호 확인', '이름', '전화번호', '이메일 주소'];
    const initFormData = names.reduce((acc, name) => {
        acc[name] = '';
        return acc;
    }, {});

    const labels = names.reduce((acc, name, i) => {
        acc[name] = namesKor[i];
        return acc;
    }, {});

    const placeholders = names.reduce((acc, name, i) => {
        acc[name] = placeholdersKor[i];
        return acc;
    }, {});

    return { names, initFormData, labels, placeholders };
}

export function useInitSignupRefs(names) {
    const refs = useRef(names.reduce((acc, name) => {
        acc[name.concat('Ref')] = React.createRef();
        return acc;
    }, {}));
    refs.current["emaildomainRef"] = useRef(React.createRef());

    const msgRefs = useRef(names.reduce((acc, name) => {
        acc[name.concat('MsgRef')] = React.createRef();
        return acc;
    }, {}));

    return { refs, msgRefs };
}




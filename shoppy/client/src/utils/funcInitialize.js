import React, { useRef } from "react";
/********************************************
 *  Signup 컴포넌트 초기화 작업 함수
 ********************************************/
export function initSignup() {
    const names = ['id', 'pwd', 'cpwd', 'name', 'phone', 'emailname'];
    const namesKor = ['아이디', '비밀번호', '비밀번호 확인', '이름', '전화번호', '이메일'];
    const placeholdersKor = ['아이디(6~12자 이내)', '비밀번호 입력(문자,숫자,특수문자 포함 6~12자)', '비밀번호 확인', '이름', '전화번호', '이메일 주소'];
    const initFormData = names.reduce((acc, name) => {
        acc[name] = ""; // {"id" : "", ...}
        return acc;
    }, {}); // 리턴 데이터 타입 정의(숫자일 경우 생략가능)

    const labels = names.reduce((acc, name, i) => {
        acc[name] = namesKor[i];
        return acc;
    }, {});

    const placeholders = names.reduce((acc, name, i) => {
        acc[name] = placeholdersKor[i];
        return acc;
    }, {});

    return { names, placeholders, labels, initFormData };
}


export function useInitSignupRefs(names) { // 커스텀 훅
    const refs = useRef(names.reduce((acc, name) => {
        acc[name.concat('Ref')] = React.createRef(); //useRef Hook 바로 호출 불가
        return acc;
    }, {}));
    refs.current.emaildomainRef = useRef(React.createRef());

    const msgRefs = useRef(
        names.reduce((acc, name) => {
            acc[name.concat('MsgRef')] = React.createRef();
            return acc;
        }, {}));

    return { refs, msgRefs };
}
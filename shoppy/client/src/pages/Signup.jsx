import React, { useRef, useState } from 'react';
import '../styles/signup.css';
import { validateSignup } from '../utils/funcValidate';
import { initSignup, useInitSignupRefs } from '../utils/funcInitialize';

export default function Signup() {
    const {names, placeholders, labels, initFormData} = initSignup();
    const {refs, msgRefs} = useInitSignupRefs(names);
    // const initFormData = { 'id': '', 'pwd': '', 'cpwd': '', 'name': '', 'phone': '', 'emailname': '', 'emaildomain': 'default' }
    // let initFormData = {};
    // names.forEach((name)=>{
    //         initFormData = {...initFormData,[name]:''} 
    //     });
        
    // const names = ['id', 'pwd', 'cpwd', 'name', 'phone', 'emailname'];
    // const namesKor = ['아이디','비밀번호','비밀번호 확인','이름','전화번호','이메일'];
    // const placeholdersKor = ['아이디(6~12자 이내)','비밀번호 입력(문자,숫자,특수문자 포함 6~12자)','비밀번호 확인','이름','전화번호','이메일 주소'];
    // const initFormData = names.reduce((acc,name)=>{
    //     acc[name] = ""; // {"id" : "", ...}
    //     return acc;
    // },{}); // 리턴 데이터 타입 정의(숫자일 경우 생략가능)

    // const labels = names.reduce((acc,name,i)=>{
    //     acc[name] = namesKor[i];         
    //     return acc;
    // },{});

    // const placeholders = names.reduce((acc,name,i)=>{
    //     acc[name] = placeholdersKor[i];         
    //     return acc;
    // },{});    

    
    // const refs = useRef(names.reduce((acc,name)=>{
    //     acc[name.concat('Ref')]=React.createRef(); //useRef Hook 바로 호출 불가
    //     return acc;
    // },{}));
    // refs.current["emaildomainRef"]=React.createRef();
    // // console.log(refs);
    
    // const msgRefs = useRef(
    //     names.reduce((acc,name)=>{
    //         acc[name.concat('MsgRef')]=React.createRef();
    //         return acc;
    //     },{})
    // );
        
    const [formData, setFormData] = useState(initFormData);

    // const msgRefs = {
    //     msgIdRef: useRef(null),
    //     msgPwdRef: useRef(null),
    //     msgCpwdRef: useRef(null),
    //     msgNameRef: useRef(null),
    //     msgPhoneRef: useRef(null),
    //     msgEmailRef: useRef(null),
    //     msgDomainRef: useRef(null)
    // }
    // const refs = {
    //     idRef: useRef(null),
    //     pwdRef: useRef(null),
    //     cpwdRef: useRef(null),
    //     nameRef: useRef(null),
    //     phoneRef: useRef(null),
    //     emailnameRef: useRef(null),
    //     domainRef: useRef('default')
    // }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateSignup(refs, msgRefs)) {
            console.log(formData);
        }
    };
    const handleChangeForm = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        // if (name === 'id') {
        //     setIdCheck('default'); // handleChangeForm에서 name이 "id"인 경우(즉, 아이디 입력 필드가 변경될 때), idCheck 상태를 "default"로 초기화하여 중복 확인 상태를 리셋한다.
        // }
    };
    // const idDupCheck = () => {
    //     const did = 'test';
    //     const id = document.querySelector('#id');
    //     if (id.value === did) {
    //         alert('사용중인 아이디입니다')
    //         id.focus();
    //         return false;
    //     } else if (id.value === '') {
    //         alert('아이디를 입력해주세요')
    //         id.focus();
    //         return false;

    //     } else {
    //         alert('사용 가능')
    //         setIdCheck('success');
    //     }
    // }

    return (
        <div className="content">
            <h1 className="center-title">SIGINUP</h1>
            <form onSubmit={handleSubmit} className="signup-form">
                <ul>
                    {/* start of map */}
                    {
                        names && names.map((name) =>
                            <li>
                                <label for="" ><b>{labels[name]}</b></label>
                                <span ref={msgRefs.current[name.concat('MsgRef')]}>{labels[name]}을 입력해주세요</span>
                                <div>
                                    {name === 'emailname' ? (
                                        <>
                                            <input type="text"
                                                name={name}
                                                // id={name}
                                                ref={refs.current[name.concat('Ref')]}
                                                onChange={handleChangeForm}
                                                placeholder={placeholders[name]} />
                                            <span>@</span>
                                            <select name="emaildomain"
                                                // id="emaildomain"
                                                ref={refs.current["emaildomainRef"]}
                                                onChange={handleChangeForm}>
                                                <option value="default">선택</option>
                                                <option value="naver.com">naver.com</option>
                                                <option value="gmail.com">gmail.com</option>
                                                <option value="daum.net">daum.net</option>
                                            </select>
                                        </>
                                    ) : (
                                        <>
                                            <input type={name ==='pwd'|| name ==='cpwd' ? 'password' : 'text'}
                                                name={name}
                                                // id={name}
                                                ref={refs.current[name.concat('Ref')]}
                                                onChange={handleChangeForm}
                                                placeholder={placeholders[name]} />
                                            {name === 'id' &&
                                                <>
                                                    <button type="button"
                                                    >중복확인</button>
                                                    <input type="hidden" id="idCheckResult" value='default' />
                                                </>
                                            }
                                        </>
                                    )}
                                </div>
                            </li>
                        )
                    }
                    {/* end of map */}
                    <li>
                        <button type="submit">가입하기</button>
                        <button type="reset">가입취소</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}
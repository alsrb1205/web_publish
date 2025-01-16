import React, { useRef, useState } from 'react';
import '../styles/signup.css';
import { validateSignup } from '../utills/funcValidate';

export default function Signup() {
    const initFormData = { 'id': '', 'pwd': '', 'cpwd': '', 'name': '', 'phone': '', 'emailname': '', 'emaildomain': 'default' }
    const [formData, setFormData] = useState(initFormData);
    const [idCheck, setIdCheck] = useState('default');
    const msgRefs = {
        msgIdRef: useRef(null),
        msgPwdRef: useRef(null),
        msgCpwdRef: useRef(null),
        msgNameRef: useRef(null),
        msgPhoneRef: useRef(null),
        msgEmailRef: useRef(null),
        msgDomainRef: useRef(null)
    }
    const refs = {
        idRef: useRef(null),
        pwdRef: useRef(null),
        cpwdRef: useRef(null),
        nameRef: useRef(null),
        phoneRef: useRef(null),
        emailRef: useRef(null),
        domainRef: useRef('default')
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateSignup(refs, msgRefs)) {
            console.log(formData);
        }
    }
    const handleChangeForm = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        if (name === 'id') {
            setIdCheck('default'); // handleChangeForm에서 name이 "id"인 경우(즉, 아이디 입력 필드가 변경될 때), idCheck 상태를 "default"로 초기화하여 중복 확인 상태를 리셋한다.
        }
    }
    const idDupCheck = () => {
        const did = 'test';
        const id = document.querySelector('#id');
        if (id.value === did) {
            alert('사용중인 아이디입니다')
            id.focus();
            return false;
        } else if (id.value === '') {
            alert('아이디를 입력해주세요')
            id.focus();
            return false;

        } else {
            alert('사용 가능')
            setIdCheck('success');
        }
    }

    return (
        <div className="content">
            <h1 className="center-title">SIGINUP</h1>
            <form onSubmit={handleSubmit} className="signup-form">
                <ul>
                    <li>
                        <label for="" ><b>아이디</b></label>
                        <span ref={msgRefs.msgIdRef}>아이디를 입력해주세요</span>
                        <div>
                            <input type="text"
                                name="id"
                                id="id"
                                ref={refs.idRef}
                                onChange={handleChangeForm}
                                placeholder="아이디 입력(6~20자)" />
                            <button type="button" onClick={idDupCheck}>중복확인</button>
                            <input type="hidden" id="idCheckResult" value={idCheck} />
                        </div>
                    </li>
                    <li>
                        <label for=""><b>비밀번호</b></label>
                        <span ref={msgRefs.msgPwdRef}>12자 이내의 비밀번호를 입력해주세요</span>
                        <div>
                            <input type="password"
                                name="pwd"
                                id="pwd"
                                ref={refs.pwdRef}
                                onChange={handleChangeForm}
                                placeholder="비밀번호 입력(문자,숫자,특수문자 포함 6~12자)" />
                        </div>
                    </li>
                    <li>
                        <label for=""><b>비밀번호 확인</b></label>
                        <span ref={msgRefs.msgCpwdRef}>비밀번호 확인을 입력해주세요</span>
                        <div>
                            <input type="password"
                                name="cpwd"
                                id="cpwd"
                                ref={refs.cpwdRef}
                                onChange={handleChangeForm}
                                placeholder="비밀번호 재입력" />
                        </div>
                    </li>
                    <li>
                        <label for=""><b>이름</b></label>
                        <span ref={msgRefs.msgNameRef}>이름을 입력해주세요</span>
                        <div>
                            <input type="text"
                                name="name"
                                id="name"
                                ref={refs.nameRef}
                                onChange={handleChangeForm}
                                placeholder="이름을 입력해주세요" />
                        </div>
                    </li>
                    <li>
                        <label for=""><b>휴대폰번호</b></label>
                        <span ref={msgRefs.msgPhoneRef}>휴대폰번호를 입력해주세요('-' 포함)</span>
                        <div>
                            <input type="text"
                                name="phone"
                                id="phone"
                                ref={refs.phoneRef}
                                onChange={handleChangeForm}
                                placeholder="휴대폰 번호 입력('-' 포함)" />
                        </div>
                    </li>
                    <li>
                        <label for=""><b>이메일 주소</b></label>
                        <span ref={msgRefs.msgEmailRef}>이메일 주소를 입력해주세요</span>
                        <div>
                            <input type="text"
                                name="emailname"
                                id="emailname"
                                ref={refs.emailRef}
                                onChange={handleChangeForm}
                                placeholder="이메일 주소" />
                            <span>@</span>
                            <select name="emaildomain"
                                id="emaildomain"
                                ref={refs.domainRef}
                                onChange={handleChangeForm}>
                                <option value="default">선택</option>
                                <option value="naver.com">naver.com</option>
                                <option value="gmail.com">gmail.com</option>
                                <option value="daum.net">daum.net</option>
                            </select>
                        </div>
                    </li>
                    <li>
                        <button type="submit">가입하기</button>
                        <button type="reset">가입취소</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}
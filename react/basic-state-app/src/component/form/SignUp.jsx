// 자습용
import React, { useState, useRef } from 'react';
import './cgv.css';
import './common.css';
import { validateSignUp, errorCheckSignUp } from '../../apis/validate';


export default function SignUp() {
    const init = { 'id': '', 'pwd': '', 'cpwd': '', 'name': '', 'phone': '', 'email': '', 'emaildomain': '' }
    const initErrors = {
        id: '아이디를 입력해주세요',
        pwd: '비밀번호를 입력해주세요',
        cpwd: '비밀번호를 입력해주세요',
        name: '이름을 입력해주세요',
        phone: '전화번호를 입력해주세요',
        email: '이메일을 입력해주세요',
        emaildomain: '이메일을 선택해주세요',
    }
    const refs = {
        idRef: useRef(null),
        pwdRef: useRef(null),
        cpwdRef: useRef(null),
        nameRef: useRef(null),
        phoneRef: useRef(null),
        emailRef: useRef(null),
        emaildomainRef: useRef(null)
    }
    const [form, setForm] = useState(init);
    const [errorMsg, setErrorMsg] = useState(init);

    //폼의 입력이 변경되는 경우 호출되는 함수
    const handleChangeSignup = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value })
        setErrorMsg({ ...errorMsg, [name]: value === '' ? initErrors[name] : '' })
    }

    //폼의 입력이 종료된 후 Submit 함수
    const handleSubmit = (event) => {
        const param = {
            'refs': refs,
            'errorMsg': errorMsg,
            'setErrorMsg': setErrorMsg
        }
        event.preventDefault();

        if (validateSignUp(param)) console.log(form);
    }

    return (
        <div className="join-form center-layout">
            <h1 className="center-title">회원가입</h1>
            <p></p>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label for="" className="join-title-font"><b>아이디</b></label>
                        <span id="error-msg-id">{errorMsg.id}</span>
                        <div>
                            <input type="text" name="id" value={form.id} id="id" ref={refs.idRef} onChange={handleChangeSignup} placeholder="아이디 입력(6~20자)" />
                            <button type="button" className="join-form-button-check" >중복 확인</button>
                            <input type="hidden" id="idCheckResult" value="default" />
                        </div>
                    </li>
                    <li>
                        <label for="" className="join-title-font"><b>비밀번호</b></label>
                        <span id="error-msg-pwd">{errorMsg.pwd}</span>
                        <div>
                            <input type="password" name="pwd" value={form.pwd} id="pwd" ref={refs.pwdRef} placeholder="비밀번호 입력" onChange={handleChangeSignup} />
                        </div>
                    </li>
                    <li>
                        <label for="" className="join-title-font"><b>비밀번호 확인</b></label>
                        <span id="error-msg-cpwd">{errorMsg.cpwd}</span>
                        <div>
                            <input type="password" name="cpwd" value={form.cpwd} id="cpwd" ref={refs.cpwdRef} placeholder="비밀번호 재입력" onChange={handleChangeSignup} />
                        </div>
                    </li>
                    <li>
                        <label for="" className="join-title-font">이름</label>
                        <span id="error-msg-name">{errorMsg.name}</span>

                        <div>
                            <input type="text" name="name" value={form.name} id="name" ref={refs.nameRef} placeholder="이름을 입력해주세요" onChange={handleChangeSignup} />
                        </div>
                    </li>
                    <li>
                        <label for="" className="join-title-font">전화번호</label>
                        <span id="error-msg-phone">{errorMsg.phone}</span>

                        <div>
                            <input type="text" name="phone" value={form.phone} id="phone" ref={refs.phoneRef} placeholder="휴대폰 번호 입력('-'제외 11자리 입력)" onChange={handleChangeSignup} />
                        </div>
                    </li>
                    <li>
                        <label for="" className="join-title-font">이메일 주소</label>
                        <span id="error-msg-email">{errorMsg.email}</span>
                        <span id="error-msg-email">{errorMsg.emaildomain}</span>

                        <div>
                            <input type="text" name="email" value={form.email} id="email" ref={refs.emailRef} placeholder="이메일 주소" onChange={handleChangeSignup} />
                            <span>@</span>
                            <select name="emaildomain" value={form.emaildomain} id="emaildomain" ref={refs.emaildomainRef} onChange={handleChangeSignup}>
                                <option value="default">선택</option>
                                <option value="naver.com">naver.com</option>
                                <option value="gmail.com">gmail.com</option>
                                <option value="daum.net">daum.net</option>
                            </select>
                        </div>
                    </li>
                    <li>
                        <button type="submit" className="join-form-button-signup1" >가입하기</button>
                        <button type="reset" className="join-form-button-signup2">가입취소</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}


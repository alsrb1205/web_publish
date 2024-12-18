// 수업내용 진행
import React, { useState, useRef } from 'react';
import './cgv.css';
import './common.css';
import { validateSignUp, errorCheckSignUp, handleIdCheck, handlepasswordCheck } from '../../apis/validate';
import { initFormNames } from '../../apis/initial';

export default function SignUp2() {
    const idMsgRef = useRef(null);
    const passMsgRef = useRef(null);
    const refs = {
        idRef: useRef(null),
        pwdRef: useRef(null),
        cpwdRef: useRef(null),
        nameRef: useRef(null),
        phoneRef: useRef(null),
        emailRef: useRef(null),
        emaildomainRef: useRef(null)
    }

    //폼데이터 저장소
    const names = ['id', 'pwd', 'cpwd', 'name', 'phone', 'email', 'emaildomain']
    const [form, setForm] = useState(initFormNames(names));
    const [errorMsg, setErrorMsg] = useState(initFormNames(names));

    // 폼의 입력이 변경되는 경우 호출되는 함수
    const handleChangeSignup = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value })
        idMsgRef.current.style.setProperty('color', 'red');
        idMsgRef.current.style.setProperty('font-weight', 'normal');


        errorCheckSignUp(name, value, errorMsg, setErrorMsg)
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
                        <span id="error-msg-id" ref={idMsgRef}>{errorMsg.id}</span>
                        <div>
                            <input type="text" name="id" value={form.id} id="id" ref={refs.idRef} onChange={handleChangeSignup} placeholder="아이디 입력(6~20자)" />
                            <button type="button" className="join-form-button-check" onClick={()=>{
                                const param = {
                                    'errorCheckSignUp':errorCheckSignUp,
                                    'errorMsg':errorMsg,
                                    'setErrorMsg':setErrorMsg,
                                    'idMsgRef':idMsgRef,
                                    'idRef':refs.idRef
                                }
                                handleIdCheck(param)}}>중복 확인</button>
                            <input type="hidden" id="idCheckResult" value="default" />
                        </div>
                    </li>
                    <li>
                        <label for="" className="join-title-font"><b>비밀번호</b></label>
                        <span id="error-msg-pwd" ref={passMsgRef}>{errorMsg.pwd}</span>
                        <div>
                            <input type="password" name="pwd" value={form.pwd} id="pwd" ref={refs.pwdRef} placeholder="비밀번호 입력" onChange={handleChangeSignup} />
                        </div>
                    </li>
                    <li>
                        <label for="" className="join-title-font"><b>비밀번호 확인</b></label>
                        <span id="error-msg-cpwd">{errorMsg.cpwd}</span>
                        <div>
                            <input type="password" name="cpwd" value={form.cpwd} id="cpwd" ref={refs.cpwdRef} placeholder="비밀번호 재입력"
                                onBlur={()=>{
                                    const param ={
                                        'refs':refs,
                                        'errorCheckSignUp':errorCheckSignUp,
                                        'errorMsg':errorMsg,
                                        'setErrorMsg':setErrorMsg,
                                        'passMsgRef':passMsgRef,
                                        'form':form,
                                        'setForm':setForm
                                    }
                                    handlepasswordCheck(param)}} onChange={handleChangeSignup} />
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
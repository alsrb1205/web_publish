import React, { useState, useRef } from 'react';
import './cgv.css';
import './common.css';
import { validateForm } from '../../apis/validate';

export default function CgvLoginForm() {
    // const idRef = useRef(null);
    // const pwdRef = useRef(null);

    const refs = {
        idRef: useRef(null), // refs.idRef
        pwdRef: useRef(null) 
    }; // 규모가 커지면 효율적

    // const validateForm = () => {
    //     let result = true;
    //     if (idRef.current.value === '') {
    //         setErrorMsg({ ...errorMsg, ['id']: '아이디를 입력해주세요' })
    //         idRef.current.focus()
    //         result = false;
    //     } else if (pwdRef.current.value === '') {
    //         setErrorMsg({ ...errorMsg, ['pwd']: '패스워드를 입력해주세요' })
    //         pwdRef.current.focus()

    //         result = false;
    //     }
    //     return result;
    // }
    const [errorMsg, setErrorMsg] = useState({ 'id': '', 'pwd': '', });

    const [formData, setFormData] = useState({ 'id': '', 'pwd': '', });
    const handleChangeForm = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value })
        if (name === 'id') {
            (value === '') ? setErrorMsg({ ...errorMsg, ['id']: '아이디를 입력해주세요' }) : setErrorMsg({ ...errorMsg, ['id']: '' });
        }
        if (name === 'pwd') {
            (value === '') ? setErrorMsg({ ...errorMsg, ['pwd']: '패스워드를 입력해주세요' }) : setErrorMsg({ ...errorMsg, ['pwd']: '' });
        }

    }
    const handleSubmit = (event) => {
        event.preventDefault()
        const param = { 
            // 'idRef': idRef, 
            // 'pwdRef': pwdRef, 
            'refs':refs,
            'errorMsg': errorMsg, 
            'setErrorMsg': setErrorMsg };
        if (validateForm(param)) console.log(formData);
    }
    return (
        <div className="login-form center-layout">
            <h1 className="center-title">로그인</h1>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li className="login-form-text1">
                        <p>
                            아이디 비밀번호를 입력하신 후, 로그인 버튼을 클릭해 주세요.
                        </p>
                    </li>
                    <li>
                        <div className="login-form-input">
                            <i className="fa-solid fa-user"></i>
                            <input type="text" name="id" id="id" value={formData.id} ref={refs.idRef} onChange={handleChangeForm} placeholder="ID를 입력해주세요" />
                        </div>
                        <p id="error-msg-id" className="login-error" style={{ 'color': 'red' }}>{errorMsg.id}</p>
                    </li>
                    <li>
                        <div className="login-form-input">
                            <i className="fa-solid fa-lock"></i>
                            <input type="password" name="pwd" id="pwd" value={formData.pwd} ref={refs.pwdRef} onChange={handleChangeForm} placeholder="비밀번호를 입력해주세요" />
                        </div>
                        <p id="error-msg-pwd" className="login-error" style={{ 'color': 'red' }}>{errorMsg.pwd}</p>
                    </li>
                    <li>
                        <button type="submit" className="btn-main-color">로그인</button>
                    </li>
                    <li>
                        <div>
                            <input type="checkbox" name="status" />
                            <label for="">아이디 저장</label>
                        </div>
                        <div>
                            <a href="#">아이디 찾기</a><span>&gt;</span>
                            <a href="#">비밀번호 찾기</a><span>&gt;</span>
                        </div>
                    </li>
                </ul>
                <div>
                    <img src="https://adimg.cgv.co.kr//images/202411/loginplus/350x300.png" alt="" />
                </div>
            </form>
        </div>
    );
}


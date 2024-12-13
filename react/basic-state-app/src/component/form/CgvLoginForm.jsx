import React, { useState, useRef } from 'react';
import './cgv.css';
import './common.css';

export default function CgvLoginForm() {
    const idRef = useRef(null);
    const pwdRef = useRef(null);
    const validateForm=()=>{
        let result = true;
        if (idRef.current.value === '') {
            alert('아이디 입력')  
            result=false;          
        } else if (pwdRef.current.value === '') {
            alert('패스워드 입력')
            result=false;                     
        }
        return result;

    }

    const [formData, setFormData] = useState({ 'id': '', 'pwd': '', });
    const handleChangeForm = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        if(validateForm()) console.log(formData);

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
                            <input type="text" name="id" id="id" value={formData.id} ref={idRef} onChange={handleChangeForm} placeholder="ID를 입력해주세요" />
                        </div>
                        <p id="error-msg-id" className="login-error"></p>
                    </li>
                    <li>
                        <div className="login-form-input">
                            <i className="fa-solid fa-lock"></i>
                            <input type="password" name="pwd" id="pwd" value={formData.pwd} ref={pwdRef} onChange={handleChangeForm} placeholder="비밀번호를 입력해주세요" />
                        </div>
                        <p id="error-msg-pwd" className="login-error"></p>
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


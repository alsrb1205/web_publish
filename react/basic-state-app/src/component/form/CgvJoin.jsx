import React, { useState,useRef } from 'react';
import './cgv.css';
import './common.css';


export default function CgvJoin() {
    const idRef = useRef(null);
    const pwdRef = useRef(null);
    const cpwdRef = useRef(null);
    const nameRef = useRef(null);
    const phoneRef = useRef(null);
    const emailRef = useRef(null);
    const emaildomainRef = useRef(null);
    const validate=()=>{
        let result = true;
        if (idRef.current.value ===''){
            alert('입력해주세요')
            result = false;

        } else if (pwdRef.current.value ===''){
            alert('입력해주세요')
            result = false;
        } else if (cpwdRef.current.value ===''){
            alert('입력해주세요')
            result = false;
        }else if (nameRef.current.value ===''){
            alert('입력해주세요')
            result = false;
        }else if (phoneRef.current.value ===''){
            alert('입력해주세요')
            result = false;
        }else if (emailRef.current.value ===''){
            alert('입력해주세요')
            result = false;
        }else if (emaildomainRef.current.value ===''){
            alert('입력해주세요')
            result = false;
        }
        return result;
    }
    const [form, setForm] = useState({'id':'','pwd':'','cpwd':'', 'name': '', 'phone': '', 'email': '' ,'emaildomain':''})
    

    const handleChangeForm=(event)=>{
        const {name,value}=event.target;
        setForm({...form,[name]:value})
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        if(validate()) console.log(form);
        
    }

    return (
        <div className="join-form center-layout">
            <h1 className="center-title">회원가입</h1>
            <p></p>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label for="" className="join-title-font"><b>아이디</b></label>
                        <span id="error-msg-id">사용할 수 없는 아이디입니다</span>
                        <div>
                            <input type="text" name="id" value={form.id} id="id" ref={idRef} onChange={handleChangeForm} placeholder="아이디 입력(6~20자)" />
                            <button type="button" className="join-form-button-check" >중복 확인</button>
                            <input type="hidden" id="idCheckResult" value="default" />
                        </div>
                    </li>
                    <li>
                        <label for="" className="join-title-font"><b>비밀번호</b></label>
                        <span id="error-msg-pwd">12자 이내의 비밀번호를 입력해주세요</span>
                        <div>
                            <input type="password" name="pwd" value={form.pwd} id="pwd" ref={pwdRef} placeholder="비밀번호 입력" onChange={handleChangeForm} />
                        </div>
                    </li>
                    <li>
                        <label for="" className="join-title-font"><b>비밀번호 확인</b></label>
                        <span id="error-msg-cpwd">비밀번호가 일치하지 않습니다</span>
                        <div>
                            <input type="password" name="cpwd" value={form.cpwd} id="cpwd"  ref={cpwdRef} placeholder="비밀번호 재입력" onChange={handleChangeForm}  />
                        </div>
                    </li>
                    <li>
                        <label for="" className="join-title-font">이름</label>
                        <span id="error-msg-name">사용할 수 없는 이름입니다</span>

                        <div>
                            <input type="text" name="name"value={form.name} id="name"  ref={nameRef} placeholder="이름을 입력해주세요" onChange={handleChangeForm} />
                        </div>
                    </li>
                    <li>
                        <label for="" className="join-title-font">전화번호</label>
                        <span id="error-msg-phone">사용할 수 없는 전화번호입니다</span>

                        <div>
                            <input type="text" name="phone"value={form.phone} id="phone" ref={phoneRef} placeholder="휴대폰 번호 입력('-'제외 11자리 입력)" onChange={handleChangeForm} />
                        </div>
                    </li>
                    <li>
                        <label for="" className="join-title-font">이메일 주소</label>
                        <span id="error-msg-email">사용할 수 없는 이메일입니다</span>

                        <div>
                            <input type="text" name="email"value={form.email} id="email" ref={emailRef} placeholder="이메일 주소" onChange={handleChangeForm} />
                            <span>@</span>
                            <select name="emaildomain"value={form.emaildomain} id="emaildomain" ref={emaildomainRef} onChange={handleChangeForm}>
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


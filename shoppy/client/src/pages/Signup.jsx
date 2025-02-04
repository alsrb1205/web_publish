import React, { useRef, useState } from 'react';
import '../styles/signup.css';
import { validateSignup, handleDuplicateIdCheck, handlePwdCheck } from '../utils/funcValidate';
import { initSignup, useInitSignupRefs } from '../utils/funcInitialize';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const { names, placeholders, labels, initFormData } = initSignup();
    const { refs, msgRefs } = useInitSignupRefs(names);
    const [formData, setFormData] = useState(initFormData);
    const [idCheckResult, setIdCheckResult] = useState('default');
    const navigate = useNavigate();


    const handleChangeForm = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        if (name === 'id') {
            setIdCheckResult('default'); // handleChangeForm에서 name이 "id"인 경우(즉, 아이디 입력 필드가 변경될 때), idCheckResult 상태를 "default"로 초기화하여 중복 확인 상태를 리셋한다.
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateSignup(refs, msgRefs)) {
            if (idCheckResult === 'default') {
                alert('중복확인을 진행해주세요.');
                return false;
            } else {
                // 서버 --> DB 테이블에 insert
                // GET : URL 통해 호출 및 데이터 전달 => 패킷의 Header => req.params, 보안필요X, 작은 데이터
                // POST : URL 주소로 경로 호출, 데이터 전달은 패킷의 Body => req.body, 보안필요O, 큰 데이터
                axios.post('http://localhost:9000/member/signup', formData)
                    .then(res => {
                        if (res.data.result_rows === 1) {
                            alert('회원가입에 성공하셨습니다');
                            // 로그인 페이지 이동 : useNavigate(), window.location.href
                            setTimeout(()=>navigate('/login'), 1000);
                        } else {
                            alert('회원가입에 실패하셨습니다');
                        }
                    })
                    .catch(error => {
                        alert('회원가입에 실패하셨습니다');
                        console.log('error ==>',error)
                    })
            }
        }
    };

    return (
        <div className="content">
            <h1 className="center-title">SIGNUP</h1>
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
                                                ref={refs.current[name.concat('Ref')]}
                                                onChange={handleChangeForm}
                                                placeholder={placeholders[name]} />
                                            <span>@</span>
                                            <select name="emaildomain"
                                                ref={refs.current["emaildomainRef"]}
                                                onChange={handleChangeForm}
                                            >
                                                <option value="default">선택</option>
                                                <option value="naver.com">naver.com</option>
                                                <option value="gmail.com">gmail.com</option>
                                                <option value="daum.net">daum.net</option>
                                            </select>
                                        </>
                                    ) : (
                                        <>
                                            <input type={name === 'pwd' || name === 'cpwd' ? 'password' : 'text'}
                                                name={name}
                                                ref={refs.current[name.concat('Ref')]}
                                                onChange={handleChangeForm}
                                                onBlur={(name === 'cpwd') ? (() => handlePwdCheck(
                                                    refs.current['pwdRef'],
                                                    refs.current['cpwdRef'],
                                                    refs.current['nameRef'],
                                                    msgRefs.current['pwdMsgRef'],
                                                    msgRefs.current['cpwdMsgRef']
                                                )) : (null)}
                                                placeholder={placeholders[name]} />
                                            {name === 'id' &&
                                                <>
                                                    <button type="button"
                                                        onClick={() => handleDuplicateIdCheck(
                                                            refs.current['idRef'],
                                                            msgRefs.current['idMsgRef'],
                                                            refs.current['pwdRef'],
                                                            setIdCheckResult,
                                                            idCheckResult,
                                                            formData
                                                        )}
                                                    >중복확인</button>
                                                    <input type="hidden" value={idCheckResult} />
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
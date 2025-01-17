import React, { useRef, useState } from 'react';
import '../styles/signup.css';
import { validateSignup } from '../utils/funcValidate';
import { initSignup, useInitSignupRefs } from '../utils/funcInitalize';

export default function Signup() {
    const { names, placeholders, labels, initFormData } = initSignup();
    const { refs, msgRefs } = useInitSignupRefs(names);

    const [formData, setFormData] = useState(initFormData);

    const handleChangeForm = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateSignup(refs, msgRefs)) {
            console.log(formData);
        }
    };

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
                                <span ref={msgRefs.current[name.concat('MsgRef')]}>{labels[name]}를 입력해주세요</span>
                                <div>
                                    {
                                        name === 'emailname' ? (
                                            <>
                                                <input type='text'
                                                    name={name}
                                                    ref={refs.current[name.concat('Ref')]}
                                                    onChange={handleChangeForm}
                                                    placeholder={placeholders[name]} />
                                                <span>@</span>
                                                <select name="emaildomain"
                                                    ref={refs.current['emaildomainRef']}
                                                    onChange={handleChangeForm}>
                                                    <option value="default">선택</option>
                                                    <option value="naver.com">naver.com</option>
                                                    <option value="gmail.com">gmail.com</option>
                                                    <option value="daum.net">daum.net</option>
                                                </select>
                                            </>
                                        ) : (<>
                                            <input type={name === 'pwd' || name === 'cpwd' ? ('password') : ('text')}
                                                name={name}
                                                ref={refs.current[name.concat('Ref')]}
                                                onChange={handleChangeForm}
                                                placeholder={placeholders[name]} />
                                            {
                                                name === 'id' &&
                                                <>
                                                    <button type="button">중복확인</button>
                                                    <input type="hidden" id="idCheckResult" value='' />
                                                </>
                                            }
                                        </>)
                                    }
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
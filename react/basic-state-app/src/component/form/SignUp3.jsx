import React, { useState, useRef } from 'react';
import { validateFormSignUp3 } from '../../apis/validate';
import { initFormNames } from '../../apis/initial';
export default function SignUp3() {
    // ref는 유효성체크를 위해 사용

    //배열 + reduce() 함수

    const initArray = [
        'id', 'pass', 'name', 'phone1', 'phone2', 'phone3', 'address', 'birth1', 'birth2', 'birth3', 'job', 'gender', 'email', 'intro'
    ]
    // React 전용 useRef 함수는 custom hook 등을 활용
    // const refs2 = refArray.reduce((acc, key)=>{
    //     acc[key]=useRef(null);
    //     return acc;
    // },{});

    const refs = {
        idRef: useRef(null),
        passRef: useRef(null),
        nameRef: useRef(null),
        phone1Ref: useRef(null),
        phone2Ref: useRef(null),
        phone3Ref: useRef(null),
        addressRef: useRef(null),
        birth1Ref: useRef(null),
        birth2Ref: useRef(null),
        birth3Ref: useRef(null),
        jobRef: useRef(null),
        genderRef: useRef(null),
        emailRef: useRef(null),
        introRef: useRef(null)
    }
    const [formData, setFormData] = useState(initFormNames(initArray));
    const handleChangeForm = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateFormSignUp3(refs)) console.log(formData);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label htmlFor="">아이디 : </label>
                        <input type="text"
                            name="id"
                            value={formData.id}
                            ref={refs.idRef}
                            onChange={handleChangeForm} />
                    </li>
                    <li>
                        <label htmlFor="">비밀번호 : </label>
                        <input type="password"
                            name="pass"
                            value={formData.pass}
                            ref={refs.passRef}
                            onChange={handleChangeForm} />
                    </li>
                    <li>
                        <label htmlFor="">이름 : </label>
                        <input type="text"
                            name="name"
                            value={formData.name}
                            ref={refs.nameRef}
                            onChange={handleChangeForm} />
                    </li>
                    <li>
                        <label htmlFor="">전화 : </label>
                        <input type="text"
                            name="phone1"
                            value={formData.phone1}
                            ref={refs.phone1Ref}
                            onChange={handleChangeForm} />
                        <input type="text"
                            name="phone2"
                            value={formData.phone2}
                            ref={refs.phone2Ref}
                            onChange={handleChangeForm} />
                        <input type="text"
                            name="phone3"
                            value={formData.phone3}
                            ref={refs.phone3Ref}
                            onChange={handleChangeForm} />
                    </li>
                    <li>
                        <label htmlFor="">주소 : </label>
                        <input type="text"
                            name="address"
                            value={formData.address}
                            ref={refs.addressRef}
                            onChange={handleChangeForm} />
                    </li>
                    <li>
                        <label htmlFor="">생일 : </label>
                        <input type="text"
                            name="birth1"
                            value={formData.birth1}
                            ref={refs.birth1Ref}
                            onChange={handleChangeForm} />
                        <input type="text"
                            name="birth2"
                            value={formData.birth2}
                            ref={refs.birth2Ref}
                            onChange={handleChangeForm} />
                        <input type="text"
                            name="birth3"
                            value={formData.birth3}
                            ref={refs.birth3Ref}
                            onChange={handleChangeForm} />
                    </li>
                    <li>
                        <label htmlFor="">직업 : </label>
                        <select name="job" ref={refs.jobRef} onChange={handleChangeForm}>
                            <option value="default">선택</option>
                            <option value="front">프론트엔드</option>
                            <option value="back">백엔드</option>
                            <option value="system">시스템관리자</option>
                        </select>
                    </li>
                    <li>
                        <label htmlFor="">성별 : </label>
                        <input type="radio" name="gender" value="m" ref={refs.genderRef} onChange={handleChangeForm} />
                        <span>남</span>
                        <input type="radio" name="gender" value="f" ref={refs.genderRef} onChange={handleChangeForm} />
                        <span>여</span>
                    </li>
                    <li>
                        <label htmlFor="">이메일 : </label>
                        <input type="text"
                            name="email"
                            value={formData.email}
                            ref={refs.emailRef}
                            onChange={handleChangeForm} />
                    </li>
                    <li>
                        <label htmlFor="">자기 소개 : </label>
                        <textarea rows='10' cols='50'
                            name="intro"
                            value={formData.intro}
                            ref={refs.introRef}
                            onChange={handleChangeForm}
                        ></textarea>
                    </li>
                    <li>
                        <button type="submit">회원가입</button>
                        <button type="reset">취소</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}


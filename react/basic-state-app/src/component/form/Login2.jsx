import React, { useRef, useState } from 'react';
import { validateLogin2 } from '../../apis/validate';

export default function Login2() {
    const idRef = useRef(null);
    const pwdRef = useRef(null);
    const [form, setForm] = useState({ 'id': '', 'pwd': '' });
    const [errorMsg, setErrorMsg] = useState({ 'id': '', 'pwd': '' })
    const handleChangeForm = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
        if (name === 'id') {
            (value === '') ? setErrorMsg({ ...errorMsg, ['id']: '아이디를 입력해주세요' }) : setErrorMsg({ ...errorMsg, ['id']: '' });
        }
        if (name === 'pwd') {
            (value === '') ? setErrorMsg({ ...errorMsg, ['pwd']: '패스워드를 입력해주세요' }) : setErrorMsg({ ...errorMsg, ['pwd']: '' });
        }
    }

    // const validate = () => {
    //     let result = true;
    //     if (idRef.current.value === '') {
    //         setErrorMsg({...errorMsg,['id']:'아이디를 입력해주세요'});
    //         idRef.current.focus()
    //         result = false;
    //     } else if (pwdRef.current.value === '') {
    //         setErrorMsg({...errorMsg,['pwd']:'패스워드를 입력해주세요'});
    //         pwdRef.current.focus()
    //         result = false;
    //     }
    //     return result;
    // };

    const handleSubmit = (event) => {
        const param = {
            'idRef': idRef,
            'pwdRef': pwdRef,
            'errorMsg': errorMsg,
            'setErrorMsg': setErrorMsg
        };

        event.preventDefault();
        if (validateLogin2(param)) console.log(form);
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>아이디</label>
                    <input type="text" name="id" value={form.id} ref={idRef} onChange={handleChangeForm} />
                    <span style={{ 'color': 'red' }}>{errorMsg.id}</span>
                </div>
                <div>
                    <label>비밀번호</label>
                    <input type="password" name="pwd" value={form.pwd} ref={pwdRef} onChange={handleChangeForm} />
                    <span style={{ 'color': 'red' }}>{errorMsg.pwd}</span>

                </div>
                <div>
                    <button type="submit">로그인</button>
                </div>
            </form>

        </div>
    );
}


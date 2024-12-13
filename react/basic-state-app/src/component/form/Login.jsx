import React, { useState, useRef } from 'react';

export default function Login() {
    const idRef = useRef(null);
    const passwordRef = useRef(null);

    const [form, setForm] = useState({ 'id': '', 'password': '' }); // {"id":"test"...}

    const handleChangeForm = (event) => {
        //아이디, 패스워드가 변경되면 setForm 함수를 이용하여 "id":"test" 형식으로 저장
        const { name, value } = event.target;

        //form={'id':'hong'} <-- id input
        //form={'password':'1234'} <-- password input
        setForm({ ...form, [name]: value });
        // 오브젝트객체의 필드값을 변수로 입력하는 경우에는 []로 감싼 후 적용
    }
    const validate = () => {
        let result = true;
        if (idRef.current.value === '') {
            alert('아이디를 입력해주세요')
            idRef.current.focus()
            result = false;
        } else if (passwordRef.current.value === '') {
            alert('패스워드를 입력해주세요')
            passwordRef.current.focus()
            result = false;
        }
        return result;
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (validate()) console.log(form);

        //로그인폼에 입력된 값 => 서버(express, WAS, ...)
        //{ {"id":"test"}, {"password":"1234"} ...}
    }

    return (
        <div>
            <h3>Login</h3>
            <form name='login-form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">아이디</label>
                    <input type="text" name="id" value={form.id} ref={idRef} onChange={handleChangeForm} />
                </div>
                <div>
                    <label htmlFor="">패스워드</label>
                    <input type="password" name="password" value={form.password} ref={passwordRef} onChange={handleChangeForm} />
                </div>
                <div>
                    <button type="submit">로그인</button>
                </div>
            </form>
        </div>
    );
}


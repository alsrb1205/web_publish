import React, { useState, useRef } from 'react';

export default function UserInfo() {
    const nameRef = useRef(null);
    const addressRef = useRef(null);
    const ageRef = useRef(null);

    const validateForm = () => {
        let result = true;
        if (nameRef.current.value === '') {
            alert('이름을 입력해주세요')
            nameRef.current.focus();
            result = false;
        } else if (addressRef.current.value === '') {
            alert('주소를 입력해주세요')
            addressRef.current.focus();
            result = false;

        } else if (ageRef.current.value === '') {
            alert('나이를 입력해주세요')
            ageRef.current.focus();
            result = false;
        }
        return result;
    }

    const [form, setForm] = useState({ 'name': '', 'address': '', 'age': '' })

    const handleChangeForm = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) console.log(form);
    }

    return (
        <div>
            <h3>UserInfo</h3>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label htmlFor="">Name</label>
                        <input type="text" name="name" value={form.name} ref={nameRef} onChange={handleChangeForm} />
                    </li>
                    <li>
                        <label htmlFor="">Address</label>
                        <input type="text" name="address" value={form.address} ref={addressRef} onChange={handleChangeForm} />
                    </li>
                    <li>
                        <label htmlFor="">Age</label>
                        <input type="text" name="age" value={form.age} ref={ageRef} onChange={handleChangeForm} />
                    </li>

                    <li>
                        <button type="submit">Send</button>
                    </li>

                </ul>
            </form>
        </div>
    );
}


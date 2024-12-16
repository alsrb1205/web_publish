import React, { useState, useRef } from 'react';
import { validateUserInfo } from '../../apis/validate';

export default function UserInfo() {
    const nameRef = useRef(null);
    const addressRef = useRef(null);
    const ageRef = useRef(null);
    const [errorMsg,setErrorMsg]=useState({"name":'',"address":'',"age":''});

    // const validateForm = () => {
    //     let result = true;
    //     if (nameRef.current.value === '') {
    //         alert('이름을 입력해주세요')
    //         nameRef.current.focus();
    //         result = false;
    //     } else if (addressRef.current.value === '') {
    //         alert('주소를 입력해주세요')
    //         addressRef.current.focus();
    //         result = false;

    //     } else if (ageRef.current.value === '') {
    //         alert('나이를 입력해주세요')
    //         ageRef.current.focus();
    //         result = false;
    //     }
    //     return result;
    // }

    const [form, setForm] = useState({ 'name': '', 'address': '', 'age': '' })

    const handleChangeForm = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value })
        if (name==='name') {
            (value==='') ? setErrorMsg({...errorMsg,['name']:'이름을 입력해주세요'}):setErrorMsg({...errorMsg,['name']:''});
        } else if (name==='address') {
            (value==='') ? setErrorMsg({...errorMsg,['address']:'주소를 입력해주세요'}):setErrorMsg({...errorMsg,['address']:''});
        } else if (name==='age') {
            (value==='') ? setErrorMsg({...errorMsg,['age']:'나이를 입력해주세요'}):setErrorMsg({...errorMsg,['age']:''});
        }
    }

    const handleSubmit = (event) => {
        const param = {
            'nameRef' : nameRef,
            'addressRef' : addressRef,
            'ageRef' : ageRef,
            'errorMsg':errorMsg,
            'setErrorMsg':setErrorMsg
        }
        event.preventDefault();
        if (validateUserInfo(param)) console.log(form);
    }

    return (
        <div>
            <h3>UserInfo</h3>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label htmlFor="">Name</label>
                        <input type="text" name="name" value={form.name} ref={nameRef} onChange={handleChangeForm} />
                        <span>{errorMsg.name}</span>
                    </li>
                    <li>
                        <label htmlFor="">Address</label>
                        <input type="text" name="address" value={form.address} ref={addressRef} onChange={handleChangeForm} />
                        <span>{errorMsg.address}</span>
                    </li>
                    <li>
                        <label htmlFor="">Age</label>
                        <input type="text" name="age" value={form.age} ref={ageRef} onChange={handleChangeForm} />
                        <span>{errorMsg.age}</span>
                    </li>

                    <li>
                        <button type="submit">Send</button>
                    </li>

                </ul>
            </form>
        </div>
    );
}


import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import axios from 'axios';

export default function ImageUpload({ getFileName }) {
    const [oldFile, setOldFile] = useState("");
    const formData = new FormData();

    const handleFileUpload = (e) => {
        formData.append("file", e.target.files[0]);
        formData.append("oldfile", oldFile);

        // 서버전송
        axios
            .post('http://localhost:9000/uploads', formData, {
                headers: { "Content-Type": "multipart/form-data" }, // 파일과 문자 데이터 추가시
            })
            .then(res => {
                getFileName(res.data);
                setOldFile(res.data.oldFile);
            })
            .catch(err => console.log(err));
    }


    return (
        <div>
            <Form.Control
                type='file'
                onChange={(e) => { handleFileUpload(e) }}
            />
        </div>
    );
}

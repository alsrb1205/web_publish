import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export default function ImageUploadMultiple({ getFileName }) {
    const [oldFile, setOldFile] = useState([]);
    const handleFileUploadMultiple = (e) => {
        const formData = new FormData();
        const files = e.target.files;

        // formData에 append - file 개별로 append 되어야함!!
        // 방법 1
        for (const file of files) formData.append("files", file);
        formData.append('oldFile', oldFile)
        // 방법 2
        // for (let i = 0; i < files.length; i++) formData.append("files", files[i]);
        // 방법 3
        // files.forEach(file => formData.append("files", file)); // iterable 호출로 인해 사용불가

        // 서버 전송
        axios
            .post(`http://localhost:9000/uploads/multiple?maxFiles=${files.length}`, formData, {
                headers: { "Content-Type": "multipart/form-data" }
            })
            .then(res => {
                getFileName(res.data); // NewProduct 컴포넌트로 전송
                setOldFile(res.data.oldFile);
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <Form.Control
                type='file'
                onChange={(e) => { handleFileUploadMultiple(e) }}
                multiple />
        </div>
    );
}



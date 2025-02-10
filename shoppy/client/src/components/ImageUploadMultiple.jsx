import React from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export default function ImageUploadMultiple() {
    const handleFileUploadMultiple = (e) => {
        const formData = new FormData();
        const files = e.target.files;

        if (files.length < 6) {
            // formData에 append - file 개별로 append 되어야함!!
            // 방법 1
            for (const file of files) formData.append("files", file);
            // 방법 2
            // for (let i = 0; i < files.length; i++) formData.append("files", files[i]);
            // 방법 3
            // files.forEach(file => formData.append("files", file)); // iterable 호출로 인해 사용불가
    
    
            // 서버 전송
            axios
                .post("http://localhost:9000/uploads/multiple", formData)
                .then(res => console.log('asdjaskldjaskld',res.data))
                .catch(err => console.log(err));
            
        } else {
            alert('파일업로드는 최대 5개까지 가능합니다')
        }
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


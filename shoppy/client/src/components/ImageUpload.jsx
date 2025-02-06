import Form from 'react-bootstrap/Form';
import React from 'react';
import axios from 'axios';

export default function ImageUpload({getFileName}) {
    const formData = new FormData();

    const handleFileUpload = (e) => {

        formData.append("file", e.target.files[0]);

        // 서버전송
        axios
            .post('http://localhost:9000/uploads',formData)
            .then(res=>{console.log('res', res.data)
                getFileName(res.data);
            })
            .catch(err=>console.log(err));
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

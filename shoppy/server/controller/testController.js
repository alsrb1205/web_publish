// /test 경로로 요청한 처리를 실행하는 함수 정의
export const getTest =(req, res) =>{
    res.send('test')
    res.end();
}

export const getTestProduct =(req, res) =>{
    res.send('test product')
    res.end();
}

export const getTestId =(req, res) =>{
    res.send(`id -->${req.params.id}`)
    res.end();
}
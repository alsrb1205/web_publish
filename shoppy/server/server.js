import express from 'express';
import testRouter from './router/testRouter.js';

const server = express();
const port = 9000;

// 요청을 처리하는 미들웨어
// /test 요청시 -->hello test

server.use('/test', testRouter); // test로 시작하는 모든 경로를 라우팅


server.listen(port,()=>{
    console.log(`server start ${port}`);
})
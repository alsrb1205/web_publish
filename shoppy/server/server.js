import express from 'express'
import cors from 'cors';
import memberRouter from './router/memberRouter.js';
import uploadRouter from './router/uploadRouter.js';
import path from 'path'
// 서버 생성 및 포트 지정

const port = 9000;
const server = express();

/** 서버의 공통적인 작업 */
server.use(express.json());
server.use(express.urlencoded());
server.use(cors());
server.use("/upload_files", express.static(path.join("upload_files"))); // 저장폴더 연결

// 서버의 요청처리를 위한 미들웨어 정의
server.use('/member', memberRouter);
server.use('/uploads', uploadRouter);


server.listen(port, () => {
    console.log(`port ==> ${port}`);
});
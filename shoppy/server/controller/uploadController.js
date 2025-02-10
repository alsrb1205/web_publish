import multer from "multer";
import fs from 'fs';
import path from 'path';

// multer 라이브러리로 파일을 업로드 폴더에 저장
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'upload_files/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "_" + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + file.originalname)
    }
})

const upload = multer({ storage: storage }).single("file");

export const fileUpload = (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            console.log(err)
        } else {
            const oldFile = req.body.oldFile;

            if (req.body.oldFile) {
                //oldFile 존재 시 업로드 폴더에서 삭제
                const oldFilePath = path.join("upload_files", oldFile)
                if (fs.existsSync(oldFilePath)) {
                    try {
                        fs.unlinkSync(oldFilePath)
                    } catch (error) {
                        console.error("이전 파일 삭제 실패 : ", error)
                    }
                }
            }
            
            res.json({
                // 저장된 폴더의 파일명
                "uploadFileName": req.file.path,
                // 사용자가 선택한 원래 파일명
                "sourceFileName": req.file.originalname,
                "oldFile": res.req.file.filename
            });
        }
    });
} 
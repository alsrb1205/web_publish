import multer from "multer";

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
            res.json({
                // 저장된 폴더의 파일명
                "uploadFileName": req.file.path,
                // 사용자가 선택한 원래 파일명
                "sourceFileName": req.file.originalname,
            });
        }
    });
}   
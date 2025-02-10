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

const upload = multer({ storage: storage }).array("files", 5)

export const fileUploadMultiple = (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            console.log(err)
        } else {


            // const oldFile = req.body.oldFile;

            // if (req.body.oldFile) {
            //     //oldFile 존재 시 업로드 폴더에서 삭제
            //     const oldFilePath = path.join("upload_files", oldFile)
            //     if (fs.existsSync(oldFilePath)) {
            //         try {
            //             fs.unlinkSync(oldFilePath)
            //         } catch (error) {
            //             console.error("이전 파일 삭제 실패 : ", error)
            //         }
            //     }
            // }

            // res 객체를 이용한 전송객체 생성 <-> uploadController의 res 객체명과 동일하게 정의!!
            let uploadFileName = [];
            let sourceFileName = [];
            let oldFile = [];

            // req.files 배열의 파일정보를 가져와서 위의 배열에 추가한다.
            for (const file of req.files) {
                uploadFileName.push(file.path);
                sourceFileName.push(file.originalFilename);
                oldFile.push(file.filename);
            }

            res.json({
                // 저장된 폴더의 파일명
                "uploadFileName": uploadFileName,
                // 사용자가 선택한 원래 파일명
                "sourceFileName": sourceFileName,
                "oldFile": oldFile
            });
        }
    });
} 
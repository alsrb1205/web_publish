import { db } from "./db.js";

/**
 * 상품 등록
 */

export const registerProduct = async (formData) => {
    const sql = `
        insert into shoppy_product(pname, price, description, upload_file, source_file, pdate)
            values(?,?,?,?,?,now())
    `;
    const values = [
        formData.productname,
        formData.price || 0,
        formData.description || "",
        formData.uploadFile || null,
        formData.sourceFile || null
    ];
    const [result] = await db.execute(sql, values);
    return { "result_rows": result.affectedRows };
}

/**
 * 전체 상품 리스트 조회
 */
export const getList = async () => {
    const sql = `
        select pid,
               pname as name,
               price,
               description as info,
               concat('http://localhost:9000/',upload_file->>'$[0]') as image,
               source_file,
               pdate
         from shoppy_product
    `;
    const [result] = await db.execute(sql);

    return result; // [{},{},{},...]
}

/**
 * 상품 상세 정보 조회
 */
export const getProduct = async (pid) => {
    const sql = `
                SELECT 
                    pid,
                    pname as name,
                    price,
                    description as info,
                    upload_file as image,                                   
                    source_file as sourceFile,
                    pdate,
                    concat('http://localhost:9000/',upload_file->>'$[0]') as firstImage,
                    -- json_array() 사용해서 imgList 배열만듬
                    json_array(
						concat('http://localhost:9000/',upload_file->>'$[0]'),
						concat('http://localhost:9000/',upload_file->>'$[1]'),
						concat('http://localhost:9000/',upload_file->>'$[2]')
                    ) as imgList,
                    json_arrayagg(
						concat('http://localhost:9000/',jt.filename)
                    ) as detailImgList
                FROM
                    shoppy_product, 
                    -- json_table(테이블.컬럼명,매핑데이터 columns(컬럼 생성 후 리턴)) as jt 
                    json_table(shoppy_product.upload_file,'$[*]'
							   columns(filename varchar(100) path '$')) as jt
                WHERE
                    pid = ?
                    group by pid;    
    `;

    const [result] = await db.execute(sql, [pid]); // result = [[{pid:4,~~}],[컬럼명 fields]]
    return result[0];
}

/**
 * 카트 정보 조회
 */
export const getCartItems = async ({ pids }) => {
    const strArray = [];
    pids.forEach(pid => strArray.push("?"));
    const sql = `
    select pid,
	   pname,                                                                                                                                                                                                                                                                                                                                                                                                                 
       price,
       description,
       concat('http://localhost:9000/',upload_file->>'$[0]') as image
    from shoppy_product
    where pid in (${strArray.join(',')});
    `;
    const [result] = await db.execute(sql, pids);
    return result;
}
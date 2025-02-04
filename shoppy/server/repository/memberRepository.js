import {db} from './db.js'

/**
 * 회원가입 - INSERT
 */
export const registerMember = async (formData) => {
    // 1. SQL 생성
    const sql = `
        insert into shoppy_member(id, pwd, name, phone, emailname, emaildomain, zipcode, address, mdate)
                            values(?,?,?,?,?,?,?,?, now())
    `;
    const values = [
        formData.id,
        formData.pwd,
        formData.name,
        formData.phone,
        formData.emailname,
        formData.emaildomain,
        null,
        null
    ];
    // 2. db객체를 이용하여 SQL 실행 후 결과 가져오기
    const [result, fields] = await db.execute(sql, values);
    console.log(result);
    console.log(fields);
    
    // 3. 결과값 리턴
    return {"result_rows" : result.affectedRows};
}

/**
 * 아이디 중복체크 - SELECT
 */

export const getIdCheck = async({id})=>{
    const sql = `
        select count(id) as result from shoppy_member where id = ?
    `;
    const [result, fields] = await db.execute(sql, [id]); 
    console.log(result);
    
    return result[0];
}
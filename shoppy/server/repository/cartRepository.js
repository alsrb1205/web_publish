import { db } from './db.js'

export const addCart = async ({ id, cartList }) => {
    let result_rows = 0;

    const result = await Promise.all( // [1,1,1,1]
        cartList.map(async (item) => {
            const values = [item.size, item.qty, id, item.pid];
            const sql = `
                        insert into shoppy_cart(size, qty, id, pid, cdate)
                                values(?, ?, ?, ?,now())
                `;
            const [result] = await db.execute(sql, values); // Promise형태로 실행
            return result.affectedRows;
        })
    )
    result_rows = result.reduce((acc, cur) => acc + cur, 0);

    return { "result_rows": result_rows };
};

// export const addCartOne = async ({id,item}) => {    
//     const values = [item.size, item.qty, id, item.pid];
//     const sql=`
//                 insert into shoppy_cart(size, qty, id, pid, cdate)
//                         values(?, ?, ?, ?,now())
//     `;    
//     const [result]= await db.execute(sql,values);
//     // console.log(result.affectedRows);
    
//     return {"result_rows":result.affectedRows};
// }

export const getItems = async ({id}) => {
    const sql=`
            select sc.cid,
                sc.size,
                sc.qty,
                sm.id,
                sm.zipcode,
                sm.address,
                sp.pid,
                sp.pname,
                sp.price,
                sp.description as info,
                concat('http://localhost:9000/',sp.upload_file->>'$[0]') as image
                from shoppy_cart sc,
                    shoppy_member sm,
                    shoppy_product sp
                where sc.id = sm.id and sc.pid = sp.pid and sm.id = ?;
    `;
    const [result]= await db.execute(sql,[id]);
    console.log(result);
    

    return result;
}
import { db } from "./db.js";

/**
 * 전체 주문정보 가져오기
 */
export const getOrderList = async ({ id }) => {
    const sql = `
                select * from view_order_list
                where id=?;
    `;
    const [result] = await db.execute(sql, [id]);

    return result;
}

export const add = async (formData) => {
    const result = await Promise.all( // [1,1,1,1]
        formData.orderList.map(async (item) => {
            const values = [item.size, item.qty, formData.totalPrice, formData.type, formData.tid, formData.id, item.pid];
            const sql = `
                        insert into shoppy_order(size, qty,tprice,type,tid, id, pid, odate)
                                values(?, ?, ?, ?,?,?,?,current_date())
                `;
            const [result] = await db.execute(sql, values); // Promise형태로 실행
            return result.affectedRows;
        })
    )
const result_rows= result.reduce((acc,cur)=>acc+cur,0)
return {"result_rows": result_rows}
}
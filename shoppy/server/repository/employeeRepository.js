import { db } from './db.js';

export const getEmployeeAll = async () => {
    // 1. sql 쿼리 작성 - 템플릿 리터럴로 묶어서 사용
    const sql = `   
                    select row_number() over(order by emp_id) as no, 
                        emp_id as id,
                        emp_name as name,
                        eng_name as ename,
                        gender,
                        left(hire_date, 10) as hiredate,
                        salary,
                        concat(format(salary,0),'원') as osalary
                    from employee
                `;
    
    // 2. db.js 의 connection 을 이용하여 실행 한 후 결과 가져오기
    const [employees, cols] = await db.execute(sql)
        .then(result => result)
        .catch(err => console.log(err));
    // 3. 호출한 곳에 결과 리턴
    return employees;
}
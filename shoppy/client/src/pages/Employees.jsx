import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Employees() {
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:9000/employee/all')
            .then((res) => setEmployees(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <table border={1}>
                <tr>
                    <th>번호</th>
                    <th>사원명</th>
                    <th>사원명(영어)</th>
                    <th>성별</th>
                    <th>입사일</th>
                    <th>급여</th>
                </tr>
                {
                    employees && employees.map((emp) =>
                        <tr>
                            <td>{emp.no}</td>
                            <td>{emp.name}</td>
                            <td>{emp.ename}</td>
                            <td>{emp.gender}</td>
                            <td>{emp.hiredate}</td>
                            <td>{emp.osalary}</td>
                        </tr>

                    )
                }
            </table>
        </div>
    );
}


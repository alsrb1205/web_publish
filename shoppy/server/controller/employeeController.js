import * as repository from '../repository/employeeRepository.js';

export const getEmployeeAll = async (req, res) => {
    const result = await repository.getEmployeeAll();
    res.send(result);
    res.end();
}
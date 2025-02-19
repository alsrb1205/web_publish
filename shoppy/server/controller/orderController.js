import * as repository from '../repository/orderRepository.js'

/**
 * 아이디 중복체크
 */
export const getOrderList = async (req, res) => {
    const result = await repository.getOrderList(req.body);
    res.json(result);
    res.end();
};

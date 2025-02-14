import * as repository from '../repository/cartRepository.js'


export const addCart = async (req, res) => {
    const result = await repository.addCart(req.body);
     
    res.json(result);
    res.end();
}

// export const addCartOne = async (req, res) => {
//     const result = await repository.addCartOne(req.body);    
//     res.json(result);
//     res.end();
// }


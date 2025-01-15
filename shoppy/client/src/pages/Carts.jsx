import React from 'react';

export default function Carts({cartList}) {
    return (
        <div>
            <h1>Mycart</h1>
            <table border={1}>
                <tr>
                    <th>pid</th>
                    <th>size</th>
                    <th>qty</th>
                    <th>price</th>
                </tr>
                {
                    cartList.map((item)=>
                        <tr>
                            <td>{item.pid}</td>
                            <td>{item.size}</td>
                            <td>{item.qty}</td>
                            <td>{item.price}</td>
                        </tr>
                    )
                }
            </table>
        </div>
    );
}


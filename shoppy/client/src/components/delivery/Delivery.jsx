import React, {useState, useEffect} from 'react';
import axios from "axios";

export default function Delivery() {

    const [delivery, setDelivery] = useState([]);

    useEffect(() => {
        axios
            .get("/data/delivery_content.json")
            .then(response => {
                setDelivery(response.data); 
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className='delivery-content'>

            <div className="delivery-list-title">
                <h5>배송/교환/반품/AS 관련 유의사항</h5>
                <p>상품상세설명에 배송/교환/반품/취소 관련 안내가 기재된 경우 다음 안내사항보다 우선 적용됩니다.</p>
            </div>

            <table>

                <colgroup>
                    <col style={{"width":270}}/>
                </colgroup>

                <tbody>
                    {delivery && delivery.map((dev, index) => (
                        <tr key={index}>
                        <th>{dev.title}</th>
                            <td>
                                <ul>
                                    {dev.content.map((line, idx) => {
                                        if (line[0] === "상품하자 이외 사이즈, 색상교환 등 단순 변심에 의한 교환/반품 택배비 고객부담으로 왕복택배비가 발생합니다. (전자상거래 등에서의 소비자보호에 관한 법률 제18조(청약 철회등)9항에 의거 소비자의 사정에 의한 청약 철회 시 택배비는 소비자 부담입니다.)") {
                                            return (
                                                <li key={idx} className="special-item">{line[0]}</li> 
                                            );
                                        } else {
                                            return (
                                                <li key={idx}>{line[0]}</li>
                                            );
                                        }
                                    })}
                                </ul>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

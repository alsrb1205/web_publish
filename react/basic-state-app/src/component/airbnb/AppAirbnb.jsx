import { useState, useEffect } from "react";
import AirbnbComponent from "./AirbnbComponent";
import './css/airbnb.css'

export default function AppAirbnb() {
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch("/data/airbnb.json")
            .then(result => result.json())
            .then(jsonData => setList(jsonData.hotelList))
            .catch(error => console.log(error));
    }, []);

    return (
        <ul>
            {list && list.map((item) =>
            // list가 null 일때 출력되지않도록 구성
                <li>
                    <AirbnbComponent src={item.src}
                        loca={item.loca}
                        view={item.view}
                        date={item.date}
                        price={item.price} 
                        isGood={item.isGood}
                        color={item.color}/>
                </li>
            )}
        </ul>
    );
}
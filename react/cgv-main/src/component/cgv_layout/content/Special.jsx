import { useEffect, useState } from "react";
import SpecialItem from "./SpecialItem";

export default function Special() {
    const [list,setList] = useState([]);
    useEffect(()=>{
        fetch("data/cgv_content.json")
        .then(data=>data.json())
        .then(jsonData=>setList(jsonData.specialList))
        .catch();
    })
    return (
        <section class="content-padding special">
            <div class="content-title-style">
                <h3>특별관</h3>
                <button class="total-view-button">전체보기 &gt;</button>
            </div>
            <div class="special-content">
                <div>
                    <a href="#">
                        <img src="/images/special1.png" alt="special1" />
                    </a>
                </div>
                <div>
                    <ul>
                        {list&&list.map(item =>
                            <li>
                                <SpecialItem
                                    text1={item.text1}
                                    text2={item.text2}
                                />
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </section>
    );
}
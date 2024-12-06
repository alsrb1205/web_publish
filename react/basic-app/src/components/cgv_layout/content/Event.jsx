import EventItem from "./EventItem";
import { useState, useEffect } from "react";

export default function Event() {
    const [list,setList] = useState([]);
    useEffect(()=>{
        fetch("/data/cgv_content.json")
        .then(data=>data.json())
        .then(jsonData=>setList(jsonData.eventList))
        .catch();
    })

    return (
        <>
            <section class="content-padding event">
                <div class="content-title-style">
                    <h3 class="content-title-style-font font-color-main">EVENT</h3>
                    <button class="total-view-button">전체보기 &gt;</button>
                </div>
                <ul>
                    {list&&list.map(event =>
                        <li>
                            <EventItem src={event.src}
                                title={event.title}
                                date={event.date} />
                        </li>
                    )}
                </ul>
            </section>
        </>
    );
}
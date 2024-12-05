import EventItem from "./EventItem";
export default function Event() {
    const List = [
        {
            "src": "/images/event2.jpg",
            "title": "[CGV] 10월 컬처위크",
            "date": "2024.10.24~2024.10.31"
        },
        {
            "src": "/images/event1.jpg",
            "title": "[콜렉터블 무비머니]Vol.1 맥스 달튼",
            "date": "2024.09.25~2024.10.31"
        },
        {
            "src": "/images/event1.jpg",
            "title": "[콜렉터블 무비머니]Vol.1 맥스 달튼",
            "date": "2024.09.25~2024.10.31"
        },

    ]
    return (
        <>
            <section class="content-padding event">
                <div class="content-title-style">
                    <h3 class="content-title-style-font font-color-main">EVENT</h3>
                    <button class="total-view-button">전체보기 &gt;</button>
                </div>
                <ul>
                    {List.map(event =>
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
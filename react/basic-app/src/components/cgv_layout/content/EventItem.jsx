
export default function EventItem({ src, title, date }) {
    return (
        <>
            <div>
                <img src={src} alt="event img" />
            </div>
            <div>
                <p class="event-content-title">
                    {title}
                </p>
                <p class="event-content-title-date">
                    {date}
                </p>
            </div>
        </>
    )
}
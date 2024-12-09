export default function AirbnbComponent({ src, isGood, color, loca, view, date, price }) {
    return (
        <div className="container">
            <div className="img">
                <img src={src} alt="" />
                {isGood && <span className="isgood">게스트 선호</span>}
                {/* isGood 속성이 true일때만 출력되도록 구성 */}
                <span className="heart" style={{ color: color }}>❤</span>
                {/* color속성에 따라 색깔 바뀌게 구성 */}
            </div>
            <div className="description">
                <p className="d1">{loca}</p>
                <p className="d2">{view}</p>
                <p className="d3">{date}</p>
                <p className="d4">{price} /박</p>
            </div>
        </div>
    );
}
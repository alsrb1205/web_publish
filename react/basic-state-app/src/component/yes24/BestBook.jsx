import BestBookButton from "./BestBookButton";

export default function BestBook() {
    const list = [
        { "img": "https://image.yes24.com/goods/13137546/L" },
        { "img": "https://image.yes24.com/goods/108422348/L" },
        { "img": "https://image.yes24.com/goods/103495056/L" }
    ];
    return (
        <>
            <div>전체수량 : {totalQty}</div>
            {list.map((item) => 
            <div style={{display:"flex"}}>
                <img src={item.img} width={"200px"}/>
                <BestBookButton />
            </div>
            )}
        </>
    );
}

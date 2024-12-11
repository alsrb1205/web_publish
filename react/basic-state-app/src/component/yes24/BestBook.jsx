import BestBookButton from "./BestBookButton";
import { useState } from "react";

export default function BestBook() {
    const list = [
        { "img": "https://image.yes24.com/goods/13137546/L" },
        { "img": "https://image.yes24.com/goods/108422348/L" },
        { "img": "https://image.yes24.com/goods/103495056/L" }
    ];
    const [totalQty, setTotalQty] =useState(0);
    const handleChangeQty = (qty)=>{
        setTotalQty(totalQty+qty);
    }
    return (
        <>
            <div>전체수량 : {totalQty}</div>
            {list.map((item) => 
            <div style={{display:"flex"}}>
                <img src={item.img} width={"200px"}/>
                <BestBookButton qtyChange={handleChangeQty}/>
            </div>
            )}
        </>
    );
}

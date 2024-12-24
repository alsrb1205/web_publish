import HeaderBottomMenu from "./HeaderBottomMenu"
import { useEffect,useState } from "react";
import { fetchJSON } from "../js/commons.js";

export default function HeaderBottomMenuList() {
    const [menuList, setMenuList]=useState([]);
    useEffect(()=>{
        fetchJSON("data/cgv_header.json")
        .then(result=>setMenuList(result.bottomMenuList));
    })
    return (
        <ul class="flex-container">
            {menuList&&menuList.map(item =>
                <li>
                    <HeaderBottomMenu name={item.name} />
                </li>
            )}
        </ul>
    )
}
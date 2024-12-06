import { useEffect,useState } from "react";
import HeaderTopMenu from "./HeaderTopMenu";

export default function HeaderTopMenuList() {
    const [list,setList] = useState([]);
    useEffect(()=>{
        fetch("/data/cgv_header.json")
        .then(data=>data.json())
        .then(jsonData=>setList(jsonData.topMenuList))
        .catch();
    })
    return (
        <nav>
            <ul>
                {list&&list.map((menu) =>
                    <li>
                        <HeaderTopMenu
                            href={menu.href}
                            src={menu.src}
                            name={menu.name} />
                    </li>
                )}
            </ul>
        </nav>

    );
}
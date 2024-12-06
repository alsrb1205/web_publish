import PackageContent from "./PackageContent";
import { useState,useEffect } from "react";

export default function Package() {
    const [list,setList] = useState([]);
    useEffect(()=>{
        fetch("/data/cgv_content.json")
        .then(data=>data.json())
        .then(jsonData=>setList(jsonData.packageList))
        .catch();
    })

    return (
        <section class="content-packmovie content-padding">
            {list&&list.map(object=>
        <PackageContent title={object.title}
                        list={object.list}/> 
            )}
        </section>
    );
}
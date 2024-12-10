import { useEffect, useState } from "react";
import AvatarComponent from "./AvatarComponent";
import './css/Avatar.css';

export default function AppAvatar() {
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch('/data/avatar.json')
            .then(result => result.json())
            .then(jsonData => setList(jsonData))
            .catch(error => console.log(error));
    })
    return (
        <ul>
            {list && list.map(item =>
                <li>
                    <AvatarComponent src={item.src}
                        name={item.name}
                        newMember={item.newMember} />
                </li>
            )}
        </ul>
    );
}
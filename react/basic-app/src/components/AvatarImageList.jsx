import AvatarImage from "./AvatarImage.jsx";
import '../css/Avatar.css'
export default function AvatarImageList({list}) {
    return(
        <ul className="avatarlist-content">
            {list.map((object)=>
            <li>
                <AvatarImage img={object.img}
                        name={object.name}/>
            </li>
            )}
        </ul>
    );

}
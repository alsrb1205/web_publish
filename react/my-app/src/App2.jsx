import './App2.css';
import Avatar from "./commponents/Avatar.jsx";
import AvatarList from './commponents/AvatarList.jsx';
export default function App2() {
    const list = [
        {"img":"/images/people1.webp", "name":"Smith", "age":"20"},
        {"img":"/images/people2.webp", "name":"James", "age":"28"},
        {"img":"/images/people3.webp", "name":"Jane", "age":"25"}
    ]

    return (
        <>
            <div className='container'>
                <Avatar img="/images/people1.webp" name="Smith" age="20" />
                <Avatar img="/images/people2.webp" name="James" age="28" />
                <Avatar img="/images/people3.webp" name="Jane" age="25" />
            </div>
            <AvatarList list={list}/>
        </>
    );
}
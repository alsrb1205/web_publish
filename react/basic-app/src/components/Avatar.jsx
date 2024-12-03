
import AvatarImage from './AvatarImage';

export default function Avatar({img, name}) {
    return (
        <div className="avatar-container">
            <AvatarImage img={img}/>
            <p>{name}</p>
        </div>
    );
}
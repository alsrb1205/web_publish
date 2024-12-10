
export default function AvatarComponent({ src, name, newMember }) {
    return (
        <div className="container">
            <div className="image-container">
                <img src={src} alt="" className="images" />
                {newMember && <span className="new">new</span>}
            </div>
            <div className="name">
                <p>{name}</p>
            </div>
        </div>
    );

}
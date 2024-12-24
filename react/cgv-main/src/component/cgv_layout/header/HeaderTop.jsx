import HeaderTopImage from "./HeaderTopImage";
import HeaderTopMenuList from "./HeaderTopMenuList";
import Logo from "./Logo";

export default function HeaderTop() {
    return (
        <div className="header-top">
            <Logo
                href="#"
                src="images/logoRed.png"
                text="DEEP DIVE SPACE"
                target="_self"
                alt=""
            />
            <HeaderTopImage
                src="images/header_card_img.png"
                alt=""
            />
            <HeaderTopMenuList />
        </div>
    );
}
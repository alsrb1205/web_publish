import HeaderBottomMenuList from "./HeaderBottomMenuList";
import HeaderBottomSearch from "./HeaderBottomSearch";

export default function HeaderBottom() {

    return (
        <div className="header-bottom">
            <div className="header-bottom-content">
                <HeaderBottomMenuList />
                <HeaderBottomSearch />
            </div>
        </div>
    );
}
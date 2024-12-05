import HeaderTopMenu from "./HeaderTopMenu";

export default function HeaderTopMenuList() {
    const list = [
        {
            "href": "#",
            "src": "/images/loginPassword.png",
            "name": "로그인"
        },
        {
            "href": "#",
            "src": "/images/loginJoin.png",
            "name": "회원가입"
        },
        {
            "href": "#",
            "src": "/images/loginMember.png",
            "name": "MY CGV"
        },
        {
            "href": "#",
            "src": "/images/loginCustomer.png",
            "name": "고객센터"
        }
    ]
    return (
        <nav>
            <ul>
                {list.map((menu) =>
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
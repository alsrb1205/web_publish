import Menu from './Menu';
import './Menu.css';

export default function MenuList({ list ,click}) {
    const handleClickReq = (category) => {
        click(category);
    }
    return (
        <ul className="menu-container">
            {list && list.map(item =>
                <li>
                    <Menu name={item.name}
                        href={item.href}
                        bg={item.bg}
                        color={item.color}
                        click ={handleClickReq}
                        category={item.category} />
                </li>)}
        </ul>
    );
}
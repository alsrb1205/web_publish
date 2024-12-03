import Menu from './Menu.jsx';
import MenuList from './MenuList.jsx';

export default function AppMenu() {
    const nameList = [
        {"name":"Home", "href":"#home", "bg":"gray", "color":"whi"},
        {"name":"About", "href":"#about", "bg":"gray"},
        {"name":"Skills", "href":"#skills", "bg":"gray"},
        {"name":"My Work", "href":"#mywork", "bg":"gray"},
        {"name":"Testimonial", "href":"#testimonial", "bg":"gray"},
        {"name":"Contact", "href":"#contact", "bg":"gray"}
    ];

    return(
        <>
        <div>
            <Menu name="Home" href="#home" bg="gray" color="white" />
            <Menu name="About" href="#about" bg="tomato" />
            <Menu name="Skills" href="#skills"  bg="blue"/>
            <Menu name="My Work" href="#mywork" bg="red" />
            <Menu name="Testimonial" href="#testimonial"  bg="purple"/>
            <Menu name="Contact" href="#contact"  bg="bisque"/>
        </div>
        <div>
            <MenuList list={nameList}/>
        </div>
        </>
    );
}
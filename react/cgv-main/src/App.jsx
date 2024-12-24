import './component/cgv_layout/css/cgv.css';
import './component/cgv_layout/css/common.css';
import Header from './component/cgv_layout/Header'
import HeaderTop from './component/cgv_layout/header/HeaderTop';
import HeaderBottom from './component/cgv_layout/header/HeaderBottom';
import Content from './component/cgv_layout/Content';
import Top from './component/cgv_layout/content/Top';
import MovieChart from './component/cgv_layout/content/MovieChart';
import EventSpecial from './component/cgv_layout/content/EventSpecial';
import GoToButton from './component/cgv_layout/content/GoToButton';
import Footer from './component/cgv_layout/Footer';
import FooterTop from './component/cgv_layout/footer/FooterTop';
import FooterContent from './component/cgv_layout/footer/FooterContent';
export default function App() {
    return (
        <>
            <Header>
                <HeaderTop />
                <HeaderBottom />
            </Header>
            <Content>
                <Top />
                <MovieChart />
                <EventSpecial />
                <GoToButton/>
            </Content>
            <Footer>
                <FooterTop src="images/980x240.png"/>
                <FooterContent/>
            </Footer>
        </>
    );
}
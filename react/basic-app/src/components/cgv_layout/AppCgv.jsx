import Header from './Header'
import HeaderTop from './header/HeaderTop';
import HeaderBottom from './header/HeaderBottom';
import Content from './Content';
import Top from './content/Top';
import MovieChart from './content/MovieChart';
import EventSpecial from './content/EventSpecial';
import './css/cgv.css';
import './css/common.css';
import GoToButton from './content/GoToButton';
import Footer from './Footer';
import FooterTop from './footer/FooterTop';
import FooterContent from './footer/FooterContent';
export default function AppCgv() {
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
                <FooterTop src="/images/980x240.png"/>
                <FooterContent/>
            </Footer>
        </>
    );
}
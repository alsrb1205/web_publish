import Header from './component/Header';
import './App.css';
import Logo from './component/header/Logo';
import MenuList from './component/header/MenuList';
import './component/style.css';
import ToggleButton from './component/header/ToggleButton';
import Content from './component/Content';
import Home from './component/content/Home';
import Footer from './component/Footer';
import SectionWrap from './component/content/SectionWrap';
import Majors from './component/content/Majors';
import Jobs from './component/content/Jobs';
import Skills from './component/content/Skills';
import Coding from './component/content/Coding';
import ArticleWrap from './component/content/ArticleWrap';
import Categories from './component/content/Categories';
import Projects from './component/content/Projects';
import Testimonials from './component/content/Testimonials';
import ArrowUp from './component/content/ArrowUp';
import Top from './component/footer/Top';
import ContactLinks from './component/footer/ContactLinks';
import Bottom from './component/footer/Bottom';
import { useState } from 'react';

function App() {
  const [isOpen,setIsOpen] = useState(false);

  const handleToggle =()=>{
    setIsOpen((prevState) => !prevState);
}

  return (
    <>
    <Header>
    <Logo img="images/favicon.ico" name="Judy"/>
    <MenuList isOpen={isOpen}/>
    <ToggleButton handleToggle={handleToggle}/>
    </Header>
    <Content>
      <Home img="images/favicon.ico" name="Judy"/>
      <SectionWrap id="about" title="About me" description="asd">
        <Majors />
        <Jobs/>
      </SectionWrap>
      <SectionWrap id="skill"  title="My Skills" description="skill">
        <Skills>
          <Coding/>
          <ArticleWrap type="Tools"/>
          <ArticleWrap type="Etc"/>
        </Skills>
      </SectionWrap>
      <SectionWrap id="work" title="My Work" description="Projects">
      <Categories/>
      <Projects/>
      </SectionWrap>
      <SectionWrap id="testimonial" title="Testimonial" description="See what they say about me">
        <Testimonials/>
      </SectionWrap>
    </Content>
    <ArrowUp/>
    <Footer>
      <Top title="Let's talk" description="jeon.developer.judy@gmail.com"/>
      <ContactLinks/>
      <Bottom/>
    </Footer>
    </>
  );
}

export default App;

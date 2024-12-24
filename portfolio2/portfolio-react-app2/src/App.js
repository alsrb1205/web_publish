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

const sectionList = [
  {
    "id": "about",
    "title": "About me",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure natus, temporibus perspiciatis repudiandae nostrum modi doloremque expedita non eius ipsum! Beatae porro adipisci omnis architecto dignissimos. Iusto ipsa inventore adipisci.",
    "children": [
      { "component": "Majors" },
      { "component": "Jobs" }
    ]
  },
  {
    "id": "skill",
    "title": "My Skills",
    "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis beatae, aliquid ratione commodi nam ex voluptate rem eveniet cupiditate optio natus? Cum, harum eum sint id quod nulla adipisci. Sunt?",
    "children": [
      {
        "component": "Skills",
        "children": [
          { "component": "Coding" },
          { "component": "ArticleWrap", "props": { "type": "Tools" } },
          { "component": "ArticleWrap", "props": { "type": "Etc" } }
        ]
      }
    ]
  },
  {
    "id": "work",
    "title": "My work",
    "description": "Projects",
    "children": [
      { "component": "Categories" },
      { "component": "Projects" }
    ]
  },
  {
    "id": "testimonial",
    "title": "Testimonial",
    "description": "See what they say about me",
    "children": [
      { "component": "Testimonials" }
    ]
  }
];

const componentMap = {
  Majors,
  Jobs,
  Skills,
  Coding,
  ArticleWrap,
  Categories,
  Projects,
  Testimonials
};

//자식 컴포넌트 렌더링 : 재귀함수 (자기 자신을 호출하는 함수)
const renderComponent = (childObj) => { // { "component": "Testimonials" }
  const Component = componentMap[childObj.component];
  if (!Component) return null;

  return (
    <Component key={childObj.component + JSON.stringify(childObj.props || {})} {...(childObj.props || {})}>
      {childObj.children && childObj.children.map((childObj) => renderComponent(childObj))}
    </Component>
  );
};

  return (
    <>
    <Header>
    <Logo img="images/favicon.ico" name="Judy"/>
    <MenuList isOpen={isOpen}/>
    <ToggleButton handleToggle={handleToggle}/>
    </Header>
    <Content>
      <Home img="images/favicon.ico" name="Judy"/>
      {sectionList && sectionList.map((section) => (
          <SectionWrap
            key={section.id}
            id={section.id}
            title={section.title}
            description={section.description}
          >
            {section.children.map((child) => renderComponent(child))}

          </SectionWrap>
      ))}    
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

import React, { useEffect, useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import HeaderLogo from './header/HeaderLogo';
import HeaderMenuList from './header/HeaderMenuList';
import About from './main/about/About';
import Home from './main/home/Home';
import Skills from './main/skills/Skills';
import MyWork from './main/mywork/MyWork';
import Testimonial from './main/testimonial/Testimonial';
import Contact from './footer/Contact';

export default function AppPortfolio() {
    const [menuList, setMenuList] = useState([]);
    const [majorList,setMajorList] =useState([]);
    const [jobList,setJobList] =useState([]);
    const [barList,setBarList] =useState([]);

    useEffect(()=>{
        fetch('/data/portfolio.json')
        .then(data=>data.json())
        .then(jsonData=>{
            setMenuList(jsonData.headermenu);
            setMajorList(jsonData.majorlist);
            setJobList(jsonData.joblist);
            setBarList(jsonData.barlist);
        }
            
            )

    })
    return (
        <div>
            <Header>
                <HeaderLogo/>
                <HeaderMenuList list={menuList}/>
            </Header>
            <Main>
                <Home/>
                <About majorList={majorList} jobList={jobList}/>
                <Skills barList={barList}/>
                {/* <MyWork/> */}
                {/* <Testimonial/> */}
            </Main>
            <Footer>
                {/* <Contact/> */}
            </Footer>
        </div>
    );
}


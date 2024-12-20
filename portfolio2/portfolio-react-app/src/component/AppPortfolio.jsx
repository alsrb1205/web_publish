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
import ArrowUp from './main/ArrowUp';

export default function AppPortfolio() {
    const [menuList, setMenuList] = useState([]);
    const [majorList, setMajorList] = useState([]);
    const [jobList, setJobList] = useState([]);
    const [barList, setBarList] = useState([]);
    const [tools, setTools] = useState([]);
    const [etcList, setEtcList] = useState([]);
    const [testimonial, setTestimonial] = useState([]);

    useEffect(() => {
        fetch('/data/portfolio.json')
            .then(data => data.json())
            .then(jsonData => {
                setMenuList(jsonData.headermenu);
                setMajorList(jsonData.majorlist);
                setJobList(jsonData.joblist);
                setBarList(jsonData.barlist);
                setTools(jsonData.skillstools);
                setEtcList(jsonData.etclist);
                setTestimonial(jsonData.testimonial)
            }
            )
            .catch(error => console.log(error));
    }, [])
    return (
        <div>
            <Header>
                <HeaderLogo />
                <HeaderMenuList list={menuList} />
            </Header>
            <Main>
                <Home />
                <About majorList={majorList} jobList={jobList} />
                <Skills barList={barList} tools={tools} etcList={etcList} />
                <MyWork />
                <Testimonial testimonial={testimonial} />
                <ArrowUp />
            </Main>
            <Footer>
                <Contact />
            </Footer>
        </div>
    );
}


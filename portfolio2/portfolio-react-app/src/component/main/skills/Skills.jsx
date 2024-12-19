import React from 'react';
import SkillsCoding from './SkillsCoding';
import SkillsTools from './SkillsTools';
import SkillsEtc from './SkillsEtc';

export default function Skills({barList}) {
    return (
        <section id="skill" className="section max-container">
        <h2 className="title">My Skills</h2>
        <p className="description">Skills & Attributes</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Nobis beatae, aliquid ratione commodi nam ex voluptate rem
          eveniet cupiditate optio natus? Cum, harum eum sint id quod
          nulla adipisci. Sunt?</p>
        <div className="skills">
            <SkillsCoding barList={barList}/>
            <SkillsTools/>
            <SkillsEtc/>
        </div>
      </section>
  
      );
}


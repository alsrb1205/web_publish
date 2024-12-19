import React from 'react';
import SkillsCodingBar from './SkillsCodingBar';

export default function SkillsCoding({barList}) {
    return (
        <article className="skills__coding">
        <h3 className="skill__title">Coding Skills</h3>
        <ul>
          {barList && barList.map(bar=>
            <SkillsCodingBar name={bar.name}
                              per={bar.per}/>

          )}
        </ul>
      </article>
);
}


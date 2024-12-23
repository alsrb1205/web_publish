import React from 'react';
import CodingBar from './CodingBar';

export default function Coding() {
  const codelist = [
    {
      "title": "HTML",
      "per": 98
    },
    {
      "title": "CSS",
      "per": 90
    },
    {
      "title": "JavaScript",
      "per": 90
    },
    {
      "title": "TypeScript",
      "per": 80
    },
    {
      "title": "React",
      "per": 79
    },
    {
      "title": "NodeJS",
      "per": 68
    }
  ]

  return (
    <article className="skills__coding">
      <h3 className="skill__title">Coding Skills</h3>
      <ul>
        {codelist && codelist.map((code)=>
        <li className="bar">
          <CodingBar title={code.title} per={code.per}/>
        </li>
        )}
      </ul>
    </article>
  );
}


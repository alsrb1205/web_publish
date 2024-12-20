import React from 'react';

export default function SkillsTools({ tools }) {
  return (
    <article className="skills__tools">
      <h3 className="skill__title">Tools</h3>
      <ul>
        {tools.map((tool) =>
                  <li>{tool.stitle}</li>
        )}
      </ul>
    </article>
  );
}


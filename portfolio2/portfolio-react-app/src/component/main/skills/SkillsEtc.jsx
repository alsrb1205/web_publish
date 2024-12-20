import React from 'react';

export default function SkillsEtc({ etcList }) {
  return (
    <article className="skills__etc">
      <h3 className="skill__title">Etc</h3>
      <ul>
        {etcList && etcList.map(etc =>
        <li>{etc.etc}</li>
      )}
      </ul>
    </article>
  );
}


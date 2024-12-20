import React from 'react';

export default function SkillsCodingBar({ name, per }) {
  return (
    <li className="bar">
      <div className="bar__metadata"><span>{name}</span><span>{per}</span></div>
      <div className="bar__bg">
        <div className="bar__value" style={{ "width": `${per}` }}></div>
      </div>
    </li>
  );
}


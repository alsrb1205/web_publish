import React from 'react';
import AboutMajor from './AboutMajor';

export default function AboutMajorList({ majorList }) {
    return (
        <ul className="majors">
            {majorList && majorList.map(major =>
                <AboutMajor icon={major.icon}
                    title={major.title}
                    desc={major.desc} />
            )}
        </ul>
    );
}

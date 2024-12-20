import React from 'react';
import AboutJob from './AboutJob';

export default function AboutJobList({ jobList }) {
    return (
        <ul className="jobs">
            {jobList && jobList.map(job =>
                <AboutJob img={job.img}
                    name={job.name}
                    period={job.period} />
            )}
        </ul>
    );
}


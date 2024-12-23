import React from 'react';
import Job from './Job';

export default function Jobs() {
    const joblist= [
        {
            "img": "images/jobs/google.png",
            "name": "Google as Junior Software Engineer",
            "period": "2019 Oct - Until now",
            "alt":"google"
        },
        {
            "img": "images/jobs/samsung.png",
            "name": "Samsung as Junior Software Engineer",
            "period": "2010 Oct - 2019 Oct",
            "alt":"samsung"
        }
    ]

    return (
        <ul className="jobs">
            {joblist && joblist.map((job)=>
          <li className="job">
            <Job name={job.name} period={job.period} alt={job.alt} img={job.img}/>
          </li>
            )}
        </ul>
    );
}


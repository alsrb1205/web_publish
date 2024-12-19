import React from 'react';
import AboutMajor from './AboutMajor';
import AboutJob from './AboutJob';
import AboutMajorList from './AboutMajorList';
import AboutJobList from './AboutJobList';

export default function About({majorList, jobList}) {
  return (

    <section id="about" className="section max-container">
      <h2 className="title">About me</h2>
      <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Iure natus, temporibus perspiciatis repudiandae nostrum modi
        doloremque expedita non eius ipsum! Beatae porro adipisci
        omnis architecto dignissimos. Iusto ipsa inventore adipisci.</p>
      <AboutMajorList majorList={majorList}/>
      <AboutJobList jobList={jobList}/>
    </section>

  );
}


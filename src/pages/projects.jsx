import React, { useEffect, useState } from 'react';
import PageTemplate from "../components/PageTemplate";

const items = [
  {
    name: 'EUCLIP DRUM CONSOLE',
    year: '2018-Current',
    src: '',
    desc: (<>
      <p>A hackable, collaborative, web-based music environment. This experiment is a wrapper around the javascript noise making library called <a href="https://billorcutt.github.io/i_dropped_my_phone_the_screen_cracked/index.html">i_dropped_my_phone_and_the_screen_cracked</a> by Bill Orcutt.</p>
      <p>The Cracked library provides a lot of useful tools familiar to electronic musicians. EUCLIP is part DAW, part groove box, part live coding environment which runs cracked under the hood.</p>
      <p>You can make beats, design interesting signal chains with the web audio API, and program algrothmic musical logic. It also comes with a large library of vintage drum machine sounds</p>
      <p>This project is rough around the edges and needs some work before it can be easily used by musicians and coders.</p>
        
    </>),
  },
  {
    name: 'Improvisation Software',
    desc: (<>
        <p></p>
      </>)
  },
  {
    name: 'LAB/YRI/NTH',
    year: '2022',
    desc: ''
  }

];


const Projects = () => {
  return <PageTemplate pageName="Projects" items={items} />
};

export default Projects;

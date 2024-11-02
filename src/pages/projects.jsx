import React, { useEffect, useState } from 'react';
import PageTemplate from "../components/PageTemplate";

const items = [
  {
    name: 'EUCLIP DRUM CONSOLE',
    year: '2018-Current',
    src: '',
    desc: (<>
        <p>A hackable, collaborative, web-based music environment. This experiment is a wrapper around the javascript noise making library called [i_dropped_my_phone_and_the_screen_cracked]() by Bill Orcutt.</p>
<p></p>
"cracked" provides a lot of useful tools familiar to electronic musicians. EUCLIP is part DAW, part groove box, part coding environment which that runs cracked under the hood, allowing users to write custom code audio, or to simply make some noise by clicking around the interface. 


Features: 
- a large library of vintage drum machine sounds
- a hybrid UI and live coding environment for compositing audio signal chains

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

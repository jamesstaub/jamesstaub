import React, { useEffect, useState } from 'react';
import PageTemplate from "../components/PageTemplate";

const items = [
  {
    name: 'EUCLIP DRUM CONSOLE',
    year: '2018-Current',
    target: 'web',
    src: 'https://bandcamp.com/EmbeddedPlayer/list=2787704011/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/',
    desc: 'ARC! is a cello improvisation with an algorithmic accompaniment system built between 2022 and 2024. The synthesis is built using the fantastic sp-tools library built by Rodrigo Constanzo. The system uses onset detection, timbre classificatiton an corpus-based sampling.',
  },

];



const Projects = () => {
  return <PageTemplate pageName="Projects" items={items} />
};

export default Projects;

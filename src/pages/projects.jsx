import React, { useEffect, useState } from 'react';
import PageTemplate from "../components/PageTemplate";

const items = [
  {
    name: 'EUCLIP DRUM CONSOLE',
    year: '2018-Current',
    target: 'web',
    src: '',
    desc: '',
  },

];


const Projects = () => {
  return <PageTemplate pageName="Projects" items={items} />
};

export default Projects;

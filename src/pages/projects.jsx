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
  {
    name: 'Generative Accompaniment Programs',
    target: 'Max/MSP',
    desc: '<a href="www.google.com">link</a>'
  },
  {
    name: 'LAB/YRI/NTH',
    target: 'Algorithmic Music',
    year: '2022',
    desc: ''
  }

];


const Projects = () => {
  return <PageTemplate pageName="Projects" items={items} />
};

export default Projects;

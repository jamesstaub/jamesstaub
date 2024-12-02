import React, { useEffect, useState } from 'react';
import PageTemplate from "../components/PageTemplate";
import LinkTo from "../components/LinkTo";
const items = [
  {
    name: 'EUCLIP DRUM CONSOLE',
    year: '2018-Current',
    src: '',
    desc: (<>
      <p><a href="https://euclip.app">Demo</a></p>
      <p>A hackable, collaborative, web-based music environment. This experiment is a wrapper around the javascript noise making library called <a href="https://billorcutt.github.io/i_dropped_my_phone_the_screen_cracked/index.html">i_dropped_my_phone_and_the_screen_cracked</a> by Bill Orcutt.</p>
      <p>The Cracked library provides a lot of useful tools familiar to electronic musicians. EUCLIP is part DAW, part groove box, part live coding environment which runs cracked under the hood.</p>
      <p>You can make beats, design interesting signal chains with the web audio API, and program algrothmic musical logic. It also comes with a large library of vintage drum machine sounds</p>
      <p></p>
        
    </>),
  },
  {
    name: 'Improvisation Software',
    desc: (
      <>
      <p>In 2014 I discovered the MUBU package for Max MSP, <i>a toolkit for corpus-based concatenative synthesis, audio mosaicing, descriptor analysis, transcription, and composition.</i></p>
      <p>Since then my composition and performance practice has been largely based on these techniques.</p>
      <p>Soon I'll post more in-depth writing about this topic, but for now you can <LinkTo to='/music#machine-listening-demos'>listen to some examples of the work.</LinkTo></p>
      </>
    )
  },
  {
    name: 'LAB/YRI/NTH',
    year: '2022',
    desc: (
      <>
        <img src="/assets/12d.gif" alt="LAB/YRI/NTH" />
        <p>LAB/YRI/NTH is a collection of compositions made with a program I built for generating and exploring high-dimensional interval lattices</p>
        {/* what is an interval lattice, link to prior art on tone lattices, aka tonnetz */}
        <p>Based on the concept of <a href="https://en.wikipedia.org/wiki/Tonnetz#:~:text=In%20musical%20tuning%20and%20harmony,relationships%20in%20European%20classical%20music.">Tonnetz</a>, the program constructs a multi-dimensional array where each dimension is an <a href="https://en.wikipedia.org/wiki/Interval_cycle#:~:text=In%20music%2C%20an%20interval%20cycle,of%20the%20same%20interval%20class.">interval cycle.</a>.</p>

        {/* explain high-dimensional matrix */}

        {/* explain interval cycles, (eg circle of fourths,  fifths,) labryth  */}
      </>
    )
  }

];


const Projects = () => {
  return <PageTemplate pageName="Projects" items={items} />
};

export default Projects;

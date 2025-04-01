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
        <p>Based on the concept of <a href="https://en.wikipedia.org/wiki/Tonnetz#:~:text=In%20musical%20tuning%20and%20harmony,relationships%20in%20European%20classical%20music.">Tonnetz</a>, the program constructs a multi-dimensional array where each dimension is an <a href="https://en.wikipedia.org/wiki/Interval_cycle#:~:text=In%20music%2C%20an%20interval%20cycle,of%20the%20same%20interval%20class.">interval cycle.</a>Teh data structure created is a 12 dimensional lattice where each dimension is a range of notes. The first dimension is half steps, the second is whole steps, and so on up to the 12th dimension which is octaves.</p>
        <p>Each point in the high-dimensional space is a musical note that rests at the junction of all 12 dimensions and can be represented by 12-digit coordinates like [0,0,0,0,0,0,0,0,0,0,0,0].</p>
        <p>The program works like an arpeggiator. There are 12 LFOs, 1 per axes, which oscillate at differrent rates to output a set of coordinates to lookup a note from the datastructure.  </p>


        {/* what is an interval lattice, link to prior art on tone lattices, aka tonnetz */}
        {/* explain high-dimensional matrix */}
        {/* explain interval cycles, (eg circle of fourths,  fifths,) labryth  */}
      </>
    )
  },
  {
    name: 'Pink Trombone for Max/MSP',
    year: '2018',
    desc: (
      <>
        <p><a href="https://github.com/jamesstaub/pink-trombone-osc">Project Github</a></p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/2rSIa1-CUTI?si=n2z1o7o6VKbsM0TA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <p>I added OSC support to  <a href="http://dood.al/pinktrombone/">Pink Trombone</a> by Neil Thapen so it can be embedded in a Max Patch</p>
        <p>This project uses a node server and to server and send OSC messages (via websocket) to a modified version of the pink trombone. The purpose is to create an interface for music and media composition programs to control the instrument.</p>
        <p>This version uses the fantastic re-write of the original PT code by https://github.com/zakaton/Pink-Trombone which refactored the original by (Neil Thapen) to use web audio worklets rather than the ScriptProcessorNode which resulted in performance issues.</p>
        <p>Thanks to the Max 9's jweb~ object we can now embed PT right in the max patch and pipe the audio wherever you want.</p>
      </>
    )
  }

];


const Projects = () => {
  return <PageTemplate pageName="Projects" items={items} />
};

export default Projects;

import labyrinthGif from "../../assets/12d.gif";
import dataKnotImg from "../../assets/data-knot.png";

export const projectsData = [
  {
    name: 'EUCLIP DRUM CONSOLE',
    year: '2018-Current',
    src: '',
    desc: (
      <>
        <p><a href="https://euclip.app">Demo</a></p>
        <p>A hackable, collaborative, web-based music environment. This experiment is a wrapper around the javascript noise making library called <a href="https://billorcutt.github.io/i_dropped_my_phone_the_screen_cracked/index.html">i_dropped_my_phone_and_the_screen_cracked</a> by Bill Orcutt.</p>
        <p>The Cracked library provides a lot of useful tools familiar to electronic musicians. EUCLIP is part DAW, part groove box, part live coding environment which runs cracked under the hood.</p>
        <p>You can make beats, design interesting signal chains with the web audio API, and program algrothmic musical logic. It also comes with a large library of vintage drum machine sounds</p>
        <p></p>
      </>
    ),
  },
  {
    name: 'Improvisation Software',
    desc: (
      <>
        <p>In 2014 I discovered the MUBU package for Max MSP, <i>a toolkit for corpus-based concatenative synthesis, audio mosaicing, descriptor analysis, transcription, and composition.</i></p>
        <p>Since then my composition and performance practice has been largely based on these techniques.</p>
        <div>
          <img src={dataKnotImg} alt="Improvisation Software built in Max MSP" />
        </div>
        <p>
          In 2022 I discovered the fantastic <a target="_blank" rel="noopener noreferrer" href="https://github.com/rconstanzo/SP-tools/tree/master">DataKnot (SP-Tools) library for Max/MSP</a> which lead me to a complete overhaul of performance system. 
        </p>
        <p>I describe my approach in the program note for ICMC25, where I performed an improvisation for cello and realtime accompaniement software built with DataKnot:</p>
        <hr></hr>
        <div>
          <h3 className="f3">Window Dressing (2025) Program Note: </h3>
          <p>Window Dressing is an improvisation for cello and algorithmic accompaniment system. The cello’s sound is analyzed in real-time using perceptual audio descriptors and machine learning algorithms, which generate data that drives various synthesis engines. The system listens to the live input and generates musical phrases, creating a reciprocal exchange between performer and technology.</p>
          <p>The performer embraces a new improvisational approach, emphasizing free-form textures and extended cello techniques. The system detects gestures and articulations, responding to nuances in bowing, dynamics, and rhythm. The performer guides the system using an acoustic musical language, creating an active, evolving dialogue between acoustic and synthesized sound.</p>
          <p>The system is composed of several modules that analyze pitch, harmony, rhythm, dynamics, and timbre over short, medium and long time windows. The synthesis engine, built in MaxMSP, uses a combination of concatenative synthesis, physical modeling, and other techniques to process and manipulate the live sound.</p>
          <p>The system has two primary goals. The first is to free the performer from traditional controllers like MIDI keyboards or foot switches, enabling full immersion in the music and fostering a more mindful, intuitive collaboration. The second is to ensure the audience can intuitively perceive the connection between the performer’s gestures and the sound being generated. Often in performances with live electronics, it’s unclear what is happening in real time versus what is pre-recorded, which can diminish the "liveness" of a live performance. This system aims to make the real-time interaction unmistakable, restoring the dynamic energy that defines live music.</p>
          <p>Unlike the generative AI art that is quickly becoming ubiquitous in media, the machine learning techniques employed in this piece function more as a translator than a creator. They refine raw audio signals into musically meaningful data, which is then used to control conventional synthesis techniques such as samplers, oscillators, delays etc. In contrast to AI systems that "learn" from large datasets to generate new content, this system is highly specific, designed to listen and respond to the performer, and playback phrases constructed from a curated library of sounds. Its decisions in response to the live audio are based on the musical-preferences programmed into the system.</p>
          <p>Programming this system is akin to composing a score. However, unlike a conventional score, the musical language is a dynamic system of cause and effect, which changes depending on the nature of the performance. The goal is to maintain the expressiveness and variety of sound generation while removing the need for technical interventions by the performer. The cello is the only controller, the gestures and articulation are the instructions. This enables a greater focus and presence by the performer.</p>
        </div>

      </>
    )
  },
  {
    name: 'LAB/YRI/NTH',
    year: '2022',
    desc: (
      <>
        <img src={labyrinthGif} alt="LAB/YRI/NTH" />
        <p>LAB/YRI/NTH is a collection of compositions made with a program I built for generating and exploring high-dimensional interval lattices</p>
        <p>Based on the concept of <a href="https://en.wikipedia.org/wiki/Tonnetz#:~:text=In%20musical%20tuning%20and%20harmony,relationships%20in%20European%20classical%20music.">Tonnetz</a>, the program constructs a multi-dimensional array where each dimension is an <a href="https://en.wikipedia.org/wiki/Interval_cycle#:~:text=In%20music%2C%20an%20interval%20cycle,of%20the%20same%20interval%20class.">interval cycle.</a>Teh data structure created is a 12 dimensional lattice where each dimension is a range of notes. The first dimension is half steps, the second is whole steps, and so on up to the 12th dimension which is octaves.</p>
        <p>Each point in the high-dimensional space is a musical note that rests at the junction of all 12 dimensions and can be represented by 12-digit coordinates like [0,0,0,0,0,0,0,0,0,0,0,0]. A fifth above the root coordinate could be found at the coordinates [0,0,0,0,0,0,1,0,0,0,0,0] (up one position on the 7-semitone axis), and also at the coordinates [7,0,0,0,0,0,0,0,0,0,0,0] (up 7 positions on 1-semitone axis).</p>
        <p></p>
        <p>The program works like an arpeggiator. There are 12 LFOs, 1 per axis, which oscillate at differrent rates to output a set of coordinates to lookup a note from the datastructure.</p>
        <p>By manipulating the rate and depths of the LFOs, users can create complex rhythmic patterns and explore intervalic relationships within the high-dimensional lattice.</p>
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
        <iframe width="560" height="315" src="https://www.youtube.com/embed/2rSIa1-CUTI?si=n2z1o7o6VKbsM0TA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <p>I added OSC support to  <a href="http://dood.al/pinktrombone/">Pink Trombone</a> by Neil Thapen so it can be embedded in a Max Patch</p>
        <p>This project uses a node server and to server and send OSC messages (via websocket) to a modified version of the pink trombone. The purpose is to create an interface for music and media composition programs to control the instrument.</p>
        <p>This version uses the fantastic re-write of the original PT code by https://github.com/zakaton/Pink-Trombone which refactored the original by (Neil Thapen) to use web audio worklets rather than the ScriptProcessorNode which resulted in performance issues.</p>
        <p>Thanks to the Max 9's jweb~ object we can now embed PT right in the max patch and pipe the audio wherever you want.</p>
      </>
    )
  },
  {
    name: 'Basic Pitch: Polyphonic audio-to-MIDI wrapper for Max/MSP',
    year: '2025',
    desc: (
      <>
        <p><a href="https://github.com/jamesstaub/basic-pitch-n4m">Project Github</a></p>
        <p>Basic Pitch is a polyphonic audio-to-MIDI algorithm developed by Spotify. I built a small wrapper for it allow it to be used in a Max patch.</p>
      </>
    )
  }
];

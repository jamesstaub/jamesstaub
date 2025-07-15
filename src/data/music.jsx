import React from 'react';

export const musicData = [
  {
    name: 'ARC!',
    year: '2024',
    target: 'albums',
    iframe(){
      return (
        <iframe src="https://bandcamp.com/EmbeddedPlayer/album=2787704011/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://muddywires.bandcamp.com/album/arc">ARC! by James Staub</a></iframe>
      )
    },
    desc: 'ARC! is a cello improvisation with an algorithmic accompaniment system built between 2022 and 2024. The realtime synthesis is achieved from custom software built with the fantastic Data Knot library built by Rodrigo Constanzo. The system uses onset detection, timbre classificatiton an corpus-based sampling.',
  },
  {
    name: 'Shit Talking The US Empire (Soundtrack)',
    year: 2022,
    target: 'albums',
    desc: (<>
      <p>Music composed for an art exhibition by <a href="https://www.warriorwriters.org/artists/nate.html">Nathan Lewis</a> in Hamburg, Germany.</p>
      <p>Nathan's artwork features printing and book binding of paper made by from pulp of military uniforms and other material.</p>
      <p>This music was composed from material I recorded, sliced into short segments and re-stitched together with an algorithm inspired by quilting.</p>
    </>),
    iframe() {
      return (
        <iframe width="560" height="315" src="https://www.youtube.com/embed/5bPfFeHVSLg?si=yxUFuPu1DzryXeEH" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      )
    }
  },
  {
    name: 'Bottle Episode',
    year: '2021',
    target: 'albums',
    iframe() {
      return  (
        <iframe src="https://bandcamp.com/EmbeddedPlayer/album=1837770693/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://muddywires.bandcamp.com/album/bottle-episode">Bottle Episode by James Staub</a></iframe>
      )
    },
    desc: 'Bottle Episode is a collection of music made over 3 years of experimenting with improvisational composition systems. Each piece was created with unique processes, often starting with acoustic instruments improvising with custom-built machine listening and concatenative synthesis software.',
  },
  {
    name: 'Hemispheres',
    year: '2018',
    target: 'albums',
    iframe() {
      return <iframe src="https://bandcamp.com/EmbeddedPlayer/album=1965124779/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://muddywires.bandcamp.com/album/hemispheres">Hemispheres by James Staub</a></iframe>
    },
  },
  {
    name: 'A PLUNDERPHONIC REANIMATION OF LISTENING WOMAN\'S NONE​-​A​-​THAT STUFF!',
    year: '2018',
    target: 'remixes',
    iframe() {
      return (
        <iframe src="https://bandcamp.com/EmbeddedPlayer/album=1058095212/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://muddywires.bandcamp.com/album/a-plunderphonic-reanimation-of-listening-womans-none-a-that-stuff">A PLUNDERPHONIC REANIMATION OF LISTENING WOMAN&#39;S NONE-A-THAT STUFF! by James Staub</a></iframe>
      )
    },
    desc: 'This remix list is a tribute to the great Boston-area band of the 20-teens, Listening Woman. This work was created by slicing the entire list up by onset and rearranging it with various re-stitching algorithms.'
  },
  {
    name: 'Memory Leak [A]',
    year: '2010 - 2015',
    target: 'albums',
    iframe() {
      return (
        <iframe src="https://bandcamp.com/EmbeddedPlayer/album=141190099/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://muddywires.bandcamp.com/album/memory-leak-a">Memory Leak [A] by James Staub</a></iframe>
      )
    },
  },
  {
    name: 'Memory Leak [B]',
    year: '2010 - 2015',
    target: 'albums',
    iframe() {
      return (
        <iframe src="https://bandcamp.com/EmbeddedPlayer/album=2022445655/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://muddywires.bandcamp.com/album/memory-leak-b">Memory Leak [B] by James Staub</a></iframe>
      )
    }
  },
  {
    name: 'Memory Leak [C]',
    year: '2010 - 2015',
    target: 'albums',
    iframe() {
      return (
        <iframe src="https://bandcamp.com/EmbeddedPlayer/album=3347458347/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://muddywires.bandcamp.com/album/memory-leak-c">Memory Leak [C] by James Staub</a></iframe>
      )
    },
  },
  {
    name: 'Machine Listening Demos',
    year: '2018 - 2024',
    desc: (<>
      <p>Improvisation on acoustic instruments accompanied by machine listening software.</p>
      <p>The accompaniment system uses onset detection and various pitch and timbre analyis methods to control playback of phrases from a corpus of audio</p>
      <p>More description of this on the Projects page.</p>
    </>),
    iframe() {
      return (
        <>
          <iframe
              width="100%"
              height="300"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/850785908&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
        </>
      )
    },
    target: 'experiments',
  },
  {
    name: 'CLIPPING: Story 2 (Muddy Wires Remix)',
    year: '2023',
    desc: 'This track was made for a beat battle. I used Demucs for source separation and time aligned each sampled track. The original track by clipping changes time signatures every few bars. The remix is a mashup of a bunch of songs in various time signatures matching the original pattern.',
    target: 'remixes',
    iframe() {
      return (
        <iframe
          width="100%"
          height="300"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1498783804&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>
      )
    }
  },
  {
    name: 'Death Grips - Guillotine Remix',
    year: '2020',
    desc:( <>
        
        <p>
          This track is an experiment where each stem from the original song is re-rendered as orchestral instruments using <a target="_blank" href="https://sites.research.google/tonetransfer/about">DDSP Tone Transfer from Google Magenta</a>
        </p>
        <p>
          Very little "remixing" was actually done, it's mostly just rendering each of the original stems through the timbre transfer models.
        </p>
    </>),
    target: 'remixes',
    iframe() {
      return (
        <iframe
          width="100%"
          height="300"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/919955083&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>
      )
    }
  },
];

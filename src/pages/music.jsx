import React, { useEffect, useState } from 'react';
import PageTemplate from "../components/PageTemplate";

const items = [
  {
    name: 'ARC!',
    year: '2024',
    target: 'albums',
    src: 'https://bandcamp.com/EmbeddedPlayer/list=2787704011/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/',
    desc: 'ARC! is a cello improvisation with an algorithmic accompaniment system built between 2022 and 2024. The synthesis is built using the fantastic sp-tools library built by Rodrigo Constanzo. The system uses onset detection, timbre classificatiton an corpus-based sampling.',
  },
  {
    name: 'Bottle Episode',
    year: '2021',
    target: 'albums',
    src: 'https://bandcamp.com/EmbeddedPlayer/list=1837770693/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/',
    desc: 'Bottle Episode is a collection of music made over 3 years of experimenting with improvisational composition systems. Each piece was created with unique processes, often starting with acoustic instruments improvising with custom-built machine listening and concatenative synthesis software.',
  },
  {
    name: 'Hemispheres',
    year: '2018',
    target: 'albums',
    src: 'https://bandcamp.com/EmbeddedPlayer/list=1965124779/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/',
  },
  {
    name: 'A PLUNDERPHONIC REANIMATION OF LISTENING WOMAN\'S NONE​-​A​-​THAT STUFF!',
    year: '2018',
    target: 'remixes',
    src: 'https://bandcamp.com/EmbeddedPlayer/list=1058095212/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/',
    desc: 'This remix list is a tribute to the great Boston-area band of the 20-teens, Listening Woman. This work was created by slicing the entire list up by onset and rearranging it with various re-stitching algorithms.'
  },
  {
    name: 'Memory Leak [A]',
    year: '2010 - 2015',
    target: 'albums',
    src: 'https://bandcamp.com/EmbeddedPlayer/list=141190099/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/',
  },
  {
    name: 'Memory Leak [B]',
    year: '2010 - 2015',
    target: 'albums',
    src: 'https://bandcamp.com/EmbeddedPlayer/list=2022445655/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/',
  },
  {
    name: 'Memory Leak [C]',
    year: '2010 - 2015',
    target: 'albums',
    src: 'https://bandcamp.com/EmbeddedPlayer/list=3347458347/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/',
  },
  {
    name: 'Machine Listening Demos',
    year: '2018 - 2024',
    desc: (<>
      <p>Improvisation on acoustic instruments accompanied by machine listening software.</p>
      <p>The accompaniment system uses onset detection and various pitch and timbre analyis methods to control playback of phrases from a corpus of audio</p>
      <p>More description of this on Projects page.</p>
    </>),
    src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/850785908&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
    target: 'experiments',
  },
  {
    name: 'CLIPPING: Story 2 (Muddy Wires Remix)',
    year: '2023',
    desc: 'This track was made for a beat battle. I used Demucs for source separation and time aligned each sampled track. The original track by clipping changes time signatures every few bars. The remix is a mashup of a bunch of songs in various time signatures matching the original pattern.',
    src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1498783804&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
    target: 'remixes',
  },
  {
    name: 'Death Grips - Guillotine Remix',
    year: '2020',
    desc: 'This track is an experiment where each stem from the original song is re-rendered as orchestral instruments using Google Magenta ai model.',
    src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/919955083&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
    target: 'remixes',
  },
];



const Music = () => {
  return <PageTemplate pageName="Music" items={items} />
};

export default Music;

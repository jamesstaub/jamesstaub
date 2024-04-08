import React, { useEffect, useState } from 'react';
import Header from "../components/Header";
      

const items = [
  {
    name: 'Bottle Episode',
    year: '2021',
    target: 'albums',
    src: 'https://bandcamp.com/EmbeddedPlayer/album=1837770693/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/',
    desc: 'Bottle Episode is a collection of music made over 3 years of experimenting with improvisational composition systems. Each piece was created with unique processes, often starting with acoustic instruments improvising with custom-built machine listening and concatenative synthesis software.',
  },
  {
    name: 'Hemispheres',
    year: '2018',
    target: 'albums',
    src: 'https://bandcamp.com/EmbeddedPlayer/album=1965124779/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/',
  },
  {
    name: 'Memory Leak [A]',
    year: '2010 - 2015',
    target: 'albums',
    src: 'https://bandcamp.com/EmbeddedPlayer/album=141190099/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/',
  },
  {
    name: 'Memory Leak [B]',
    year: '2010 - 2015',
    target: 'albums',
    src: 'https://bandcamp.com/EmbeddedPlayer/album=2022445655/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/',
  },
  {
    name: 'Memory Leak [C]',
    year: '2010 - 2015',
    target: 'albums',
    src: 'https://bandcamp.com/EmbeddedPlayer/album=3347458347/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/',
  },
  {
    name: 'Generative improv demos',
    year: '2018 - 2024',
    src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/850785908&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
    target: 'experiments',
  },
  {
    name: 'CLIPPING: Story 2 (Muddy Wires Remix)',
    year: '2023',
    desc: 'This track was made for a beat battle. I used Demucs for source separation and time aligned each sampled track. \nThe original track by clipping changes time signatures every few bars. The remix is a mashup of a bunch of songs in various time signatures matching the original pattern.',
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

const scList = [];

const AlbumItem = ({ album, isCurrent, onClick }) => {
  return (
    <li className={`${isCurrent ? 'underline' : ''} ph2`}> 
      <a href={`#${encodeURIComponent(album.name)}`} onClick={() => onClick(album)}>
        {album.name}
      </a>
    </li>
  );
};

const AlbumList = ({ items, loadAlbum, selectedAlbum, target }) => {
  
  return (
    <div>
      <h3 className="ttc">{target}</h3>
      <ul className="list pl0 ">
        {items.filter((i) => i.target === target).map((item, index) => (
          <AlbumItem
            key={index}
            album={item}
            onClick={loadAlbum}
            isCurrent={selectedAlbum?.name === item.name}
          />
        ))}
      </ul>
    </div>
  );
};


const Music = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(items[0]);
  const loadAlbum = (album) => {
    setSelectedAlbum(album);
  };

  return (
    <>
    <Header/>
    <section>     
      {selectedAlbum && (
        <article className="cf ph3 ph5-ns pv5">
          <header className="fn fl-ns w-50-ns pr4-ns">
            <h1 className="f2 lh-title fw9 mb3 mt0 pt3 bt bw2">Music</h1>
            <h2 className="f3 mid-gray lh-title">
              {selectedAlbum.target}
            </h2>
            <div className="max-w-350">
               <iframe
                title={selectedAlbum.name}
                src={selectedAlbum.src}
                width="350"
                height="350"
                frameBorder="0"
                allowFullScreen
                aria-describedby={`desc-${selectedAlbum.name}`}
              >
                <a href={selectedAlbum.src}>{selectedAlbum.name} by James Staub</a>
              </iframe>
            </div>
            
            <time className="f6 ttu tracked gray">
            
            </time>
          </header>
          <div className="fn fl-ns w-50-ns">

            <p className="f5 lh-copy measure mt0-ns">
              {selectedAlbum.desc}
            </p>
            <p className="f5 lh-copy measure">

            </p>
          </div>
        </article>

      )}
      <nav>
        <AlbumList key="1" items={items} loadAlbum={loadAlbum} selectedAlbum={selectedAlbum} target="albums" />
        <AlbumList key="2" items={items} loadAlbum={loadAlbum} selectedAlbum={selectedAlbum} target="experiments" />
        <AlbumList key="3" items={items} loadAlbum={loadAlbum} selectedAlbum={selectedAlbum} target="remixes" />
      </nav>
    </section>

    </>
  );
};

export default Music;
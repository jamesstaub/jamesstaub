import * as React from "react";
import Header from "../components/Header";

export default function Home() {

  return (
    <>
      <Header/>
      <section className="pa3 mw7">
        <p>
          James Staub is a composer and programmer based in Portland, Oregon, focused on interactive composition systems, real-time performance software, and algorithmic improvisation.
        </p>
        <p>
          His improvisational work incorporates custom-made software which models the timbral and temporal qualities of sound to synthesize musical phrases in response to acoustic input.        
        </p>
        <p>
          Research in the fields of music information retrieval and descriptor-based concatenative synthesis form the basis  for much of his work.
        </p>
        <p>
          James has a dual degree in Music Technology and Interactive Media from Northeastern University, where he studied 20th century composition, interactive realtime performance technologies. He works as a web application developer in the music notation space. 
        </p>
      </section>
    </>
  );
}

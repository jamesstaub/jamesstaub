import React from "react";

export default function BgVid() {
  return (
    <>

    <button id="sound-toggle" className="circular-button speaker-off"></button>

    <video id="background-video" autoplay muted loop></video>

    </>
  );
}

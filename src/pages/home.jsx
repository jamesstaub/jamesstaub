import * as React from "react";
import BgVid from "../../components/bg-vid";

export default function Home() {
  const hello = "Hello React!";

  return (
    <>

    <button id="sound-toggle" class="circular-button speaker-off"></button>

    <div id="content-container">
    </div>

    <BgVid />

    </>
  );
}

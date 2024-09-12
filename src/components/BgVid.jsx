import React, { useState, useEffect, useRef } from "react";

const videoUrls = [
  "https://cdn.glitch.global/68f04808-e771-4afc-9e43-d59773f8b92c/hammond-light.mp4?v=1701541867230",
  "https://cdn.glitch.global/68f04808-e771-4afc-9e43-d59773f8b92c/flower-press.mp4?v=1701542038924",
  "https://cdn.glitch.global/68f04808-e771-4afc-9e43-d59773f8b92c/bass-mubu.mp4?v=1701542046784",
  "https://cdn.glitch.global/68f04808-e771-4afc-9e43-d59773f8b92c/kalimba-bow.mp4?v=1701542052377",
  "https://cdn.glitch.global/68f04808-e771-4afc-9e43-d59773f8b92c/tuningfork-bass.mp4?v=1701542073297",
  "https://cdn.glitch.global/68f04808-e771-4afc-9e43-d59773f8b92c/twg-strobe.mp4?v=1701542073421",
  "https://cdn.glitch.global/68f04808-e771-4afc-9e43-d59773f8b92c/tape-rain.mp4?v=1701542081220",
  "https://cdn.glitch.global/68f04808-e771-4afc-9e43-d59773f8b92c/organ-mubu.mp4?v=1701542140632",
];

export default function BgVid() {
  const [isSoundOn, setIsSoundOn] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(
    Math.floor(Math.random() * videoUrls.length)
  );

  const videoRef = useRef(null);

  const toggleSound = () => {
    setIsSoundOn((prevSound) => !prevSound);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoUrls.length);
    }, 15000);

    return () => clearInterval(intervalId);
  }, [videoUrls]);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.src = videoUrls[currentVideoIndex];
    }
  }, [currentVideoIndex]);
  
  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.muted = !isSoundOn;
    }
  }, [isSoundOn]);

  return (
    <>
      <button
        id="sound-toggle"
        className={`circular-button ${isSoundOn ? "speaker-on" : "speaker-off"}`}
        onClick={toggleSound}
      ></button>

      <video
        class="full-bg-vid"
        ref={videoRef}
        autoPlay
        muted
        loop
        src={videoUrls[currentVideoIndex]}
      ></video>
    </>
  );
}

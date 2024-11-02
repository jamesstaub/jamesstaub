import React, { useRef, useEffect } from 'react';

const VideoAudioModulator = ({ src }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const dataArrayRef = useRef(null);
  const sourceRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    video.addEventListener('loadeddata', () => {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
    });

    // Set up audio context and analyser
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    const audioCtx = audioContextRef.current;

    if (!analyserRef.current) {
      analyserRef.current = audioCtx.createAnalyser();
      analyserRef.current.fftSize = 256;
    }
    const analyser = analyserRef.current;

    // Avoid creating multiple MediaElementSourceNode instances
    if (!sourceRef.current) {
      sourceRef.current = audioCtx.createMediaElementSource(video);
      sourceRef.current.connect(analyser);
      analyser.connect(audioCtx.destination);
    }

    dataArrayRef.current = new Uint8Array(analyser.frequencyBinCount);

    const drawFrame = () => {
      if (!video.paused && !video.ended) {
        requestAnimationFrame(drawFrame);
      }

      const dataArray = dataArrayRef.current;
      analyser.getByteFrequencyData(dataArray);

      const averageFrequency = dataArray.reduce((a, b) => a + b) / dataArray.length;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Apply transformations based on audio frequency
      const scale = 1 + (averageFrequency / 255) * 0.2; // Scale with frequency
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.scale(scale, scale);
      ctx.translate(-canvas.width / 2, -canvas.height / 2);

      // Draw video frame to canvas
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      ctx.restore();

      // Modify playback rate based on frequency
      video.playbackRate = 1 + (averageFrequency / 255) * 0.5;

      // Adjust saturation effect
      ctx.globalCompositeOperation = 'saturation';
      ctx.fillStyle = `rgba(255, 255, 255, ${(averageFrequency / 255) * 0.5})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'source-over';
    };

    video.addEventListener('play', () => {
      if (audioCtx.state === 'suspended') audioCtx.resume();
      drawFrame();
    });

    return () => {
      // Cleanup on unmount
      video.pause();
      if (audioCtx) audioCtx.close();
      analyser.disconnect();
      if (sourceRef.current) sourceRef.current.disconnect();
    };
  }, []);

  return (
    <div>
      <video ref={videoRef} src={src} crossOrigin="anonymous" autoPlay loop muted />
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default VideoAudioModulator;

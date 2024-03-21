import Pause from "../assets/pause.png";
import Play from "../assets/play.png";

import { useState, useRef } from "react";
import SongPauseButton from "./SongPauseButton";
import PlayingContainer from "./PlayingContainer";

const SongWrapper = ({
  audioRef,
  host,
  songIndex,
  onSongEnd,
  songQueueLength,
  handleSongSelect,
}) => {
  const canvasRef = useRef(null);
  const [musicControl, setMusicControl] = useState(Pause);

  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   const parentWidth = canvas.parentElement.clientWidth;
  //   const ctx = canvas.getContext("2d");
  //   const pixelRatio = window.devicePixelRatio || 1;
  //   canvas.width = parentWidth * pixelRatio;
  //   canvas.height = canvas.clientHeight * pixelRatio;

  //   const audioContext = new AudioContext();
  //   console.log(audioContext);

  //   const audio1 = audioRef.current;
  //   let audioSource;
  //   if (!MediaElementAudioSourceNode) {
  //     audioSource = audioContext.createMediaElementSource(audio1);
  //     const analyzer = audioContext.createAnalyser();
  //     const bufferLength = analyzer.frequencyBinCount;
  //     analyzer.fftSize = 4096;
  //     const dataArray = new Uint8Array(bufferLength);
  //     audioSource.connect(analyzer);
  //     analyzer.connect(audioContext.destination);

  //     const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
  //     gradient.addColorStop(0, "#00d2ff");
  //     gradient.addColorStop(0.25, "#00b0bf");
  //     gradient.addColorStop(0.5, "#006bff");
  //     gradient.addColorStop(0.75, "#0004ff");
  //     gradient.addColorStop(1, "#001085");

  //     function animate() {
  //       const barWidth = canvas.width / bufferLength;
  //       let x = 0;
  //       ctx.clearRect(0, 0, canvas.width, canvas.height);
  //       analyzer.getByteFrequencyData(dataArray);
  //       for (let i = 0; i < bufferLength; i++) {
  //         const barHeight = dataArray[i] / 1.5;
  //         ctx.fillStyle = gradient;
  //         ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
  //         x += barWidth;
  //       }
  //       requestAnimationFrame(animate);
  //     }

  //     animate();

  //     return () => {
  //       audioContext.close();
  //     };
  //   }
  // }, [audioRef, musicControl]);

  const toggleMusic = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setMusicControl(Pause);
    } else {
      audioRef.current.pause();
      setMusicControl(Play);
    }
  };

  return (
    <div className="currentSongWrapper">
      {songQueueLength > 0 && (
        <PlayingContainer
          audioRef={audioRef}
          host={host}
          songIndex={songIndex}
          onSongEnd={onSongEnd}
          handleSongSelect={handleSongSelect}
        />
      )}

      <div id="containerText">
        <h1>Add Songs to start the party</h1>
      </div>
      {host && (
        <SongPauseButton
          musicControl={musicControl}
          toggleMusic={toggleMusic}
          audioRef={audioRef}
        />
      )}

      <div className="audioProgressBar">
        <canvas id="audioAnalyzer" ref={canvasRef}></canvas>
      </div>
    </div>
  );
};

export default SongWrapper;

import { tracks } from "../Data/tracks";
import Pause from "../assets/pause.png";
import Play from "../assets/play.png";
// import Audioimg from "../assets/Audio.png";
import { useState, useEffect, useRef } from "react";

const SongWrapper = ({ audioRef }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const parentWidth = canvasRef.current.parentElement.clientWidth;
    const audio1 = audioRef.current;
    const canvas = canvasRef.current;
    const pixelRatio = window.devicePixelRatio || 1;
    canvas.width = parentWidth;
    canvas.height = canvas.clientHeight * pixelRatio;
    const ctx = canvas.getContext("2d");
    // ctx.scale(pixelRatio, pixelRatio);
    const gradient = ctx.createLinearGradient(0, 0, 1000, 0);
    const audioContext = new AudioContext();
    const audioSource = audioContext.createMediaElementSource(audio1);
    const analyzer = audioContext.createAnalyser();
    const bufferLength = analyzer.frequencyBinCount;
    analyzer.fftSize = 4096;
    const dataArray = new Uint8Array(bufferLength);
    const barWidth = canvas.width / bufferLength + 0.3;
    ctx.imageSmoothingEnabled = false;

    audioSource.connect(analyzer);
    analyzer.connect(audioContext.destination);

    gradient.addColorStop(0, "#00d2ff");
    gradient.addColorStop(0.25, "#00b0bf");
    gradient.addColorStop(0.5, "#006bff");
    gradient.addColorStop(0.75, "#0004ff");
    gradient.addColorStop(1, "#001085");

    function animate() {
      let x = 0;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      analyzer.getByteFrequencyData(dataArray);
      for (let i = 0; i < bufferLength; i++) {
        const barHeight = dataArray[i] / 1.5;
        ctx.fillStyle = gradient;
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
        x += barWidth;
        // console.log(barWidth, canvas.width, canvas.height, barHeight);
      }
      requestAnimationFrame(animate);
    }
    animate();

    return () => {
      audioContext.close();
    };
  }, [audioRef]);

  const [musicControl, setMusicControl] = useState(Pause);

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
      <div id="playingContainer">
        <div className="thumbnail">
          <img src={tracks[0].thumbnail} alt="" className="thumbImg" />
        </div>

        <div className="songDetails">
          <p className="authorName">{tracks[0].author}</p>
          <p className="songName">{tracks[0].title}</p>
          <audio src={tracks[0].src} ref={audioRef} id="audio"></audio>
        </div>
      </div>
      <div id="containerText">
        <h1>Add Songs to start the party</h1>
      </div>
      <div id="pauseButton">
        <img
          src={musicControl}
          alt="pause"
          className="pauseImg"
          onClick={toggleMusic}
        />
      </div>
      <div className="audioProgressBar">
        <canvas id="audioAnalyzer" ref={canvasRef}></canvas>
      </div>
    </div>
  );
};

export default SongWrapper;

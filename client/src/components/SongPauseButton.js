import { useContext, useEffect } from "react";
import { SocketContext } from "../context/context";
const SongPauseButton = ({ musicControl, toggleMusic, audioRef }) => {
  const socket = useContext(SocketContext);

  useEffect(() => {
    socket.on("pauseTrack", (songId) => {
      console.log("paused");
      audioRef.current.pause();
    });
    socket.on("playTrack", (songId) => {
      console.log("played");
      audioRef.current.play();
    });
  }, [audioRef, socket]);
  return (
    <div id="pauseButton">
      <img
        src={musicControl}
        alt="pause"
        className="pauseImg"
        onClick={toggleMusic}
      />
    </div>
  );
};

export default SongPauseButton;

import { useContext } from "react";
import { tracks } from "../Data/tracks";
import { SocketContext } from "../context/context";

const PlayingContainer = ({
  audioRef,
  host,
  songIndex,
  onSongEnd,
  songQueueLength,
  handleSongSelect,
}) => {
  const socket = useContext(SocketContext);
  let displayPause;
  audioRef.current.onended = () => onSongEnd();
  const displaySongContainer = () => {
    if (host) {
      displayPause = document.getElementById("pauseButton");
      displayPause.style.display = "flex";
    }
    const currentSongDisplay = document.getElementById("playingContainer");
    const containerTextDisplay = document.getElementById("containerText");
    containerTextDisplay.style.display = "none";
    currentSongDisplay.style.display = "flex";
  };
  socket.on("musicStartResponse", (host, selectedIndex) => {
    if (host) {
      audioRef.current.play();
    } else {
      console.log("I picked a song!");
      socket.emit("startAudio", selectedIndex);
    }
    displaySongContainer();
  });

  return (
    <div id="playingContainer">
      <div className="thumbnail">
        <img src={tracks[songIndex].thumbnail} alt="" className="thumbImg" />
      </div>
      <button
        onClick={() => {
          if (songQueueLength > 0) {
            onSongEnd();
          }
        }}
      >
        Next Song
      </button>
      <div className="songDetails">
        <p className="authorName">{tracks[songIndex].author}</p>
        <p className="songName">{tracks[songIndex].title}</p>
        <audio src={tracks[songIndex].src} ref={audioRef} id="audio"></audio>
      </div>
    </div>
  );
};

export default PlayingContainer;

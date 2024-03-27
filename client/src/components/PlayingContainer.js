import { useContext, useEffect } from "react";
import { tracks } from "../Data/tracks";
import { SocketContext } from "../context/context";
import { useSongArray } from "../context/songArrayContext";

const PlayingContainer = ({
  audioRef,
  host,
  songIndex,
  onSongEnd,
  songQueueLength,
  handleSongSelect,
}) => {
  const socket = useContext(SocketContext);
  const { selectedSongArray, setselectedSongArray } = useSongArray();
  let displayPause;
  // audioRef.current.onended = () => onSongEnd();
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
  useEffect(() => {
    socket.on("musicStartHost", (selectedIndex) => {
      setselectedSongArray((selectedSongArray) => [
        ...selectedSongArray,
        selectedIndex,
      ]);
      displaySongContainer();
      handleSongSelect(selectedIndex);
      if (!(songQueueLength > 0) && songIndex) {
        if (audioRef.current) {
          audioRef.current.currentTime = 0;
          audioRef.current.play();
        }
      }
    });
    socket.on("musicStartUser", (selectedIndex) => {
      setselectedSongArray((selectedSongArray) => [
        ...selectedSongArray,
        selectedIndex,
      ]);
      displaySongContainer();
      handleSongSelect(selectedIndex);
    });
  });

  return (
    <div id="playingContainer">
      {songQueueLength > 0 && (
        <>
          <div className="thumbnail">
            <img
              src={tracks[songIndex].thumbnail}
              alt="thumbImg"
              className="thumbImg"
            />
          </div>
          <div className="songDetails">
            <p className="authorName">{tracks[songIndex].author}</p>
            <p className="songName">{tracks[songIndex].title}</p>
            <audio
              src={tracks[songIndex].src}
              ref={audioRef}
              id="audio"
            ></audio>
          </div>
        </>
      )}
    </div>
  );
};

export default PlayingContainer;

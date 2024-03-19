import { useContext, useEffect, useState } from "react";
import { tracks } from "../Data/tracks";
import { SocketContext } from "../context/context";

const PlayingContainer = ({ audioRef }) => {
  const socket = useContext(SocketContext);

  // useEffect(() => {
  //   if (audioRef && audioRef.current) {
  //     if (isPlaying) {
  //       audioRef.current.play();
  //     } else {
  //       audioRef.current.pause();
  //     }
  //   }
  // }, [isPlaying, audioRef]);

  function displaySongContainer() {
    const displayPause = document.getElementById("pauseButton");
    const currentSongDisplay = document.getElementById("playingContainer");
    const containerTextDisplay = document.getElementById("containerText");
    containerTextDisplay.style.display = "none";
    displayPause.style.display = "flex";
    currentSongDisplay.style.display = "flex";
  }
  const togglePlayPause = () => {
    socket.emit("startAudio");
    displaySongContainer();
  };
  socket.on("musicStartResponse", () => {
    console.log("start music");
    togglePlayPause();
  });
  // useEffect(() => {
  //   socket.on("pauseTrack", (songId) => {
  //     console.log("paused");
  //     audioRef.current.play();
  //   });
  //   socket.on("playTrack", (songId) => {
  //     console.log("played");
  //     audioRef.current.pause();
  //   });
  // }, [audioRef, socket]);
  return (
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
  );
};

export default PlayingContainer;

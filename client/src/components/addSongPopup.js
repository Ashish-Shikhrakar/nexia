// import { Link } from "react-router-dom";
import { tracks } from "../Data/tracks";
import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../context/context";

const AddSongPopup = ({ audioRef }) => {
  const socket = useContext(SocketContext);
  let songId = 0;

  function closePopup() {
    let popupView = document.getElementById("songPopupBox");
    let popupOverlay = document.getElementById("songPopupOverlay");
    popupView.style.display = "none";
    popupOverlay.style.display = "none";
  }

  // const [isPlaying, setIsPlaying] = useState(false);

  // useEffect(() => {
  //   if (audioRef && audioRef.current) {
  //     if (isPlaying) {
  //       audioRef.current.play();
  //     } else {
  //       audioRef.current.pause();
  //     }
  //   }
  // }, [isPlaying, audioRef]);

  // function displaySongContainer() {
  //   const displayPause = document.getElementById("pauseButton");
  //   const currentSongDisplay = document.getElementById("playingContainer");
  //   const containerTextDisplay = document.getElementById("containerText");
  //   containerTextDisplay.style.display = "none";
  //   displayPause.style.display = "flex";
  //   currentSongDisplay.style.display = "flex";
  // }

  // const togglePlayPause = () => {
  //   if (isPlaying === true) {
  //     socket.emit("stopAudio", songId);
  //   } else {
  //     socket.emit("startAudio", songId);
  //   }
  //   setIsPlaying(!isPlaying);
  //   closePopup();
  //   displaySongContainer();
  // };

  //   if (displayPause.style.display === "flex") {
  //     displayPause.addEventListener("click", togglePlayPause);
  //   }

  return (
    <>
      <div id="songPopupOverlay"></div>
      <div id="songPopupBox">
        <div className="popupContent">
          <p>Add a Song</p>
          <div className="songsList">
            <div
              className="song"
              onClick={() => {
                closePopup();
                socket.emit("musicStartSignal");
              }}
            >
              <img src={tracks[songId].thumbnail} alt="song" width="100px" />
              <div className="songInfo">
                <p>{tracks[songId].title}</p>
                <p>{tracks[songId].artist}</p>
              </div>
            </div>
          </div>
          <div className="buttonWrapper">
            <button className="cancelButton" onClick={closePopup}>
              Cancel
            </button>
            {/* <Link to="/" style={{ width: "30%" }}>
              <button className="yesButton">Add</button>
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddSongPopup;

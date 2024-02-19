// import { Link } from "react-router-dom";
import { tracks } from "../Data/tracks";
import { useEffect, useState } from "react";
const AddSongPopup = ({ audioRef }) => {
  function closePopup() {
    let popupView = document.getElementById("songPopupBox");
    let popupOverlay = document.getElementById("songPopupOverlay");
    popupView.style.display = "none";
    popupOverlay.style.display = "none";
  }

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, audioRef]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    closePopup();
    const displayPause = document.getElementById("pauseButton");
    const currentSongDisplay = document.getElementById("playingContainer");
    const containerTextDisplay = document.getElementById("containerText");
    containerTextDisplay.style.display = "none";
    displayPause.style.display = "flex";
    currentSongDisplay.style.display = "flex";
  };

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
            <div className="song" onClick={togglePlayPause}>
              <img src={tracks[0].thumbnail} alt="song" width="100px" />
              <div className="songInfo">
                <p>{tracks[0].title}</p>
                <p>{tracks[0].artist}</p>
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

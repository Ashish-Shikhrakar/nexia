import { tracks } from "../Data/tracks";
import { useContext } from "react";
import { SocketContext } from "../context/context";

const AddSongPopup = ({ audioRef, host, handleSongSelect }) => {
  const socket = useContext(SocketContext);

  const handleSongClick = (index) => {
    handleSongSelect(index);
    closePopup();
  };

  function closePopup() {
    let popupView = document.getElementById("songPopupBox");
    let popupOverlay = document.getElementById("songPopupOverlay");
    popupView.style.display = "none";
    popupOverlay.style.display = "none";
  }

  return (
    <>
      <div id="songPopupOverlay"></div>
      <div id="songPopupBox">
        <div className="popupContent">
          <p>Add a Song</p>
          {tracks.map((track, index) => {
            return (
              <div className="songsList" key={index}>
                <div
                  className="song"
                  onClick={() => {
                    handleSongClick(index);
                    socket.emit("musicStartSignal", host, index);
                  }}
                >
                  <img src={track.thumbnail} alt="song" width="100px" />
                  <div className="songInfo">
                    <p>{track.title}</p>
                    <p>{track.artist}</p>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="buttonWrapper">
            <button className="cancelButton" onClick={closePopup}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddSongPopup;

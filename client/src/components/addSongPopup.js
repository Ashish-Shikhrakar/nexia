import { tracks } from "../Data/tracks";
import { useContext } from "react";
import { SocketContext } from "../context/context";
import { useSongArray } from "../context/songArrayContext";

const AddSongPopup = ({ audioRef, host, handleSongSelect }) => {
  const socket = useContext(SocketContext);
  const { selectedSongArray, setselectedSongArray } = useSongArray();

  function closePopup() {
    let popupView = document.getElementById("songPopupBox");
    let popupOverlay = document.getElementById("songPopupOverlay");
    popupView.style.display = "none";
    popupOverlay.style.display = "none";
  }
  const handleSongArray = (index) => {
    if (!selectedSongArray.includes(index)) {
      setselectedSongArray((selectedSongArray) => [
        ...selectedSongArray,
        index,
      ]);
      socket.emit("musicStartSignal", index);
    }
  };

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
                    handleSongArray(index);
                    closePopup();
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

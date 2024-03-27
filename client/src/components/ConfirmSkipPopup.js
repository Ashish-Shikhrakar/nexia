import { useContext } from "react";
import { SocketContext } from "../context/context";
const ConfirmSkipPopup = ({ incrementCount, setAlreadyVoted }) => {
  const socket = useContext(SocketContext);
  function closePopup() {
    let popupView = document.getElementById("confirmToSkipPopup");
    let popupOverlay = document.getElementById("popupOverlay2");
    popupView.style.display = "none";
    popupOverlay.style.display = "none";
  }

  return (
    <>
      <div id="popupOverlay2"></div>
      <div id="confirmToSkipPopup">
        <div className="popupContent2">
          <p>You are about the NEIN the current song.</p>
          <p>Are you sure you’d like to vote to skip this song?</p>
          <div className="buttonWrapper">
            <button className="cancelButton" onClick={closePopup}>
              Cancel
            </button>
            <div style={{ width: "30%" }}>
              <button
                className="yesButton"
                onClick={() => {
                  closePopup();
                  incrementCount();
                  setAlreadyVoted(true);

                  socket.emit("nextSong");
                }}
              >
                Nein It!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmSkipPopup;

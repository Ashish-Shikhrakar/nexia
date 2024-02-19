import { Link } from "react-router-dom";
const Popup = () => {
  function closePopup() {
    let popupView = document.getElementById("popupBox");
    let popupOverlay = document.getElementById("popupOverlay");
    popupView.style.display = "none";
    popupOverlay.style.display = "none";
  }

  return (
    <>
      <div id="popupOverlay"></div>
      <div id="popupBox">
        <div className="popupContent">
          <p>Are you sure you want to leave the party?</p>
          <div className="buttonWrapper">
            <button className="cancelButton" onClick={closePopup}>
              Cancel
            </button>
            <Link to="/" style={{ width: "30%" }}>
              <button className="yesButton">Leave</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;

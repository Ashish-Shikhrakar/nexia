// import { Link } from "react-router-dom";

const Leavebutton = () => {
  function openPopup() {
    let popupView = document.getElementById("popupBox");
    let popupOverlay = document.getElementById("popupOverlay");

    popupView.style.display = "block";
    popupOverlay.style.display = "block";
  }

  return (
    <div>
      <button className="leaveButton" onClick={openPopup}>
        Leave Group
      </button>
    </div>
  );
};

export default Leavebutton;

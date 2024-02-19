const AddSongButton = () => {
  function openPopup() {
    let popupView = document.getElementById("songPopupBox");
    let popupOverlay = document.getElementById("songPopupOverlay");

    popupView.style.display = "block";
    popupOverlay.style.display = "block";
  }
  return (
    <>
      <button className="addSongButton" onClick={openPopup}>
        Add a song
      </button>
    </>
  );
};

export default AddSongButton;

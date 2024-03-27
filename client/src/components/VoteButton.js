const VoteButton = ({
  vote,
  selectedOption,
  alreadyVoted,
  songQueueLength,
}) => {
  function openPopup() {
    if (!(songQueueLength > 0)) {
      return;
    }
    if (!alreadyVoted) {
      let popupView = document.getElementById("confirmToSkipPopup");
      let popupOverlay = document.getElementById("popupOverlay2");

      popupView.style.display = "block";
      popupOverlay.style.display = "block";
    }
  }
  return (
    <div className="voteButton" onClick={openPopup}>
      <p>
        {vote}/{selectedOption} Neins
      </p>
    </div>
  );
};

export default VoteButton;

import copyicon1 from "../assets/copyicon1.png";
import copyicon2 from "../assets/copyicon2.svg";

const SettingsBox = ({ isHost }) => {
  let settingsBoxStyle = "setSettingsBox1";
  let copy = copyicon1;
  if (!isHost) {
    settingsBoxStyle = "setSettingsBox2";
    copy = copyicon2;
  } else {
    settingsBoxStyle = "setSettingsBox1";
    copy = copyicon1;
  }
  return (
    <div className={settingsBoxStyle}>
      <div className="upperSettingsBox">
        <div className="upperSettingsContents">
          {isHost && <p>Invite</p>}
          <p>nexia.io</p>
          <img src={copy} alt="" />
        </div>
      </div>

      <div className="lowerSettingsBox">
        {isHost && <p>Settings</p>}
        <div className="settingsBox">
          <div className="switch">
            <select className="members" id="members">
              <option value="5" selected>
                5
              </option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
            <label htmlFor="members"> Members Limit</label>
          </div>
          <div className="switch">
            <select className="votes" id="votes">
              <option value="5" selected>
                5
              </option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
            <label htmlFor="votes"> Votes to skip song</label>
          </div>
          <div className="switch">
            <select className="songLength" id="songLength">
              <option value="5" selected>
                5
              </option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
            <label htmlFor="songLength"> Song(s) per minute</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsBox;

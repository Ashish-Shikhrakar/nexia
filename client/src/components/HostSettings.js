import { useContext } from "react";
import { SocketContext } from "../context/context";
import { useSettings } from "../context/settingsContext";

const HostSettings = () => {
  const { selectedOption, setSelectedOption } = useSettings();
  const socket = useContext(SocketContext);
  const handleValueChange = (event) => {
    const nickname = event.target.id;
    const valueOutput = event.target.value;
    const { name, value } = event.target;
    setSelectedOption((prevState) => ({
      ...prevState,
      [name]: parseInt(value, 10),
    }));
    socket.emit("value_change", { nickname, valueOutput });
  };

  return (
    <div className="lowerSettingsBox">
      <p>Settings</p>
      <div className="settingsBox">
        <div className="switch">
          <select
            name="members"
            className="members"
            id="members"
            onChange={handleValueChange}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
          <label htmlFor="members"> Members Limit</label>
        </div>
        <div className="switch">
          <select
            name="votes"
            className="votes"
            id="votes"
            onChange={handleValueChange}
          >
            <option value="5">2</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
          <label htmlFor="votes"> Votes to skip song</label>
        </div>
        <div className="switch" onChange={handleValueChange}>
          <select name="songLength" className="songLength" id="songLength">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
          <label htmlFor="songLength"> Song(s) per minute</label>
        </div>
      </div>
    </div>
  );
};

export default HostSettings;

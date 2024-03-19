import { useContext } from "react";
import { SocketContext } from "../context/context";

const HostSettings = () => {
  const socket = useContext(SocketContext);
  const handleValueChange = (event) => {
    const name = event.target.id;
    const value = event.target.value;

    socket.emit("value_change", { name, value });
  };

  return (
    <div className="lowerSettingsBox">
      <p>Settings</p>
      <div className="settingsBox">
        <div className="switch">
          <select className="members" id="members" onChange={handleValueChange}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
          <label htmlFor="members"> Members Limit</label>
        </div>
        <div className="switch">
          <select className="votes" id="votes" onChange={handleValueChange}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
          <label htmlFor="votes"> Votes to skip song</label>
        </div>
        <div className="switch" onChange={handleValueChange}>
          <select className="songLength" id="songLength">
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

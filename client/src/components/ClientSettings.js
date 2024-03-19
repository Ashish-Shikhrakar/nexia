import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../context/context";

const ClientSettings = ({ joinCode }) => {
  const [selectedValue, setSelectedValue] = useState({});
  const socket = useContext(SocketContext);

  useEffect(() => {
    socket.emit("join_room", joinCode);

    // return () => {
    //   console.log("disconnecting");
    //   socket.disconnect();
    // };
  }, []);

  useEffect(() => {
    socket.on("host_value_change", ({ name, value }) => {
      setSelectedValue((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    });
  });

  return (
    <div className="lowerSettingsBox">
      <p>Settings</p>
      <div className="settingsBox">
        <div className="switch">
          <select className="members" id="members" disabled>
            <option value={selectedValue.members || "5"}>
              {selectedValue.members || 5}
            </option>
          </select>
          <label htmlFor="members"> Members Limit</label>
        </div>
        <div className="switch">
          <select className="votes" id="votes" disabled>
            <option value={selectedValue.votes || "5"}>
              {selectedValue.votes || 5}
            </option>
          </select>
          <label htmlFor="votes"> Votes to skip song</label>
        </div>
        <div className="switch">
          <select className="songLength" id="songLength" disabled>
            <option value={selectedValue.songLength || "5"}>
              {selectedValue.songLength || 5}
            </option>
          </select>
          <label htmlFor="songLength"> Song(s) per minute</label>
        </div>
      </div>
    </div>
  );
};

export default ClientSettings;

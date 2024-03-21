import SettingsBox from "../components/Settingsbox";
import Logobox from "../components/Logobox";
import Namebox from "../components/Namebox";
import Ftlinks from "../components/Ftlinks";
import Ftmessage from "../components/Ftmessage";
import Memberlist from "../components/Memberlist";
import { logoPropertiesForHostPage } from "../config";
import useDynamicPageTitle from "../components/Pagetitle";
import { useContext, useState } from "react";
import { SocketContext } from "../context/context";
import { useNavigate } from "react-router-dom";

const Host = (props) => {
  const socket = useContext(SocketContext);

  console.log(socket, SocketContext);
  const Navigate = useNavigate();

  useDynamicPageTitle({ title: props.title });
  const [members, setMembers] = useState([]);

  const handleNameSubmit = (name, id) => {
    const existingUserIndex = members.findIndex((member) => member.id === id);
    if (existingUserIndex !== -1) {
      const updatedMembers = [...members];
      updatedMembers[existingUserIndex].name = name;
      setMembers(updatedMembers);
    } else {
      setMembers([...members, { id: id, name: name }]);
    }
  };

  socket.on("receive_name", (name, id) => {
    const existingUserIndex = members.findIndex((member) => member.id === id);
    if (existingUserIndex !== -1) {
      const updatedMembers = [...members];
      updatedMembers[existingUserIndex].name = name;
      setMembers(updatedMembers);
    } else {
      // Add the new user to the members list
      setMembers([...members, { id: id, name: name }]);
    }
  });

  socket.on("party_started", () => {
    Navigate(`/playmusic?host=${true}`);
  });

  socket.on("user_leave", (message) => {
    alert(message);
  });

  return (
    <div className="hostPage">
      <Logobox logoProperties={logoPropertiesForHostPage} color="#3D5D91" />
      <Memberlist members={members} />
      <div>
        <Namebox isHost={true} onNameSubmit={handleNameSubmit} />
        <SettingsBox isHost={true} />
        <Ftmessage isDarkBG={false} />
        <Ftlinks marginTop="5px" />
      </div>
    </div>
  );
};

export default Host;

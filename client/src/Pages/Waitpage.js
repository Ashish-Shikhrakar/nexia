import Logobox from "../components/Logobox";
import Namebox from "../components/Namebox";
import Ftmessage from "../components/Ftmessage";
import Ftlinks from "../components/Ftlinks";
import SettingsBox from "../components/Settingsbox";
import Memberlist from "../components/Memberlist";
import { logoPropertiesForWaitPage } from "../config";
import useDynamicPageTitle from "../components/Pagetitle";
import { useContext, useState } from "react";
import { SocketContext } from "../context/context";
import { useNavigate } from "react-router-dom";

const Waitpage = (props) => {
  const socket = useContext(SocketContext);
  const Navigate = useNavigate();
  useDynamicPageTitle({ title: props.title });
  const [members, setMembers] = useState([]);

  const updatedMembers = [...members];
  const handleNameSubmit = (name, id) => {
    const existingUserIndex = members.findIndex((member) => member.id === id);
    if (existingUserIndex !== -1) {
      updatedMembers[existingUserIndex].name = name;
      setMembers(updatedMembers);
    } else {
      setMembers([...members, { id: id, name: name }]);
    }
  };

  socket.on("receive_name", (name, id) => {
    const existingUserIndex = members.findIndex((member) => member.id === id);
    if (existingUserIndex !== -1) {
      updatedMembers[existingUserIndex].name = name;
      setMembers(updatedMembers);
    } else {
      setMembers([...members, { id: id, name: name }]);
    }
  });

  socket.on("party_started", () => {
    Navigate(`/playmusic?host=${false}`);
  });

  socket.on("user_leave", (message) => {
    alert(message);
  });

  return (
    <div className="waitPage">
      <Logobox logoProperties={logoPropertiesForWaitPage} />
      <Namebox type={false} onNameSubmit={handleNameSubmit} />
      <p className="waitPagepStyle">Waiting for your host to start the party</p>
      <Memberlist members={members} />
      <SettingsBox isHost={false} />
      <Ftmessage isDarkBG={true} />
      <Ftlinks marginTop="5px" colorStyle="#C6BFC3" />
    </div>
  );
};

export default Waitpage;

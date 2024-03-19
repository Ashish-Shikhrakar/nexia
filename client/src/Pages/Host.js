import SettingsBox from "../components/Settingsbox";
import Logobox from "../components/Logobox";
import Namebox from "../components/Namebox";
import Ftlinks from "../components/Ftlinks";
import Ftmessage from "../components/Ftmessage";
import Memberlist from "../components/Memberlist";
import { logoPropertiesForHostPage } from "../config";
import useDynamicPageTitle from "../components/Pagetitle";
// import io from "socket.io-client";
import { useContext, useState } from "react";
import { SocketContext } from "../context/context";
import { useNavigate } from "react-router-dom";
// const socket = io.connect("http://localhost:8000");

const Host = (props) => {
  const socket = useContext(SocketContext);

  console.log(socket, SocketContext);
  const Navigate = useNavigate();
  // useEffect(() => {
  //   socketRef.current = socket;
  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);

  // function connectServer() {
  //   const socket = io.connect("http://localhost:8000");
  //   socketRef.current = socket;
  //   return () => {
  //     socket.disconnect();
  //   };
  // }

  useDynamicPageTitle({ title: props.title });
  // const socketRef = useRef(socket);
  const [members, setMembers] = useState([]);

  const handleNameSubmit = (name, id) => {
    const existingUserIndex = members.findIndex((member) => member.id === id);
    if (existingUserIndex !== -1) {
      const updatedMembers = [...members];
      updatedMembers[existingUserIndex].name = name;
      setMembers(updatedMembers);
    } else {
      // Add the new user to the members list
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
    Navigate("/playmusic");
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
        {/* <button onClick={connectServer}> Start Hosting</button> */}
        <SettingsBox isHost={true} />
        <Ftmessage isDarkBG={false} />
        <Ftlinks marginTop="5px" />
      </div>
    </div>
  );
};

export default Host;

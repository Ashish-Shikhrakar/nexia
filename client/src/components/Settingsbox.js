import { useContext, useEffect, useState } from "react";
import copyicon1 from "../assets/copyicon1.png";
import copyicon2 from "../assets/copyicon2.svg";
import HostSettings from "./HostSettings";
import ClientSettings from "./ClientSettings";
import { useLocation } from "react-router-dom";
import { SocketContext } from "../context/context";

function generateUID() {
  var firstPart = (Math.random() * 46656) | 0;
  var secondPart = (Math.random() * 46656) | 0;
  firstPart = ("000" + firstPart.toString(36)).slice(-3);
  secondPart = ("000" + secondPart.toString(36)).slice(-3);
  return firstPart + secondPart;
}

const SettingsBox = ({ isHost }) => {
  const socket = useContext(SocketContext);

  const [generatedUID, setGeneratedUID] = useState(() => generateUID());
  const location = useLocation();
  useEffect(() => {
    if (isHost && !generatedUID) {
      setGeneratedUID(generateUID);
    }

    const sendGeneratedCode = () => {
      socket.emit("send_generated_UID", generatedUID);
    };
    if (isHost) {
      sendGeneratedCode();
    }

    return () => {
      socket.off("send_generated_UID", sendGeneratedCode);
    };
  }, [generatedUID, isHost, socket]);

  let settingsBoxStyle = "setSettingsBox1";
  let copy = copyicon1;

  if (!isHost) {
    settingsBoxStyle = "setSettingsBox2";
    copy = copyicon2;
    const searchParams = new URLSearchParams(location.search);
    var joinCode = searchParams.get("code");
  } else {
    settingsBoxStyle = "setSettingsBox1";
    copy = copyicon1;
  }

  return (
    <div className={settingsBoxStyle}>
      <div className="upperSettingsBox">
        <div className="upperSettingsContents">
          {isHost && (
            <>
              <p>Invite</p>
              <p>{generatedUID}</p>
            </>
          )}
          {!isHost && <p>{joinCode}</p>}
          <img src={copy} alt="" />
        </div>
      </div>

      {isHost && <HostSettings />}
      {!isHost && <ClientSettings joinCode={joinCode} />}
    </div>
  );
};

export default SettingsBox;

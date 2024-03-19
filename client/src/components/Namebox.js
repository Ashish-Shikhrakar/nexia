import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { SocketContext } from "../context/context";

const Namebox = ({ isHost, onNameSubmit }) => {
  const [name, setName] = useState("");
  const socket = useContext(SocketContext);
  let inputStyle = "nickNameTextBox1";
  let namecolor = "#3D5D91";
  if (!isHost) {
    inputStyle = "nickNameTextBox2";
    namecolor = "#C6BFC3";
  } else {
    inputStyle = "nickNameTextBox1";
    namecolor = "#3D5D91";
  }
  return (
    <div className="nickNameBox">
      <p
        style={{
          fontSize: "18px",
          fontWeight: "400",
          color: namecolor,
        }}
      >
        Enter your nickname
      </p>
      <input
        type="text"
        placeholder="Your Nickname"
        className={inputStyle}
        onChange={(e) => {
          setName(e.target.value);
          onNameSubmit(e.target.value.trim());
          socket.emit("send_name", e.target.value, socket.id);
        }}
      ></input>
      <Link to="/playmusic" style={{ width: "100%" }}>
        {isHost && (
          <button
            className="hostPartyButton"
            onClick={() => {
              socket.emit("start_party");
            }}
          >
            Start the party
          </button>
        )}
      </Link>
    </div>
  );
};

export default Namebox;

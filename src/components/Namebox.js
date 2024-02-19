import { Link } from "react-router-dom";
const Namebox = ({ isHost }) => {
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
      ></input>
      <Link to="/playmusic" style={{ width: "100%" }}>
        {isHost && <button className="hostPartyButton">Start the party</button>}
      </Link>
    </div>
  );
};

export default Namebox;

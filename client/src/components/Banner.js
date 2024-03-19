import { useEffect } from "react";
import hand from "../assets/hand.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import io from "socket.io-client";
// const socket = io("http://localhost:5001");

const Banner = () => {
  const navigate = useNavigate();

  function goToWaitPage() {
    const joinCode = document.querySelector(".codeInput").value;
    navigate(`/waitpage?code=${joinCode}`);
  }
  // function validateCode() {
  //   const code = document.querySelector(".codeInput").value;
  //   socket.emit("validate_code", code);
  // }

  // useEffect(() => {
  //   if (socket) {
  //     socket.on("code_validated", (data) => {
  //       if (data.isValid) {
  //         navigate(`/waitpage?code=${data.code}`);
  //       } else {
  //         console.log("Code is invalid");
  //       }
  //     });
  //   }
  // }, [socket]);

  return (
    <div className="banner">
      <div className="bannerText">
        <h1>
          Become a part of every party <br /> you go to
        </h1>
        <h2>You’ll never have to listen to the music you don’t like</h2>
        <div className="codeEntryField">
          <input
            type="text"
            placeholder="Enter the 6 digit code"
            className="codeInput"
          />
          {/* <Link to="/waitpage"> */}
          <button className="joinButton" onClick={goToWaitPage}>
            Join a party
          </button>
          {/* </Link> */}
        </div>
      </div>
      <div className="handImage">
        <img src={hand} alt="bannerphoto" />
      </div>
    </div>
  );
};

export default Banner;

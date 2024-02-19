import hand from "../assets/hand.png";
import { Link } from "react-router-dom";
const Banner = () => {
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
          <Link to="/waitpage">
            <button className="joinButton">Join a party</button>
          </Link>
        </div>
      </div>
      <div className="handImage">
        <img src={hand} alt="bannerphoto" />
      </div>
    </div>
  );
};

export default Banner;

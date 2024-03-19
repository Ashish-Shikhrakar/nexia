import spotifyicon from "../assets/spotifyicon.svg";
import { Link } from "react-router-dom";
const LoginButton = () => {
  return (
    <div className="loginButtonDiv">
      <Link to="/host" className="loginButtonLink">
        <button className="loginButton">
          {" "}
          <img src={spotifyicon} alt="" /> Log in with Spotify
        </button>
      </Link>
    </div>
  );
};

export default LoginButton;

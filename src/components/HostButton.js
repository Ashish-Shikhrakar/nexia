import { Link } from "react-router-dom";

const Hostbutton = () => {
  return (
    <Link to="/login">
      <div>
        <button className="hostButton">Host a party</button>
      </div>
    </Link>
  );
};

export default Hostbutton;

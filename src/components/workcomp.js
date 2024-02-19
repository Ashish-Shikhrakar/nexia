import icon1 from "../assets/icon1.png";
import Ftlinks from "./Ftlinks";
const workcomp = () => {
  return (
    <div className="mainDiv">
      <h1
        style={{
          fontSize: "48px",
          fontWeight: "800",
        }}
      >
        How it works?
      </h1>
      <div className="iconsGrid">
        <div className="iconbox">
          <img src={icon1} alt="icon1" />
          <p className="textbox">
            Create/ Join <br />a party
          </p>
        </div>
        <div className="iconbox">
          <img src={icon1} alt="icon1" />
          <p className="textbox">
            Search for your <br />
            favorite songs
          </p>
        </div>
        <div className="iconbox">
          <img src={icon1} alt="icon1" />
          <p className="textbox">
            Add songs <br />
            to the queue
          </p>
        </div>
        <div className="iconbox">
          <img src={icon1} alt="icon1" />
          <p className="textbox">
            Vote to skip <br />
            the current song
          </p>
        </div>
      </div>
      <Ftlinks />
    </div>
  );
};

export default workcomp;

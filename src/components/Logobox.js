import logo1 from "../assets/logoicon1.svg";
import logo2 from "../assets/logoicon2.svg";

const Logobox = ({ logoProperties, color }) => {
  let logo = null;
  if (logoProperties.logoType === "1") {
    logo = logo1;
  } else {
    logo = logo2;
  }
  return (
    <div className="logobox">
      <img
        src={logo}
        alt="logo"
        style={{
          width: logoProperties.logoWidth,
          height: logoProperties.logoHeight,
          margin: "10px",
        }}
      />
      <p
        style={{
          fontSize: logoProperties.textsize,
          fontWeight: logoProperties.textweight,
          color: color,
        }}
      >
        Nexia
      </p>
    </div>
  );
};

export default Logobox;

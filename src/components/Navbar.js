import Logobox from "./Logobox";
import { logoPropertiesForNavbar1 } from "../config";
import { logoPropertiesForNavbar2 } from "../config";
import Hostbutton from "./HostButton";
import Leavebutton from "./LeaveButton";

const Navbar = ({ navStyle }) => {
  let isHome = true;
  if (navStyle === "navbar2") {
    isHome = false;
  }
  if (isHome) {
    return (
      <div className={navStyle}>
        <div className="navElementsContainer">
          <Logobox logoProperties={logoPropertiesForNavbar1} />
          <Hostbutton />
        </div>
      </div>
    );
  } else {
    return (
      <div className={navStyle}>
        <div className="navElementsContainer">
          <Logobox logoProperties={logoPropertiesForNavbar2} color="#3D5D91" />
          <Leavebutton />
        </div>
      </div>
    );
  }
};

export default Navbar;

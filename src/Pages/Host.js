import SettingsBox from "../components/Settingsbox";
import Logobox from "../components/Logobox";
import Namebox from "../components/Namebox";
import Ftlinks from "../components/Ftlinks";
import Ftmessage from "../components/Ftmessage";
import Memberlist from "../components/Memberlist";
import { logoPropertiesForHostPage } from "../config";
import useDynamicPageTitle from "../components/Pagetitle";

const Host = (props) => {
  useDynamicPageTitle({ title: props.title });

  return (
    <div className="hostPage">
      <Logobox logoProperties={logoPropertiesForHostPage} color="#3D5D91" />
      <Memberlist />
      <div>
        <Namebox isHost={true} />
        <SettingsBox isHost={true} />
        <Ftmessage isDarkBG={false} />
        <Ftlinks marginTop="5px" />
      </div>
    </div>
  );
};

export default Host;

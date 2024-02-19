import Logobox from "../components/Logobox";
import Namebox from "../components/Namebox";
import Ftmessage from "../components/Ftmessage";
import Ftlinks from "../components/Ftlinks";
import SettingsBox from "../components/Settingsbox";
import Memberlist from "../components/Memberlist";
import { logoPropertiesForWaitPage } from "../config";
import useDynamicPageTitle from "../components/Pagetitle";

const Waitpage = (props) => {
  useDynamicPageTitle({ title: props.title });
  return (
    <div className="waitPage">
      <Logobox logoProperties={logoPropertiesForWaitPage} />
      <Namebox type={false} />
      <p className="waitPagepStyle">Waiting for your host to start the party</p>
      <Memberlist />
      <SettingsBox isHost={false} />
      <Ftmessage isDarkBG={true} />
      <Ftlinks marginTop="5px" colorStyle="#C6BFC3" />
    </div>
  );
};

export default Waitpage;

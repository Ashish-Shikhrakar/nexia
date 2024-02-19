import Ftlinks from "../components/Ftlinks";
import LoginButton from "../components/LoginButton";
import Logobox from "../components/Logobox";
import useDynamicPageTitle from "../components/Pagetitle";
import { logoPropertiesForLoginPage } from "../config";

const Login = (props) => {
  useDynamicPageTitle({ title: props.title });
  return (
    <div className="loginPage">
      <Logobox logoProperties={logoPropertiesForLoginPage} />
      <h2 className="loginText">We are excited to get your party started!</h2>
      <LoginButton />
      <Ftlinks colorStyle="#c6bfc3" />
    </div>
  );
};

export default Login;

import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Work from "../components/workcomp";
import useDynamicPageTitle from "../components/Pagetitle";

const Home = (props) => {
  useDynamicPageTitle({ title: props.title });
  return (
    <div>
      <Navbar navStyle="navbar1" />
      <Banner />
      <Work />
    </div>
  );
};

export default Home;

import { Link } from "react-router-dom";

const Ftmessage = ({ isDarkBG }) => {
  let pStyle = "";
  let linkColor = null;
  if (!isDarkBG) {
    pStyle = "ftMessageText1";
    linkColor = "#3D5D91";
  } else {
    pStyle = "ftMessageText2";
    linkColor = "#70DCE3";
  }
  return (
    <div className="ftMessage">
      <p className={pStyle}>
        Host your own party for FREE at{" "}
        <Link
          to="/"
          style={{
            fontWeight: "700",
            color: linkColor,
          }}
        >
          {" "}
          nexia.com/login
        </Link>
      </p>
    </div>
  );
};

export default Ftmessage;

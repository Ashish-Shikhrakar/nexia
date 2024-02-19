import useDynamicPageTitle from "../components/Pagetitle";
import Navbar from "../components/Navbar";
import Popup from "../components/Popup";
import AddSongButton from "../components/addSongButton";
import AddSongPopup from "../components/addSongPopup";
import SongWrapper from "../components/SongWrapper";
import { useRef } from "react";

const PlayMusic = (props) => {
  useDynamicPageTitle({ title: props.title });

  const audioRef = useRef();

  return (
    <div className="musicPage">
      <Navbar navStyle="navbar2" />
      <div className="musicPageWrapper">
        <AddSongButton />
        <SongWrapper audioRef={audioRef} />
        <Popup />
        <AddSongPopup audioRef={audioRef} />
      </div>
    </div>
  );
};

export default PlayMusic;

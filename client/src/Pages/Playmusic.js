import useDynamicPageTitle from "../components/Pagetitle";
import Navbar from "../components/Navbar";
import Popup from "../components/Popup";
import AddSongButton from "../components/addSongButton";
import AddSongPopup from "../components/addSongPopup";
import SongWrapper from "../components/SongWrapper";
import { useContext, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { SocketContext } from "../context/context";

const PlayMusic = (props) => {
  useDynamicPageTitle({ title: props.title });
  const socket = useContext(SocketContext);
  const audioRef = useRef();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [selectedSongIndex, setSelectedSongIndex] = useState([]);

  let host;
  let isHost = searchParams.get("host");

  const handleSongSelect = (index) => {
    setSelectedSongIndex([...selectedSongIndex, index]);
  };

  if (isHost === "true") {
    host = true;
  } else {
    host = false;
  }

  socket.on("playTrack", (passedIndex) => {
    console.log("Song index:", passedIndex);
    handleSongSelect(passedIndex);
    socket.emit("usersAddedMusic", passedIndex);
  });

  return (
    <div className="musicPage">
      <Navbar navStyle="navbar2" />
      <div className="musicPageWrapper">
        <AddSongButton />
        <SongWrapper
          audioRef={audioRef}
          host={host}
          songQueueLength={selectedSongIndex.length}
          songIndex={selectedSongIndex[0]}
          onSongEnd={() => setSelectedSongIndex(selectedSongIndex.slice(1))}
          handleSongSelect={handleSongSelect}
        />

        <Popup />
        <AddSongPopup
          audioRef={audioRef}
          host={host}
          handleSongSelect={handleSongSelect}
        />
      </div>
    </div>
  );
};

export default PlayMusic;

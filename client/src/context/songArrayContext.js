import { createContext, useState, useContext } from "react";

const SongArrayContext = createContext();

const SongArrayProvider = ({ children }) => {
  const [selectedSongArray, setselectedSongArray] = useState([]);

  return (
    <SongArrayContext.Provider
      value={{ selectedSongArray, setselectedSongArray }}
    >
      {children}
    </SongArrayContext.Provider>
  );
};

const useSongArray = () => useContext(SongArrayContext);

export { SongArrayProvider, useSongArray };

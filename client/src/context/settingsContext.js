import { createContext, useState, useContext } from "react";

const SettingsContext = createContext();

const SettingsProvider = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState({
    members: parseInt("5"),
    votes: parseInt("2"),
    songLength: parseInt("5"),
  });

  return (
    <SettingsContext.Provider value={{ selectedOption, setSelectedOption }}>
      {children}
    </SettingsContext.Provider>
  );
};

const useSettings = () => useContext(SettingsContext);

export { SettingsProvider, useSettings };

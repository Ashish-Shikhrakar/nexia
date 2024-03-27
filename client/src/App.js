import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Host from "./Pages/Host";
import Waitpage from "./Pages/Waitpage";
import PlayMusic from "./Pages/Playmusic";
import { SettingsProvider } from "./context/settingsContext";
import { SongArrayProvider } from "./context/songArrayContext";

function App() {
  return (
    <SettingsProvider>
      <SongArrayProvider>
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home title="Nexia" />} />
              <Route path="/login" element={<Login title="Log In" />} />
              <Route path="/host" element={<Host title="Host a party" />} />
              <Route path="/waitpage" element={<Waitpage title="Waitroom" />} />
              <Route
                path="/playmusic"
                element={<PlayMusic title="Playing" />}
              />
            </Routes>
          </div>
        </Router>
      </SongArrayProvider>
    </SettingsProvider>
  );
}

export default App;

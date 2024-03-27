import { tracks } from "../Data/tracks";

const SongsQueue = ({ selectedSongIndex }) => {
  return (
    <div className="songsQueue">
      <div className="queueTitle">
        <p>Queued songs will appear here.</p>
      </div>
      {selectedSongIndex.map((index) => {
        return (
          <div className="songQueueList" key={index}>
            <p>{tracks[index].title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SongsQueue;

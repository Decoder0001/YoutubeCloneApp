import React, { useEffect, useState } from "react";

import SearchBar from "./components/SearchBar";
import youtube from "./api/youtube";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

function App() {
  const [videos, setVideos] = useState([]);
  const [videoSelect, setVideoSelect] = useState(null);

  useEffect(() => {
    onTermSubmit("satisfying");
  }, []);

  const onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    console.log(response.data.items);
    setVideos(response.data.items);
    setVideoSelect(response.data.items[0]);
  };

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={videoSelect} />
          </div>
          <div className="five wide column">
            <VideoList
              videos={videos}
              onVideoSelect={(video) => setVideoSelect(video)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

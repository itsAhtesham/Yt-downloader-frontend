import { useState } from 'react';
import ytdl from 'ytdl-core';

function App() {
  const [url, setUrl] = useState('');
  const [videoInfo, setVideoInfo] = useState(null);

  const getVideoInfo = async () => {
    try {
      const info: any = await ytdl.getInfo(url);
      setVideoInfo(info);
    } catch (error: any) {
      console.error('Error fetching video info:', error.message);
    }
  };

  const downloadVideo = () => {
    // if (videoInfo) {
    //   const videoStream = ytdl(url, { quality: 'highest' });
    //   videoStream.pipe(res); // Replace "res" with the logic to handle the downloaded video (e.g., save to disk).
    // }
  };

  return (
    <div className="App">
      <h1>YouTube Video Downloader</h1>
      <label>
        Enter YouTube Video URL:
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </label>
      <button onClick={getVideoInfo}>Get Video Info</button>

      {videoInfo && (
        <div>
          <h2>Video Information</h2>
          {/* <p>Title: {videoInfo.videoDetails.title}</p>
          <p>Author: {videoInfo.videoDetails.author.name}</p>
          <p>Duration: {videoInfo.videoDetails.lengthSeconds} seconds</p> */}
          <button onClick={downloadVideo}>Download Video</button>
        </div>
      )}
    </div>
  );
}

export default App;

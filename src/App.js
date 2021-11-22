import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import axios from './axios'
import Video from './Video';

function App() {

  const [videos, setVideos] = useState([])

  const fetchPosts = async () => {
    const response = await axios.get('/v2/posts')
    setVideos(response.data)
    // return response
  }
console.log();
  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div className="app">
      <h1>MERN tiktok clone</h1>
      <div className="app__videos">
        {videos.map(({_id, url, channel, description, song, shares, messages, likes}) => (
          <Video
            key={_id}
            url={url}
            channel={channel}
            description={description}
            song={song}
            likes={likes}
            messages={messages}
            shares={shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

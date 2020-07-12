import React, { useState, useEffect } from "react";
import List from './components/List';
import Main from './components/Main';
import Default from 'youtube-api-search';
import './App.css';

const App = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    
    useEffect (() => {
        const KEY = 'AIzaSyBUdrW8JHPAU-UbdHOprviDHn-PSJa7no4'; 
        const videoSearch = term => {
            Default ({key: KEY, term: term}, (videos) => {
                setVideos(videos);
                setSelectedVideo(videos[0]);
            });
        }
        
        videoSearch('frontent');
    }, [])

    return (
        <div className="App">

            <div className="page-main">
                <div className="page-main-banner">
                    <div className="page-main-banner-logo">FE NewTube <span>5</span></div>
                    <div className="page-main-banner-YT">by YouTube</div>
                </div>
                <Main video={selectedVideo} />
            </div>

            <div className="page-list">
                <div className="page-list-banner">
                    <h3>The 5 News For Frontend Developer</h3>
                </div>
                <List onVideoSelect={selectedVideo => setSelectedVideo(selectedVideo)} videos={videos} />
            </div>

        </div>
    );
}

export default App;

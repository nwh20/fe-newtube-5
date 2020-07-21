import React, { useState, useEffect } from "react";
import List from './components/List';
import Main from './components/Main';
import getVideo from 'youtube-api-search';
import youtube from './youtube-logo.svg';
import logo from './main-logo.svg';

const App = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    
    useEffect (() => {
        const KEY = 'AIzaSyBUdrW8JHPAU-UbdHOprviDHn-PSJa7no4';
        const Search = term => {
            getVideo ({key: KEY, term: term}, (videos) => {
                setVideos(videos);
                setSelectedVideo(videos[0]);
            });
        }
        
        Search('frontend');
    }, [])

    return (
        <div className="App">
            <div className="page-main">
                <div className="page-main-banner">
                    <img src={logo} alt="main-logo" className="page-main-banner-logo" />
                    <div className="page-main-banner-youtube">
                        by 
                        <img src={youtube} alt="youtube-logo" onClick={() => {window.open('https://www.youtube.com/', '_blank');}} />
                    </div>
                </div>
                <Main video={selectedVideo} />
            </div>

            <div className="page-list">
                <div className="page-list-banner">
                    <h3>The 5 New Videos For Frontend Developer</h3>
                </div>
                <List onVideoSelect={selectedVideo => setSelectedVideo(selectedVideo)} videos={videos} />
            </div>

        </div>
    )
}

export default App;

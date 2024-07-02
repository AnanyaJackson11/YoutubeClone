import React from "react";
import Home from './homepage';
import { Route, Routes } from 'react-router-dom';
import VideoPage from "./VideoPage";
import WatchHistory from "./WatchHistory";
import LikedVideo from "./LikedVideo";
import WatchLater from "./WatchLater";
import YourVideo from "./YourVideo";
import Library from "./Library";
import Chanel from "./Chanel";
function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/videopage/:vid" element={<VideoPage />} />
            <Route path="/history" element={<WatchHistory />} />
            <Route path="/likedvideo" element={<LikedVideo />} />
            <Route path="/watchlater" element={<WatchLater />} />
            <Route path="/yourvideo" element={<YourVideo />} />
            <Route path="/library" element={<Library/>}/>
            <Route path="/chanelpage/:Cid" element={<Chanel/>}/>
        </Routes>
        
    );
}

export default AllRoutes;

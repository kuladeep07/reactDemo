import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navigation from './Components/Navigation';
import Home from './Components/Home';
import ImageEnhancemnt from './Components/ImageEnhancement';
import VideoEnhancement from './Components/VideoEnhancement';
import EnhancedImage from "./Components/EnhancedImage";
import VideoFrames from './Components/VideoFrames';
import Error from './Components/Error';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Navigation />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/image" element={<ImageEnhancemnt />}/>
          <Route path="/video" element={<VideoEnhancement/>}/>
          <Route path="/enhancedImage" element={<EnhancedImage/>}/>
          <Route path="/videoFrames" element={<VideoFrames/>}/>
        <Route component={Error}/>
       </Routes>
    </div> 
  </BrowserRouter>
  );
}
export default App;

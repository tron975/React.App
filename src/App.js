import React from 'react';
import styled from "styled-components";
import "./index.css";
import './App.css';
import VideoLooper from 'react-video-looper'


function ClickMe() {
  return(
    'Are you sure you want to give up??'
  )}
function App() {
  return (
    <>
    <body>
      <center><h1>Welcome to my Website!</h1></center>
      <h2 id = "h2">I like coding</h2>
      <iframe controls width="600" height="400"
       src="https://www.youtube.com/embed/gFaan1Tz6wg?autoplay=1&react-video-looper.min.js" type="video/mp4">
      </iframe>
    <button className = "bt2" onClick = {ClickMe}>Click me!</button> 
    <div><b><i>Made with the Python Manim Library
    </i></b></div>

    </body>
    </>
    
  );
}

export default App;

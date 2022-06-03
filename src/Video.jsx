import React from 'react';
import './App.css';
import { Button } from './Button';
import './video.css'; 
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import 'bootstrap/dist/css/bootstrap.css';


const video = () => {
  return (
    <div className='videos'>
        <video src= '/videos/video-1.mp4' autoPlay loop muted /> 
        <h1>Welcome to your new Home</h1>
        <p>What are you waiting for?</p>
        <div className="hero-btns">
            <Button 
            className ='btns' 
            buttonStyle='btn--outline' 
            buttonSize='btn--large'
            >
                GET STARTED
            </Button>

            <Button 
            className ='btns' 
            buttonStyle='btn--primary' 
            buttonSize='btn--large'
            >
                WATCH TRAILER <FontAwesomeIcon icon="fas fa-play-circle" />
            </Button>
          </div> 
  </div> 
  );
}

export default video;
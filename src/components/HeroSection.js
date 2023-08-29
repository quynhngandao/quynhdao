import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {

  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h1 className='intro-title'>Hi, I'm Quynh </h1>
      <p className='intro-paragraph'> Full-Stack Software Developer</p>
      <div className='hero-btns'>
      </div>
    </div>
  );
}

export default HeroSection;
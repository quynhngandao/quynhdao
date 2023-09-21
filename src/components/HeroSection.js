import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {

  return (
    <div >
      
    <div className=' hero-container'>
      {/* <video src='https://vod-progressive.akamaized.net/exp=1695351645~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4728%2F9%2F248644905%2F900760521.mp4~hmac=5071e70fe2aeff888c304d72547928e9f37fbadc4653d60648ab878e7bb23844/vimeo-prod-skyfire-std-us/01/4728/9/248644905/900760521.mp4?filename=file.mp4' autoPlay loop muted /> */}
      <h1 className='justify-items intro-title align-center'>Hi, I'm Quynh </h1>
      <p className='intro-paragraph'> Full-Stack Developer</p>
      <div className='hero-btns'>
      </div>
    </div>
    </div>
  );
}

export default HeroSection;
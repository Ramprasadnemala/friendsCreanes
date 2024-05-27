import React from 'react'
import './HomePage.css'
import Slider from '../Slider/Slider';
const HomePage = () => {
    return (
      <div className="homepage-container">
        {
          <Slider />
        }
      </div>
    );
  }

export default HomePage

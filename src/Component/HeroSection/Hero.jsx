import React from 'react';
import CampusVideo from '../../Assets/Campus.mp4';
import './Hero.css';
import {ReactTyped} from "react-typed";

export function Hero() {
  return (
    <div className="hero-container">
      <div className="video-background">
        <video className="video-inner" autoPlay muted loop>
          <source src={CampusVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="text-overlay">
        <h1 className="campus-link">Campus Link</h1>
        <ReactTyped
          className="typed-animation"
          strings={[
            "Manage timetables",
            "Mark and modify attendance",
            "Enter and adjust students' marks",
            "View schedules and attendance records",
            "Access visualizations like pie charts and bar graphs for attendance",
            "Submit complaints regarding any issues"
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </div>
    </div>
  );
}
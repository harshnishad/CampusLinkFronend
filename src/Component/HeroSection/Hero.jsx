import React from 'react';
import CampusVideo from '../../Assets/Campus.mp4';
import styled from 'styled-components';
import { ReactTyped } from "react-typed";

const HeroContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 90vh; /* Set the height of the hero section */
`;

const VideoBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; 
`;

const VideoInner = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover; 
  filter: blur(2px); 
`;

const TextOverlay = styled.div`
  position: relative;
  z-index: 1; /* Ensure text is above the video */
  text-align: center;
  color: white; /* Text color */
`;

const Title = styled.h1`
  background: url(https://raw.githubusercontent.com/s1mpson/-/master/codepen/black-lives-matter/victim-collage.png);
  background-size: 40%;
  background-position: 50% 50%;
  -webkit-background-clip: text;
  color: hsla(0, 0%, 0%, 0.08);
  animation: zoomout 10s ease 500ms forwards;
    animation-iteration-count: infinite;
  font-size: 250px!important;
  
  @keyframes zoomout {
    from {
      background-size: 40%;
    }
    to {
      background-size: 10%;
    }
  }
`;



export function Hero() {
  return (
    <HeroContainer>
      <VideoBackground>
        <VideoInner autoPlay muted loop>
          <source src={CampusVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </VideoInner>
      </VideoBackground>
      <TextOverlay>
        <Title>Campus Link</Title>
        <ReactTyped
          className="typed-animation"
          style={{fontSize:"50px"}}
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
      </TextOverlay>
    </HeroContainer>
  );
}
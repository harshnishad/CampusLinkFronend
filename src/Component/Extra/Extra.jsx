import styled from "styled-components"
import { ReactTyped } from "react-typed";
import img from '../../Assets/student-man-with-laptop.jpg'
export function Extra() {
  const ExtraAreaONe = styled.div`
   height:50vh;
  `;
  const ExtraComponent = styled.div`
   height:100vh;
    
  `;
  const ExtraText = styled.h1`
    font-family: "Edu AU VIC WA NT Arrows", cursive;
  font-optical-sizing: auto;
  font-weight:500px;
  font-style: normal;
  font-size:200px;
  `;
  const Typeingtext = styled.div`
    margin-left:80vw;
    font-size:50px;
    color:blue;
  `;
  const ExtraDivForTest = styled.div`
  postion:relative;
 
  `;
  const Heading = styled.h1`
  font-family: "Dancing Script", cursive;
  font-optical-sizing: auto;
  font-weight: bolder;
  position:absolute;
  margin-left:2vw;

  color:green;
  font-size:20px;
  `;
  const ImageOne = styled.img`
  position:absolute;
    height:25vh;
    width:25vw;
    border-radius:10px;
    margin-left:40vw;
  `;
  const ImageTwo = styled.img`
  position:absolute;
  height:22vh;
  width:22vw;
  border-radius:10px;
  margin-left:30vw;
  margin-top:20vh;
`;
  const ImageOfman = styled.img`
 height:400px;
 
 margin-left:70vw;
 margin-top:10vh;
`;

  return <ExtraComponent>
    <ExtraAreaONe>
      <ExtraText> E-campusLink

      </ExtraText>
      <Typeingtext>
        {" "}
        <ReactTyped
          strings={["Soon..", "जल्दि"]}
          typeSpeed={100}
          loop
          backSpeed={20}
          cursorChar=""
          showCursor={true}
        />
      </Typeingtext>
      <></>
    </ExtraAreaONe>
    <ExtraDivForTest>
     
      <><ImageOne src="https://i.ibb.co/ryn3RVr/Screenshot-2024-12-04-113918.png" />
        <ImageTwo src="https://i.ibb.co/pyrb5WS/Screenshot-2024-12-04-114003.png" /></>
        
      
        <Heading> 
        Providing E-ClassRooms,<a style={{color:"red"}} href="https://github.com/harshnishad/ECampusLink"><button>Tap For Beta test</button></a>
     
      </Heading>
      


    </ExtraDivForTest>
    <ImageOfman src={img} />
  
  </ExtraComponent>
}
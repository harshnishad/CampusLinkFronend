import './feature.css'
import styled from "styled-components";
export function Features(){
  const FeatureTopContainer = styled.div`
  `;
  const FeatureHeading = styled.h1`
      text-align:center;
      color:white;
      font-weight:50px;
      font-size:40px;
  `;
  const FeatureSpan = styled.span`
     color:blue;
  `;
  const AllFeatureSection = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    gap:10px;
    margin-left:16vw;
  `;
  const FeatureSection = styled.div`
    height:20vh;
    width:20vw;
    margin-top:100px;
    
  `;
  const FeatureImages =styled.img`
   margin-left:10px;
   text-align:center;
  `;
  const FeaturesHeading = styled.h2`
   color:white;
   font-family:mullish;
   margin-top:20px;
  `;
  const FeaturePara = styled.p`
  margin-top:10px;
   color:white;
  `;
  return<>
     <div className="upper">
     <svg class="css-1fllxtj" width="1620" height="128" viewBox="0 0 1620 128" xmlns="http://www.w3.org/2000/svg"><path d="M1620 128H0C0 128 42 -7.67075e-05 511 0C980 7.67075e-05 1545.76 92.991 1620 128Z"></path></svg>
     </div>
     <div className='mid'>
     <FeatureTopContainer>
    <FeatureHeading>
        Features Makes Your Life easy, <FeatureSpan>try now</FeatureSpan>
    </FeatureHeading>
    <AllFeatureSection>
        <FeatureSection>
            <FeatureImages src="https://deel-website-media-prod.s3.amazonaws.com/Chart_392ccb9004.svg"/>
            <FeaturesHeading>
                Graphical Representation
            </FeaturesHeading>
            <FeaturePara>
                Visualize attendance data through interactive graphs for better insights and decision-making.
            </FeaturePara>
        </FeatureSection>

        <FeatureSection>
            <FeatureImages src="https://deel-website-media-prod.s3.amazonaws.com/Asterisk_413ad7289b.svg"/>
            <FeaturesHeading>
                Dedicated Support
            </FeaturesHeading>
            <FeaturePara>
                Our support team is always ready to assist you with any questions or issues related to attendance management.
            </FeaturePara>
        </FeatureSection>

        <FeatureSection>
            <FeatureImages src="https://deel-website-media-prod.s3.amazonaws.com/Lock_00a2c2eb46.svg"/>
            <FeaturesHeading>
                End to End Encryption
            </FeaturesHeading>
            <FeaturePara>
                Ensure the security of your attendance data with robust encryption protocols protecting your information.
            </FeaturePara>
        </FeatureSection>

        <FeatureSection>
            <FeatureImages src="https://deel-website-media-prod.s3.amazonaws.com/Integration_81276006e7.svg"/>
            <FeaturesHeading>
                Scalability
            </FeaturesHeading>
            <FeaturePara>
                Easily scale your attendance management system to accommodate growing teams and changing needs.
            </FeaturePara>
        </FeatureSection>

        <FeatureSection>
            <FeatureImages src="https://deel-website-media-prod.s3.amazonaws.com/Messages_ffbdc2b1cd.svg"/>
            <FeaturesHeading>
                Trusted Partner
            </FeaturesHeading>
            <FeaturePara>
                Join with trust us for efficient and reliable attendance management solutions.
            </FeaturePara>
        </FeatureSection>

        <FeatureSection>
            <FeatureImages src="https://deel-website-media-prod.s3.amazonaws.com/Avatars_fb897d467b.svg"/>
            <FeaturesHeading>
                User Friendly
            </FeaturesHeading>
            <FeaturePara>
                Our intuitive interface makes it easy for users of all skill levels to manage attendance effortlessly.
            </FeaturePara>
        </FeatureSection>
    </AllFeatureSection>
</FeatureTopContainer>
     </div>
     <div className="lower">
     <svg class="css-1beq6rf" width="1620" height="128" viewBox="0 0 1620 128" xmlns="http://www.w3.org/2000/svg"><path d="M0 0H1620C1620 0 1578 128 1109 128C640 128 74.2379 35.009 0 0Z"></path></svg>
     </div>
  </>
}
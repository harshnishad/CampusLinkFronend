import styled from "styled-components"

export function Footer() {

    const FooterSection = styled.div`
       height:50vh;
       display: flex;
       justify-content: space-between;
       padding: 2rem;
       
       color:white;
       background-color: black;
    `;

    const AboutUsDiv = styled.div`
        width: 40vw;
        display: flex;
        flex-direction: column;
    `;

    const AboutUsDivPara = styled.p`
      margin-top:20px;
    `;
    const AboutUsAllSocialMedia = styled.div`
         margin-top:20px;
        display: flex;
        gap: 1rem;
    `;

    const SocialAnchor = styled.a`
        text-decoration: none;
         color:blue;
        font-size: 1.5rem;
    `;

    const QuickLink = styled.div`
    text-align:center;
        width: 30vw;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    `;
    const Heading = styled.h1`
     font-weight:bolder;
     font-size:20px;
    `;
    const QuicklinkAnchor = styled.a`
        text-decoration: none;
        color:grey;
        font-size: 1.2rem;
    `;

    const ContactInfo = styled.div`
        width: 30vw;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    `;
    const Address = styled.div`
        display: flex;
        align-items: center;
    `;
    const PhoneNo = styled.div`
        display: flex;
        align-items: center;
    `;
    const Email = styled.div`
        display: flex;
        align-items: center;
    `;
    const Image = styled.img`
         background-color: white;
         border-radius:50%;
        width: 30px;
        height: 30px;
        margin-right: 1rem;
    `;
    const Text = styled.h2``;

    return (
        <>
            <div style={{ overflow: "hidden" }}>
                <svg class="css-1fllxtj" width="1620" height="128" viewBox="0 0 1620 128" xmlns="http://www.w3.org/2000/svg"><path d="M1620 128H0C0 128 42 -7.67075e-05 511 0C980 7.67075e-05 1545.76 92.991 1620 128Z"></path></svg>
            </div>
            <FooterSection>

                <AboutUsDiv>
                    <Heading>About Us</Heading>
                    <AboutUsDivPara>
                        Streamline University management, class organization, and add students and faculty. Seamlessly track attendance, assess performance, and provide feedback. Access records, view marks, and communicate effortlessly.
                    </AboutUsDivPara>
                    <AboutUsAllSocialMedia>
                        <SocialAnchor href="https://github.com/harshnishad">GitHub</SocialAnchor>
                        <SocialAnchor href="https://harshnishad.me">Website</SocialAnchor>
                        <SocialAnchor href="#">Instagram</SocialAnchor>
                        <SocialAnchor href="https://www.linkedin.com/in/harshnishad/">LinkedIn</SocialAnchor>
                    </AboutUsAllSocialMedia>
                </AboutUsDiv>

                <QuickLink>
                    <Heading >QuickLink</Heading>
                    <QuicklinkAnchor href="#Home">Home</QuicklinkAnchor>
                    <QuicklinkAnchor href="#About">About</QuicklinkAnchor>
                    <QuicklinkAnchor href="#Services">Services</QuicklinkAnchor>
                    <QuicklinkAnchor href="#Contact">Contact</QuicklinkAnchor>
                    <QuicklinkAnchor href="#FAQ">FAQ</QuicklinkAnchor>
                    <QuicklinkAnchor href="#Blog">Blog</QuicklinkAnchor>
                </QuickLink>

                <ContactInfo>
                    <Address>
                        <Image src="https://img.icons8.com/?size=100&id=53430&format=png&color=000000" />
                        <Text>GLA UNIVERSITY</Text>
                    </Address>
                    <PhoneNo>
                        <Image src="https://img.icons8.com/?size=100&id=9730&format=png&color=000000" />
                        <Text>(+91) 8299471328</Text>
                    </PhoneNo>
                    <Email>
                        <Image src="https://img.icons8.com/?size=100&id=12623&format=png&color=000000" />
                        <Text>hn3121147@gmail.com</Text>
                    </Email>
                </ContactInfo>
            </FooterSection>
        </>

    );
}

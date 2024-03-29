import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Carousel from "../Carousel";
import Button from "../Button";
import {dark} from "../../styles/Themes"

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  ${"" /* background-color: lightblue; */}

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 70rem) {
    width: 85%;
  }

 
  @media (max-width: 64rem) {
    width: 100%;
    flex-direction: column;

    &>*:last-child {
      width: 80%;
    }
  }

  @media (max-width: 40rem) {

    &>*:last-child {
      width: 90%;
    }
  }
`;

const Box = styled.div`
  width: 50%;
  height: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  

  @media (max-width: 64rem) {
    min-height: 50vh;
  }

`;
const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  width: 80%;
  text-transform: capitalize;
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  margin: 0 auto;

  @media (max-width: 64rem) {
    width: 100%;
    text-align: center;
  }

  @media (max-width: 40rem) {
    font-size: ${(props) => props.theme.fontxl};
  }

  @media (max-width: 30rem) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;

const Subtext = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  width: 80%;
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  margin: 1rem auto;
  font-weight: 400;

  @media (max-width: 64rem) {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontlg};
  }

  @media (max-width: 40rem) {
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 30rem) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const SubtextLight = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  width: 80%;
  color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.6)`};
  align-self: flex-start;
  margin: 1rem auto;
  font-weight: 400;

  @media (max-width: 64rem) {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontlg};
  }

  @media (max-width: 40rem) {
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 30rem) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const ButtonContainer = styled.div`
width: 80%;
margin: 1rem auto;
display: flex;
align-self: flex-start;

@media (max-width: 64rem) {
  width: 100%;

  button {
    margin: 0 auto;
  }
}
`

const About = () => {
  return (
    <Section id='about'>
      <Container>
        <Box>
          {" "}
          <Carousel />{" "}
        </Box>
        <Box>
          <Title>
            The All New Bored Sims.
            </Title>
            <Subtext>
              Bored Sims are a new public collection of NFTs—unique digital
              collectibles. Bored Sims are stored as ERC-721 tokens on the
              Ethereum blockchain and hosted on 'opensea.io'.
            </Subtext>
            <SubtextLight>
              There are more than 150+ custom digital masterpieces, but each NFT
              is unique and gives lifetime access to Bored Sims membership
              services.
            </SubtextLight>
            <ButtonContainer>
            <ThemeProvider theme={dark}>
              <Button text="JOIN OUR DISCORD" link="#" />
            </ThemeProvider>
            </ButtonContainer>
            
          
        </Box>
      </Container>
    </Section>
  );
};

export default About;

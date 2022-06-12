import React from "react";
import styled from "styled-components";
import Button from "./Button"
import Typewriter from "typewriter-effect";

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  width: 80%;
  color: ${props => props.theme.text};
  align-self: flex-start;

  .text-1 {
    color: black;
    text-transform: uppercase;
    font-family: 'Akaya Telivigala', cursive;
  }
  .text-2 {
    color: red;
    text-transform: uppercase;
    font-family: 'Akaya Telivigala', cursive;
  }
  .text-3 {
    color: yellow;
    text-transform: uppercase;
    font-family: 'Akaya Telivigala', cursive;
  }
`

const SubTitle = styled.h3`
font-size: ${props => props.theme.fontlg};
text-transform: capitalize;
color: ${props => `rgba(${props.theme.textRgba}, 0.6)`};
font-weight: 600;
margin-bottom: 1rem;
width: 80%;
align-self: flex-start;
`

const ButtonContainer = styled.div`
width: 80%;
align-self: flex-start;
`

const TextCompile = () => {
  return (
    <>
        <Title>
        A New World Of NFT's
      <Typewriter
      options={{
        autoStart: true,
        loop: true,

      }}

        onInit={(typewriter) => {
          typewriter
            .typeString("<span class='text-1'>Web3.</span>")
            .pauseFor(2000)
            .deleteAll()
            .typeString("<span class='text-2'>NFTs.</span>")
            .pauseFor(2000)
            .deleteAll()
            .typeString("<span class='text-3'>Bored Sims</span>")
            .pauseFor(2000)
            .deleteAll()
            .start()
        }}
      />

      
    </Title>
    <SubTitle>Solana Failed You? Well We Won't.</SubTitle>
    <ButtonContainer>
    <Button text='Explore' link="#about" />
    </ButtonContainer>
    </>
  );
};

export default TextCompile;

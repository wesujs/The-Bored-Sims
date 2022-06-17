import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useRef, useLayoutEffect } from 'react'
import styled from "styled-components"
import Accordian from '../Accordian';

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  position: relative;
  color: ${(props) => props.theme.body};

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${(props) => props.theme.body};
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.body};
  width: fit-content;
`;

const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: space-between;
align-items: center;

`

const Box = styled.div`
width: 45%;

`

const Faq = () => {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    let element = ref.current;
    ScrollTrigger.create({
      trigger: element,
      start: 'top top',
      end: 'bottom top',
      pin: true,
      pinSpacing: false,
      scrub: true,
    })
  
    return () => {
      ScrollTrigger.kill();
    };
  }, [])

  return (
    <Section ref={ref}>
      <Title>
        Faq
      </Title>
      <Container>
<Box>
  <Accordian title="WHERE CAN I BUY A BORED SIM NFT?">
    The Sims Will Be on Sale via invite link posted in our discord server.
  </Accordian>
  <Accordian title="WHERE CAN I BUY A BORED SIM NFT?">
    The Sims Will Be on Sale via invite link posted in our discord server.
  </Accordian>
  <Accordian title="WHERE CAN I BUY A BORED SIM NFT?">
    The Sims Will Be on Sale via invite link posted in our discord server.
  </Accordian>
  
</Box>
<Box>
<Accordian title="WHERE CAN I BUY A BORED SIM NFT?">
    The Sims Will Be on Sale via invite link posted in our discord server.
  </Accordian>
  <Accordian title="WHERE CAN I BUY A BORED SIM NFT?">
    The Sims Will Be on Sale via invite link posted in our discord server.
  </Accordian>
  <Accordian title="WHERE CAN I BUY A BORED SIM NFT?">
    The Sims Will Be on Sale via invite link posted in our discord server.
  </Accordian>
</Box>
      </Container>
    </Section>
  )
}

export default Faq
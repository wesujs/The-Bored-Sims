/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import styled from 'styled-components';
import Banner from './Banner';
import Logo from './Logo';
import Facebook from '../Icons/Facebook';
import Instagram from '../Icons/Instagram'
import LinkedIn from '../Icons/LinkedIn'
import Twitter from '../Icons/Twitter'

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
  color: ${(props) => props.theme.text};

  display: flex;
  ${'' /* justify-content: center;
  align-items: center; */}
  flex-direction: column;
`;

const Container = styled.div`
width: 75%;
margin: 2rem auto;
display: flex;
justify-content: space-between;
align-items: center;

border-bottom: 2px solid ${props => props.theme.text};


`

const IconList = styled.div`
display: flex;
align-items: center;
margin: 1rem auto;

&>*{
  padding-right: 0.5rem;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
}
`

const Left = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

const MenuItems = styled.ul`
list-style: none;
width: 50%;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(3, 1fr);
grid-gap: 1rem;

`

const Item = styled.li`
width: fit-content;
cursor: pointer;

&::after{
  content: '';
  display: block;
  width: 0%;
  height: 2px;
  background: ${props => props.theme.text};
  transition: width 0.3s ease;
}

&:hover::after{
  width: 100%
} 

`

const Bottom = styled.div`
width: 75%;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;

a {
  text-decoration: underline;
}

`

const Footer = () => {

  const scrollTo = (id) => {

    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    })
  }
  return (
    <Section>
      <Banner />
      <Container>
      <Left>
        <Logo />
        <IconList>

          <a href='https://facebook.com' target="_blank" rel='noreferrer'>
            <Facebook />
          </a>

          <a href='https://Instagram.com' target="_blank" rel='noreferrer'>
            <Instagram />
          </a>

          <a href='https://Linkedin.com' target="_blank" rel='noreferrer'>
            <LinkedIn />
          </a>

          <a href='https://Twitter.com' target="_blank" rel='noreferrer'>
            <Twitter />
          </a>

        </IconList>
      </Left>

      <MenuItems>
      <Item onClick={() => scrollTo('home')} >Home</Item>
        <Item onClick={() => scrollTo('about')} >About</Item>
        <Item onClick={() => scrollTo('timeline')} >Timeline</Item>
        <Item onClick={() => scrollTo('shows')} >Shows</Item>
        <Item onClick={() => scrollTo('creators')} >Creators</Item>
        <Item onClick={() => scrollTo('faq')} >Faq</Item>
      </MenuItems>
      </Container>

      <Bottom>
        <span>
        &copy; {new Date().getFullYear()} Bored Sims. All rights reserved.
        </span>
        <span>
          Made with &#10084; by <a href='https://www.github.com/wesujs' target="_blank" rel='noreferrer'>Wes</a>
        </span>
      </Bottom>
    </Section>
  )
}

export default Footer
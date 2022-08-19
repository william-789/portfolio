import React from 'react'
import styled from 'styled-components'
import { IconContext } from "react-icons";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const ContactSection = styled.section `
width: 100vw;
background-color: #000;
display: flex;
align-items: center;
flex-direction: column;
color: #fff;
font-size: 2rem;
text-align: center;
padding-bottom: 50px;
svg {
  width: 100%;
}
a {
  text-decoration: none;
  padding: 10px 0;
  font-size: 1.5rem;
  color: #e3ac2d;
}
`;

function Contact() {
  return (
    <IconContext.Provider
    value={{ color: '#e3ac2d', size: '50px' }}>
    <ContactSection>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,160L16,186.7C32,213,64,267,96,245.3C128,224,160,128,192,122.7C224,117,256,203,288,234.7C320,267,352,245,384,224C416,203,448,181,480,160C512,139,544,117,576,133.3C608,149,640,203,672,197.3C704,192,736,128,768,106.7C800,85,832,107,864,112C896,117,928,107,960,96C992,85,1024,75,1056,101.3C1088,128,1120,192,1152,229.3C1184,267,1216,277,1248,261.3C1280,245,1312,203,1344,197.3C1376,192,1408,224,1424,240L1440,256L1440,0L1424,0C1408,0,1376,0,1344,0C1312,0,1280,0,1248,0C1216,0,1184,0,1152,0C1120,0,1088,0,1056,0C1024,0,992,0,960,0C928,0,896,0,864,0C832,0,800,0,768,0C736,0,704,0,672,0C640,0,608,0,576,0C544,0,512,0,480,0C448,0,416,0,384,0C352,0,320,0,288,0C256,0,224,0,192,0C160,0,128,0,96,0C64,0,32,0,16,0L0,0Z"></path></svg>
      <p id='contact'>You can find me on:</p>
      <a href='https://github.com/william-789/' target="_blank" rel='noreferrer'><FaGithub />william-789</a>
      <a href='https:www.linkedin.com/in/william-riberack' target="_blank" rel='noreferrer'><FaLinkedin />/william-riberack</a>
      <a href='mailto:riberackw@gmail.com'><FaEnvelope />riberackw@gmail.com</a>
      <a href='tel:+351910864280'><FaWhatsapp />+351 910 864 280</a>
    </ContactSection>
    </IconContext.Provider>
  )
}

export default Contact
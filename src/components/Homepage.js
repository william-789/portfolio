import React from 'react'
import styled from 'styled-components'

const HomeSection = styled.section `
width: 100%;
display: flex;
justify-content: center;
background-color: #000;
color: #fff;
align-items: center;
flex-direction: column;
font-size: 2rem;
svg {
  width: 100%;
}
h1 {
  color: #e3ac2d;
}
p {
  text-align: center;
}
p a {
  text-decoration: none;
  color: #fff;
  border-bottom: #fff solid 1px;
  padding: 3px;
}
`;

function Homepage() {
  return (
    <HomeSection>
    <h1>William</h1>
    <p>Self-taught Web Developer</p>
    <p>Front-end</p>
    <p><a href='#contact'>Contact</a></p>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#fff" fillOpacity="1" d="M0,160L16,186.7C32,213,64,267,96,245.3C128,224,160,128,192,122.7C224,117,256,203,288,234.7C320,267,352,245,384,224C416,203,448,181,480,160C512,139,544,117,576,133.3C608,149,640,203,672,197.3C704,192,736,128,768,106.7C800,85,832,107,864,112C896,117,928,107,960,96C992,85,1024,75,1056,101.3C1088,128,1120,192,1152,229.3C1184,267,1216,277,1248,261.3C1280,245,1312,203,1344,197.3C1376,192,1408,224,1424,240L1440,256L1440,320L1424,320C1408,320,1376,320,1344,320C1312,320,1280,320,1248,320C1216,320,1184,320,1152,320C1120,320,1088,320,1056,320C1024,320,992,320,960,320C928,320,896,320,864,320C832,320,800,320,768,320C736,320,704,320,672,320C640,320,608,320,576,320C544,320,512,320,480,320C448,320,416,320,384,320C352,320,320,320,288,320C256,320,224,320,192,320C160,320,128,320,96,320C64,320,32,320,16,320L0,320Z"></path>
    </svg>
    </HomeSection>
  )
}

export default Homepage

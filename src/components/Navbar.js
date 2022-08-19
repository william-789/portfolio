import React from 'react';
import styled from 'styled-components';
import { FaBars } from "react-icons/fa";

const NavbarBar = styled.nav `
width: 100vw;
position: sticky;
top:0;
z-index: 11;
background-color: #000;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 100px 0 35px;
border-bottom: solid 5px #e3ac2d;
.bars {
  display: none;
}

@media only screen and (max-width: 650px) {
  padding: 0 35px;

  .bars {
    position: absolute;
    right: 45px;
    top: 25px;
    fill: #e3ac2d;
    font-size: 24px;
    display: inline;  
    z-index: 11;  
  }

  .nav.active {
    visibility: visible;
    opacity: 1;
  }
}
`;
const Logo = styled.div `
max-height: 75px;
max-width: 75px;
z-index: 11;
#hedgehog {
  fill: #e3ac2d;
  height: 100%;
  width: 100%
}
`;
const Nav = styled.ul `
list-style-type: none;
li {
  display: inline;  
}
li a {
  text-decoration: none;
  color: #e3ac2d;
  padding: 0 15px;
  font-size: 24px;
  border-right: solid 2px #e3ac2d;
}
li a[href^="#contact"] {
  color: #fff;
  text-decoration: underline;
}
.bars {
  display: none;
}

@media only screen and (max-width: 650px) {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  padding: 55px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000;
  visibility: hidden;
  opacity: 0;
  transition: opacity 2s;
  z-index: 10;

  li a[href^="#contact"] {
  text-decoration: none;
  }
  li {
    padding: 20px 0;
  }
  li a {    
    border-right: 0px none;
    border-bottom: solid 2px #e3ac2d;
  }
}
`;

function Navbar() {
  const menu = document.querySelector('.nav');

  function correctScroll (e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const navbarHeight = document.querySelector('nav').offsetHeight;
    const topSection = section.offsetTop;
    const desiredPosition = topSection-navbarHeight;
    window.scrollTo({
      top: desiredPosition,
      behavior: "smooth"
    });
    menu.classList.toggle("active");
  }
  function handleNav () {
    menu.classList.toggle("active");
  }
  return (
    <NavbarBar>
      <Logo>
      <svg
          version="1.0"
          id="hedgehog"
          xmlns="http://www.w3.org/2000/svg"
          width="240.000000pt"
          height="240.000000pt"
          viewBox="0 0 240.000000 240.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,240.000000) scale(0.100000,-0.100000)"
          >
            <path d="M 1086 1964 c -9 -8 -16 -31 -16 -50 c 0 -39 -22 -98 -40 -109 c -8 -5 -19 0 -29 12 c -22 27 -106 83 -125 83 c -27 0 -48 -43 -36 -74 c 24 -65 0 -153 -65 -241 c -13 -16 -33 -50 -45 -75 c -30 -61 -83 -124 -125 -150 c -29 -18 -39 -20 -73 -10 c -45 12 -68 6 -83 -21 c -7 -13 -6 -26 2 -41 c 27 -52 205 -260 248 -291 c 50 -36 151 -85 218 -106 c 27 -9 43 -21 47 -35 c 9 -32 8 -34 -16 -38 c -33 -4 -35 -41 -4 -58 c 18 -9 44 -11 86 -7 c 80 9 86 14 55 42 c -28 27 -30 35 -12 57 c 10 13 40 17 160 20 c 138 5 147 4 147 -14 c 0 -12 -9 -20 -29 -24 c -30 -6 -45 -33 -34 -61 c 13 -32 203 9 203 44 c 0 8 -7 16 -15 19 c -18 7 -20 57 -2 72 c 6 5 31 15 53 21 c 43 12 116 78 128 118 c 5 16 18 21 64 26 c 36 3 77 15 110 33 c 44 23 52 32 52 56 c 0 20 -7 31 -22 38 c -13 5 -45 19 -73 31 l -50 21 l 30 13 c 17 7 51 32 78 55 c 70 62 62 110 -18 110 c -47 0 -115 17 -115 29 c 0 5 7 14 16 21 c 28 24 66 99 59 119 c -9 28 -32 33 -91 20 c -28 -6 -63 -9 -77 -5 l -25 6 l 19 38 c 25 51 35 127 19 147 c -18 22 -40 19 -84 -11 c -22 -15 -57 -29 -80 -31 l -41 -5 l 3 71 c 6 125 -38 156 -104 75 c -35 -42 -64 -62 -105 -70 c -10 -2 -21 10 -32 34 c -23 52 -75 112 -97 112 c -10 0 -26 -7 -34 -16 m 91 -84 m -399 -513 c -4 -30 -43 -35 -57 -8 c -8 15 -7 23 5 35 c 21 22 56 3 52 -27"/>
          </g>
        </svg>
      </Logo>
      <Nav className='nav'>
        <li><a href='#projects' onClick={correctScroll}>Projects</a></li>
        <li><a href='#skills' onClick={correctScroll}>Skills</a></li>
        <li><a href='#contact' onClick={correctScroll}>Contact</a></li>
      </Nav>
      <FaBars className='bars' onClick={handleNav}/>
    </NavbarBar>
  )
}

export default Navbar

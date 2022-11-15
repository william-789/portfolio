import React from 'react'
import styled from 'styled-components'
/* image imports */
import CSSimg from './img/CSS.png'
import HTMLimg from './img/HTML.png'
import JSimg from './img/JS.png'
import ReactImg from './img/React.png'
import GitImg from './img/Git-Icon-1788C.png'
import firebaseImg from './img/firebase-2-300x300.png'
import angularImg from './img/angular.png'
import typescriptImg from './img/typescript.png'
import tailwindImg from './img/tailwind.png'

const SkillSection = styled.section `
width: 100%;
background-color: #fff;
text-align: center;
color: #e3ac2d;
h1 {
    display: block;
    font-size: 2rem;
}
.images {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
img {
    padding: 30px;
    min-width: 100px;
    min-height: 100px;
    max-width: 240px;
    max-height: 240px;
}

`;

function Skills() {
  return (
    <SkillSection id='skills'>
        <h1>Skills</h1>
        <div className='images'>
        <img src={ReactImg} alt='React JS logo'></img>  
        <img src={angularImg} alt='Angular 14 logo'></img>

        <img src={JSimg} alt='JavaScript logo'></img>
        <img src={typescriptImg} alt='TypeScript logo'></img>

        <img src={CSSimg} alt='CSS logo'></img>
        <img src={HTMLimg} alt='HTML logo'></img>
        <img src={tailwindImg} alt='Tailwind logo'></img>
        
        
        <img src={GitImg} alt='Git logo'></img>  
        <img src={firebaseImg} alt='Firebase logo'></img>
        </div>
    </SkillSection>
  )
}

export default Skills

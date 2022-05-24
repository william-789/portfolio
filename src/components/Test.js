import React from 'react'
import styled from 'styled-components'

const TestSection = styled.section `
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
font-size: 36px;
font-family: sans-serif;
`;

function Test() {
  return (
    <TestSection>Test</TestSection>
  )
}

export default Test
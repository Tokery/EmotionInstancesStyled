import styled from 'styled-components';
import createEmotion from 'create-emotion';
import createEmotionStyled from 'create-emotion-styled'
import React from 'react';


const emotion = createEmotion();
const customStyled = createEmotionStyled(emotion, React);


export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export const specialDiv = customStyled.div`
  background-color: hotpink;
  color: white;
`;


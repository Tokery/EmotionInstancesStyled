import createEmotion from 'create-emotion';
import createEmotionStyled from 'create-emotion-styled'
import React from 'react';


const customEmotion = createEmotion();
export default createEmotionStyled(customEmotion, React);

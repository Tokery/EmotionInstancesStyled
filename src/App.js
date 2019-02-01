import React, { Component } from 'react';
import './App.css';
import { Title, Wrapper, SpecialDiv } from './Styled';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Wrapper>
          <Title>
            Hello World!
          </Title>
        </Wrapper>
        <SpecialDiv>
          Test
        </SpecialDiv>
      </div>
    );
  }
}

export default App;

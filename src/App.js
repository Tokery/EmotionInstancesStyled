import React, { Component } from 'react';
import './App.css';
import { Title, Wrapper, specialDiv } from './Styled';
import AppHelpChatWidget from 'chat-widget';

const chatConfig = {
  chatTitle: 'Chat header',
  unitId: '123',
  themeOptions: {
      'btn-bg-color': '#221c35',
      'btn-bg-color-hover': '#46396d',
      'header-bg-color': '#221c35',
      'btn-icon-color': '#fff',
      'btn-icon-color-hover': '#fff',
  },
  chatSpecs: {
      CX_CHAT_CHANNEL: 'Support',
      CX_CHAT_REASON: 'Support',
      CX_CHAT_PROGRAM: '{\'v\':1.0}',
  },
  floatingIcon: true,
};

class App extends Component {
  constructor(props) {
    super(props);

    this.chatPromise = AppHelpChatWidget.initChat(chatConfig);
  }

  render() {
    return (
      <div className="App">
        <Wrapper>
          <Title>
            Hello World!
          </Title>
        </Wrapper>
        <specialDiv>
          Kevin
        </specialDiv>
      </div>
    );
  }
}

export default App;

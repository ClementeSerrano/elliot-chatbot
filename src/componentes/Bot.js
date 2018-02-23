import React from 'react';
import { ThemeProvider } from 'styled-components';

import ChatBot from '../lib/index';


const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#7b4397',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#7b4397',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const steps = [
  {
    id: '1',
    message: 'Hola! Me llamo ubot',
    end: true,
  },
];

const Bot = () => (
  <ThemeProvider theme={theme}>
    <ChatBot steps={steps} />
  </ThemeProvider>
);

export default Bot;

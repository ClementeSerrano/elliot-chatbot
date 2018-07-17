import React from 'react'
import { ThemeProvider } from 'styled-components'

import ChatBot from '../lib/index'
import ApiConection from './ApiConection'
import botConfig from '../botConfig.json'

const theme = botConfig.theme

const steps = [
  {
    id: '1',
    message: '¡Hola! Me llamo Ubot. ¿En qué puedo ayudarte?',
    trigger: 'pregunta'
  },
  {
    id: 'pregunta',
    user: true,
    trigger: '3'
  },
  {
    id: '3',
    component: <ApiConection />,
    asMessage: true,
    trigger: 'pregunta'
  }
]

const Bot = () => (
  <ThemeProvider theme={theme}>
    <ChatBot floating steps={steps} />
  </ThemeProvider>
)

export default Bot

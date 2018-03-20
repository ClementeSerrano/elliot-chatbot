import React, { Component } from 'react'
import { Form, FormGroup, Col, FormControl, Button } from 'react-bootstrap'
import styled from 'styled-components'

class ConexionApi extends Component {
  static state = {
    respuesta: []
  }
  async componentDidMount () {
    try {
      const res = await fetch('https://westus.api.cognitive.microsoft.com/qnamaker/v2.0/knowledgebases/ff47195a-05db-4768-abf2-6218af1ab1bc/generateAnswer', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Ocp-Apim-Subscription-Key': '15ebe6a507834b3780247bb0822f25c3'
        },
        body: JSON.stringify({
          'question': 'hola' // eslint-disable-line
        })
      })
      const respuesta = await res.json()
      this.setState({ // eslint-disable-line
          respuesta: respuesta.answers, // eslint-disable-line
      })
      console.log(this.state.respuesta)
    } catch (e) {
      console.log(e)
    }
  }
  render () {
    return (
      <div>
        <Form>
          <FormGroup controlId='formHorizontalEmail'>
            <SuperCol2 sm={4}>
              <strong>Pregunta</strong>
            </SuperCol2>
            <SuperCol1 sm={4}>
              <FormControl type='text' />
            </SuperCol1>
            <SuperCol1 sm={4}>
              <Button bsStyle='primary' type='submit'>Enviar</Button>
            </SuperCol1>
          </FormGroup>
        </Form>
        <SuperRow>
          <SuperCol2 lg={4} >
            <strong>Respuesta</strong>
          </SuperCol2>
          <SuperCol1 lg={4}>
            {this.state.respuesta.map(respuesta => respuesta.answer)}
          </SuperCol1>
        </SuperRow>
      </div>
    )
  }
}

export default ConexionApi

const SuperCol1 = styled(Col)`
  text-align: left
`
const SuperCol2 = styled(Col)`
  text-align: right
`
const SuperRow = styled.div`
  margin-top: 80px
  margin-bottom: 80px
`

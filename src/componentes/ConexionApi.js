import React, { Component } from 'react'

class ConexionApi extends Component {
  state = {
    answers: []
  }

  async componentDidMount () {
    try {
      const { steps } = this.props
      const question = steps.pregunta.value
      if (question) {
        var response = await fetch('https://westus.api.cognitive.microsoft.com/qnamaker/v2.0/knowledgebases/ff47195a-05db-4768-abf2-6218af1ab1bc/generateAnswer', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key': '15ebe6a507834b3780247bb0822f25c3'
          },
          body: JSON.stringify({
            'question': `${question}`
          })
        })
        response = await response.json()
        if (response.answers && response.answers[0].answer === 'No good match found in the KB') {
          this.setDefaultAnswer()
        } else {
          this.setState({ answers: response.answers })
        }
      } else {
        this.setDefaultAnswer()
      }
    } catch (e) {
      console.log(e)
    }
  }

  setDefaultAnswer () {
    this.setState({ answers: [{answer: 'Creo que no te he entendido'}] })
  }

  render () {
    return (
      <div>
        {this.state.answers.map(answer => answer.answer)}
      </div>
    )
  }
}

export default ConexionApi

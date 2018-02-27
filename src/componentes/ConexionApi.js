import React, { Component } from 'react';

class ConexionApi extends Component {
    state = {
      respuesta: [],
    }

    async componentDidMount() {
      try {
        const { steps } = this.props;
        const pregunta = steps.pregunta.value;
        const res = await fetch('https://westus.api.cognitive.microsoft.com/qnamaker/v2.0/knowledgebases/ff47195a-05db-4768-abf2-6218af1ab1bc/generateAnswer', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key': '15ebe6a507834b3780247bb0822f25c3',
          },
          body: JSON.stringify({
              'question': `${pregunta}` // eslint-disable-line
          }),
        });
        const respuesta = await res.json();
          this.setState({ // eslint-disable-line
              respuesta: respuesta.answers, // eslint-disable-line
        });
        console.log(this.state.respuesta);
      } catch (e) {
        console.log(e);
      }
    }
    render() {
      return (
        <div>
          {this.state.respuesta.map(respuesta => respuesta.answer)}
        </div>
      );
    }
}

export default ConexionApi;

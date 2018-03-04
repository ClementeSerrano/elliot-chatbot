'use strict'
const fetch = require('fetch')

module.exports.answerQuestion = async (event, context, callback) => {
  console.log(event, context)
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event
    })
  }
  if (event.question) {
    // Call MS qna API
    var qnaResponse = await fetch(
      'https://westus.api.cognitive.microsoft.com/qnamaker/v2.0/knowledgebases/ff47195a-05db-4768-abf2-6218af1ab1bc/generateAnswer', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Ocp-Apim-Subscription-Key': '15ebe6a507834b3780247bb0822f25c3'
        },
        body: JSON.stringify({
          'question': `${event.question}`
        })
      }
    )
    qnaResponse = await qnaResponse.json()
  } else {
    response.statusCode = 400
    response.body = JSON.stringify({message: 'No question provided'})
  }

  callback(null, response)

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
}

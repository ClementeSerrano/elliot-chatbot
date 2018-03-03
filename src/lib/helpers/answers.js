const htmlVowels = {
  '&#225;': 'á',
  '&#237;': 'í',
  '&#243;': 'ó',
  '&#250;': 'ú'
}

export const answersToUTF = answers => {
  return answers.map(answer => {
    for (const key in htmlVowels) {
      answer = {answer: answer.answer.replace(new RegExp(key, 'g'), htmlVowels[key])}
    }
    return answer
  })
}

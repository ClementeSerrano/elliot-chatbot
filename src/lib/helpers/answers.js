const htmlVowels = {
  '&#225;': 'á',
  '&#233;': 'é',
  '&#237;': 'í',
  '&#243;': 'ó',
  '&#250;': 'ú',
  '&#191;': '¿'
}

export const fixVowels = answers => {
  return answers.map(answer => {
    for (const key in htmlVowels) {
      answer = {answer: answer.answer.replace(new RegExp(key, 'g'), htmlVowels[key])}
    }
    return answer
  })
}

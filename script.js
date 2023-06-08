const questions = require('./questions')

const answers = []

const response = questions.map(question => {
  answers.push({
    "questionId": question.id,
    "answerIndex": question.rightIndex,
    "rightIndex": question.rightIndex,
    "time": 10,
  })

  return {
    question: question.question,
    response: question.alternatives[question.rightIndex],
  }
})

console.log(response)
console.log('----------------------------------------')
console.log(JSON.stringify({ answers }))

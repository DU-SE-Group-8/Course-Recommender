const { questions, courses } = require('./constants')

const get_questions = (req, res) => {
  const round = parseInt(req.params.round)
  const log = req.body

  if (round === 1) {
    data = questions
      .slice(0,3)
      .map((question, index) => {
        return {
          questionId: index,
          ...question,
        }
      })
    res.send(data)
  } else if (round === 2) {
    const indicies = [3,4,5]
    data = indicies.map(index => (
      {
        questionId: index,
        ...questions[index],
      }
    ))
    res.send(data)
  }
}

const recommend_courses = (req, res) => {
  const log = req.body
  res.send(courses[Math.floor(Math.random() * courses.length)])
}

module.exports = {
  get_questions,
  recommend_courses,
}
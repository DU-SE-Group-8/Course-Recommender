const { questions, courses } = require('./constants')

const get_questions = (req, res) => {
  const round = parseInt(req.params.round)
  if (round === 1) {
    res.send(questions.slice(0,3))
  } else if (round === 2) {
    res.send(questions.slice(3,6))
  }
}

const recommend_courses = (req, res) => {
  res.send(courses[Math.floor(Math.random() * courses.length)])
}

module.exports = {
  get_questions,
  recommend_courses,
}
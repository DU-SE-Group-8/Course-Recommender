const { questions, courses } = require('./constants')

const get_questions = (req, res) => {
  data = questions
  res.send(data)
}

const recommend_courses = (req, res) => {
  let log = req.body
  log = log.map(item => ({
    ...item,
    'answerId': item.answers.indexOf(item.answer),
  }))

  console.log(log)
  res.send(courses.slice(0,5))
}

module.exports = {
  get_questions,
  recommend_courses,
}
const { questions, courses } = require('./constants')
const knn = require('./knn')

const get_questions = (req, res) => {
  data = questions
  data.push({
    "question": "Is there anything else you want to add?",
    "answers": ["Yes", "No"],
  })
  res.send(data)
}

const recommend_courses = (req, res) => {
  let log = req.body
  log.pop()
  log = log.map(item => ({
    ...item,
    'answerId': item.answers.indexOf(item.answer),
  }))

  recCourseIds = knn.vectorsToCourses(knn.responseToVectors(log))
  ans = [courses[recCourseIds[0]],courses[recCourseIds[1]],courses[recCourseIds[2]],courses[recCourseIds[3]],courses[recCourseIds[4]]]
  res.send(ans)
}

module.exports = {
  get_questions,
  recommend_courses,
}

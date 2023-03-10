const { questions, courses } = require('./constants')
const knn = require('./knn')

const get_questions = (req, res) => {
  data = questions
  res.send([
    ...data,
    {
      "question": "Is there anything else you want to add?",
      "answers": ["Yes", "No"],
    }
  ])
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

  // Remove duplicates and bad items - courses with the same name
  courseNames = []
  cleanedCourses = []
  for (let i = 0; i < ans.length; i++) {
    if (!courseNames.includes(ans[i].name) && ans[i].url !== undefined) {
      courseNames.push(ans[i].name)
      cleanedCourses.push(ans[i])
    }
  }

  res.send(cleanedCourses)
}

module.exports = {
  get_questions,
  recommend_courses,
}

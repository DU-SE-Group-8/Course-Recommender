const express = require('express')
const router = express.Router()

const controller = require('./controller')

router.get('/questions', controller.get_questions)
router.post('/courses', controller.recommend_courses)

module.exports = router
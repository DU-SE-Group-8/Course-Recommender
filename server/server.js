const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const routes = require('./routes')

// Create express app 🔨 
const app = express()

// Middleware 🔒 Currently Open to All Routes
app.use(cors({
  origin: '*',
  optionsSuccessStatus: 200, // For legacy browser support
  methods: "GET, POST, PUT, PATCH, DELETE",
}))

app.use(morgan('dev'))
app.use(express.json())

// Routes 🐎
app.use(routes)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

module.exports = app
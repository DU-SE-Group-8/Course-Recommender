const app = require('./server')

// Start Server 🎉
const PORT = process.env.PORT || 3001
const server = app.listen(PORT, () => {
  console.log(`CORS-enabled web server listening on ${PORT}`)
})
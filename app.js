require('dotenv').config()
const express = require('express')
const confessionsRoutes = require('./routes/confessionsRoutes')

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3000

app.use('/api/v1/confessions', confessionsRoutes)

app.listen(PORT, function() {
  console.log(`running on ${PORT}`)
})

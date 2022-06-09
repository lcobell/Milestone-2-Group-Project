const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
require('dotenv').config()

app.use(cors())
app.use(express.json())

//connect to mongoose
mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('connected to mongo: ', process.env.MONGO_URI)
  }
)
//require route
app.use('/', require('./controllers/workouts_controller'))

app.listen(3000, function () {
  console.log('express server is running on port 3000')
})

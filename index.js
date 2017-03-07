const express = require('express')
const bodyParser = require('body-parser')
const port = 3000

const app = express()

app.use(express.static('assets'))
app.use(bodyParser.json())

var messages = []

// end points

app.get('/messages', function (req, res, next) {
  res.status(200).json({messages:messages})
})

app.post('/messages', function (req, res, next) {
  let d = new Date()

  messages.push({ message: req.body.message, time: d.toLocaleTimeString() })
  res.status(200).json({messages: messages})
})

// start app

app.listen(port, function() {
  console.log(`listening to port: ${port}`);
})

const express = require('express')
const bodyParser = require('body-parser')
const port = 3000

const app = express()

app.use(express.static('assets'))
app.use(bodyParser.json())

var messages = []

// end points

app.get('/messages', function (req, res, next) {
  res.status(200).json(messages)
})


app.post('/messages', function (req, res, next) {
  let d = new Date()

  // console.log(req.body, "user", req.body.user, req.body.messages)

  messages.push({ user: req.body.user, message: req.body.message, time: d.toLocaleTimeString() })
  res.status(200).json(messages)

})

// start app

app.listen(port, function() {
  console.log(`listening to port: ${port}`);
})

const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const messageRoute = require('./routes/message_route');

const app = express()

app.use(express.static('assets'))
app.use(bodyParser.json())

var messages = []

// end points

app.get('/messages', messageRoute);
app.post('/messages', messageRoute);

// start app

app.listen(port, function() {
  console.log(`listening to port: ${port}`);
})

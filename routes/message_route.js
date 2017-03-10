var express = require('express');
var router = express.Router();

var messages = []

router.get('/messages', function (req, res, next) {
  res.status(200).json(messages)
});
router.post('/messages', function (req, res, next) {
  let d = new Date()
  // console.log(req.body, "user", req.body.user, req.body.messages)

  messages.push({ user: req.body.user, message: req.body.message, time: d.toLocaleTimeString() })
  res.status(200).json(messages)

});

module.exports = router;

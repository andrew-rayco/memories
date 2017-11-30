var express = require('express')

var app = express()

app.get('/', function (req, res) {
  res.send('hello redux and react')
})

app.listen(3000, () => {
  console.log('listening to this joint on port 3000')
})

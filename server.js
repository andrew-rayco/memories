var express = require('express')
var path = require('path')

var app = express()

app.use(express.static(path.join(__dirname, '/public')))

// app.engine('html')

// app.set('views', __dirname + '/views')
// app.set('view engine', 'pug')

app.get('/', function (req, res) {
  console.log('hitting route')
  res.json({ name: 'andrew-rayco' })
})

app.get('/test', function (req, res) {
  console.log('hitting route')
  res.json({ name: 'andrew-rayco' })
})

app.listen(3000, () => {
  console.log('listening to this joint on port 3000')
})

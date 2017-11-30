var React = require('react')
var ReactDOM = require('react-dom')

function helloTemplate (props) {
  console.log(props)
  return (
    <div>hello {props.name}</div>
  )
}

var data = { name: 'Andyboi' }
var view = helloTemplate(data)

var placeToMount = document.getElementById('root')

ReactDOM.render(view, placeToMount)

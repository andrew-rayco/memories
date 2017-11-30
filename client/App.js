import React from 'react'
import ReactDOM from 'react-dom'

import Header from './Header'

function App (props) {
  return (
    <div className="container">
      <Header />
      <h1>This is the App component</h1>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

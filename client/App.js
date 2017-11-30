import React from 'react'
import ReactDOM from 'react-dom'

import Header from './Header'

function App (props) {
  return (
    <div className="container">
      <Header />
      <p>This is the App component</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

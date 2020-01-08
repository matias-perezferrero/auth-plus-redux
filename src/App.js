import React from 'react'
import './App.css'
import axios from 'axios'
import routes from './routes'

class App extends React.Component {
  render() {
    return <div>{routes}</div>
  }
}

export default App
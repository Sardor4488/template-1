import React from 'react'
import ReactDOM from 'react-dom'
import Main from './Main'
import axios from 'axios'
import { Provider } from 'react-redux'

axios.defaults.baseURL = 'https://teach-api.uz/api/'

ReactDOM.render(<Main />, document.getElementById('app'))

if (module.hot) {
  // enables hot module replacement if plugin is installed
  module.hot.accept()
}

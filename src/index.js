import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import Home from './Pages/Home'

import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import Store from './Redux/Store/Store'

ReactDOM.render(
  <Router>
    <Provider store={Store}>
      <Home />
    </Provider>
  </Router>,
  document.getElementById('root')
)

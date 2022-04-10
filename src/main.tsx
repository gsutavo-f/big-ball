import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './App'

ReactDOM.render(
  <React.StrictMode>
    <div>
      <App index={0} />
      <App index={1} />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
)

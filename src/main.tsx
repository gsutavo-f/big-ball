import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './App'

ReactDOM.render(
  <React.StrictMode>
    <h1 className="logo">BOLA.OOO</h1>
    <div>
    </div>
    <div className='group-on'>
      <App index={0} groupName="Grupo A" />
      <App index={1} groupName="Grupo B" />
      <App index={2} groupName="Grupo C" />
      <App index={3} groupName="Grupo D" />
    </div>
    <div className='group-on'>
      <App index={4} groupName="Grupo E" />
      <App index={5} groupName="Grupo F" />
      <App index={6} groupName="Grupo G" />
      <App index={7} groupName="Grupo H" />
    </div>
    <span className="fi fi-gr"></span> <span className="fi fi-gr fis"></span>
  </React.StrictMode>,
  document.getElementById('root')
)

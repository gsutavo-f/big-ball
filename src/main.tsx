import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import { Group } from './components/Group'

ReactDOM.render(
  <React.StrictMode>
    <h1 className="logo">BOLA.OOO</h1>
    <div className='group-on'>
      <Group index={0} groupName="Grupo A" />
      <Group index={1} groupName="Grupo B" />
      <Group index={2} groupName="Grupo C" />
      <Group index={3} groupName="Grupo D" />
    </div>
    <div className='group-on'>
      <Group index={4} groupName="Grupo E" />
      <Group index={5} groupName="Grupo F" />
      <Group index={6} groupName="Grupo G" />
      <Group index={7} groupName="Grupo H" />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
)

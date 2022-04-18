import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Groups } from './components/Groups'
import { Brackets } from './components/Brackets'
import './styles/index.css'

ReactDOM.render(
  <React.StrictMode>
    <h1 className="logo">BOLÃO.NET</h1>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Groups />} />
        <Route path='/brackets' element={<Brackets />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

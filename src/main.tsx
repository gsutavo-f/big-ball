import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Groups } from './pages/Groups';
import { Brackets } from './pages/Brackets';
import styles from './styles/BigBall.module.scss';

ReactDOM.render(
  <React.StrictMode>
    <h1 className={styles.logo}>BOLÃO.NET</h1>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Groups />} />
        <Route path='/brackets' element={<Brackets />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

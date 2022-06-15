import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from './styles/BigBall.module.scss';
import { Groups } from './pages/Groups';
import { Brackets } from './pages/Brackets';

export default function AppRouter() {
  return (
    <main>
      <Router>
        <h1 className={styles.logo}>BOLÃO.NET</h1>
        <Routes>
          <Route path='/'>
            <Route index element={<Groups />} />
            <Route path='Brackets' element={<Brackets />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
}
/* Components */
import Home from './components/Home/Home';
import Form from './components/Form/Form';
import Form2 from './components/Form2/Form2';
import NavBar from './components/NavBar/NavBar';
import NavBar2 from './components/NavBar/NavBar2';
import DetailDog from './components/DetailDog/DetailDog';
import LandingPage from './components/LandingPage/LandingPage';
/* Hooks */
import { Route, Routes, useLocation } from 'react-router-dom';
import style from './../src/App.module.css';


function App() {
  const { pathname } = useLocation()
  return (
    <div className={style.containerApp}>
      { pathname !== '/' && <NavBar2 />}
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<Home />}/>
        <Route path='/detail/:id' element={<DetailDog />} />
        <Route path='/form' element={<Form2 />}/>
      </Routes>
    </div>
  );
}

export default App;

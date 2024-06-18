/* Components */
//import NavBar2 from './components/NavBar/NavBar2';
//import DetailDog from './components/DetailDog/DetailDog';
import LandingPage from './components/LandingPage/LandingPage';
/* Hooks */
import { Route, Routes, useLocation } from 'react-router-dom';
import style from './../src/App.module.css';
import { Suspense } from 'react';
import React from 'react';

const Form2 = React.lazy(() => import('./components/Form2/Form2'));
const Home = React.lazy(() => import('./components/Home/Home'));
const NavBar2 = React.lazy(() => import('./components/NavBar/NavBar2'));
const DetailDog = React.lazy(() => import('./components/DetailDog/DetailDog'));

function App() {
  const { pathname } = useLocation()
  return (
    <div className={style.containerApp}>
    { pathname !== '/' && 
    <Suspense fallback={null}>
      <NavBar2 />
    </Suspense>
    }
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/home' element={
        <Suspense fallback={null}>
          <Home />
        </Suspense>
      }/>
      <Route path='/form' element={
        <Suspense fallback={null}>
          <Form2 />
        </Suspense>
      }/>
      <Route path='/detail/:id' element={
        <Suspense fallback={null} >
          <DetailDog />   
        </Suspense>
        } />
    </Routes>
  </div>
  );
}

export default App;

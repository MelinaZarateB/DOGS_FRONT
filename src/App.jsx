/* Components */
/* Hooks */
import { Route, Routes, useLocation } from 'react-router-dom';
import style from './../src/App.module.css';
import { Suspense } from 'react';
import React from 'react';
const Form2 = React.lazy(() => import('./components/Form2/Form2'));
const Home = React.lazy(() => import('./components/Home/Home'));
const NavBar2 = React.lazy(() => import('./components/NavBar/NavBar2'));
const DetailDog = React.lazy(() => import('./components/DetailDog/DetailDog'));
import Footer from './components/Footer /Footer';
import { getAllDogs } from './redux/actions';
import { useDispatch } from "react-redux";
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllDogs())
  }, []);

  return (
    <div className={style.containerApp}>
      <NavBar2 />
    <Routes>
      <Route path='/' element={
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
    <Footer></Footer>
  </div>
  );
}

export default App;

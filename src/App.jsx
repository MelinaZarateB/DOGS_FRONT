/* Components */
import Home from './components/Home/Home';
import Form from './components/Form/Form';
import NavBar from './components/NavBar/NavBar';
import DetailDog from './components/DetailDog/DetailDog';
import LandingPage from './components/LandingPage/LandingPage';
/* Hooks */
import { Route, Routes, useLocation } from 'react-router-dom';

function App() {
  const { pathname } = useLocation()
  return (
    <div className="App">
      { pathname !== '/' && <NavBar />}
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<Home />}/>
        <Route path='/detail/:id' element={<DetailDog />} />
        <Route path='/form' element={<Form />}/>
      </Routes>
    </div>
  );
}

export default App;

import imageHuella from './../../../assets/huella.png';
import style from './NavBar2.module.css';
import SearchBar2 from '../SearchBar/SearchBar2';
import { Link } from 'react-router-dom';
import { getAllDogs } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import imgHueso from './icons8-hueso-80.png';

const NavBar2 = () => {
  const dispatch = useDispatch()

  function reloadAllDogs () {
    dispatch(getAllDogs(true))
  }

  return (
    <>
      <nav className={`navbar navbar-expand-lg ${style.navContainer}`}>
        <div className="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{backgroundColor: 'white'}}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${style.collapseNavbar}`} id="navbarTogglerDemo01">
            <a className={`navbar-brand ${style.navbarBrand} `} href="#">
              <img src={imgHueso} alt="" className={style.imgHuella} />
            </a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className={`nav-item ${style.li}`}>
                <Link className={style.link} to='/'>
                <a className={`nav-link  ${style.spanItem}`} onClick={reloadAllDogs}>
                  Home
                </a>
                </Link>
              </li>
              <li className={`nav-item ${style.li}`}>
                <Link className={style.link} to='/form'>
                <a className={`nav-link  ${style.spanItem}`}>
                  Create a new breed!
                </a>
                </Link>
              </li>
            </ul>
          </div>
          
        </div>
        <SearchBar2 />
      </nav>
    </>
  );
};
export default NavBar2;

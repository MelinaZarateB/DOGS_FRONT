import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import styles from '../NavBar/NavBar.module.scss';
/* Importacion de actions */
import { selectDogsByTemperaments, getAllDogs, orderByName, orderByOrigin, orderByWeight } from '../../redux/actions';


const NavBar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const temperaments = useSelector((state) => state.temperaments)
    const { pathname } = useLocation()
    
  const handleHomeClick = () => {
    dispatch(getAllDogs()) 
  };

    const handleHome = (event) => {
        event.preventDefault()
        handleHomeClick()
        navigate('/home')
    }
    const handleForm = (event) => {
        event.preventDefault()
        navigate('/form')
    }
    const handleExit = (event) => {
        event.preventDefault()
        navigate('/')
    }

    /* Handlers para filtros y ordenamiento */
    const handlerFilterTemperament = (event) => {
        event.preventDefault()
        dispatch(selectDogsByTemperaments(event.target.value))
    };
    /* Handler para ordenar por nombre*/
    const handlerOrderByName = (event) => {
        event.preventDefault()
        dispatch(orderByName(event.target.value))
    }
    const handleOrderByOrigin = (event) => {
        event.preventDefault()
        dispatch(orderByOrigin(event.target.value))
    }
    const handleOrderByWeight = (event) => {
        event.preventDefault()
        dispatch(orderByWeight(event.target.value))
    }

    return(
        <div className={styles.navContainer}>
            <div className={styles.logo}>
            <img src="http://todovector.com/vector/animales/terrestres/perros/hueso-de-perro/164.png" />
            </div>

            {pathname === '/home' && (
                 <div className={styles.containerOptions}>
                 <p>Opciones de filtrado:</p>
                 <select className={styles.select} onChange={handlerFilterTemperament} >
                 <option disabled >Seleccione un temperamento</option>
                 <option> Filtrar por temperamento </option>
                 <option value="all" className={styles.option}>Todos los temperamentos</option>
                 {temperaments?.map((temp, index) => (
                 <option key={index} value={temp} className={styles.option}>
                 {temp}
                 </option>
                     ))}
                 </select>
                 <select className={styles.select} onChange={handlerOrderByName}>
                     <option>Ordenar por nombre</option>
                     <option value="A-Z" className={styles.option}>A-Z</option>
                     <option value="Z-A" className={styles.option}>Z-A</option>
                 </select>
                 <select className={styles.select} onChange={handleOrderByOrigin}>
                     <option>Ordenar por origen</option>
                     <option value="all" className={styles.option}>Todos</option>
                     <option value="API" className={styles.option}>API</option>
                     <option value="DB" className={styles.option}>Base de datos</option>
                 </select>
                 <select className={styles.select} onChange={handleOrderByWeight}>
                     <option>Ordenar por peso</option>
                     <option value="min_weight" className={styles.option}>Peso minimo</option>
                     <option value="max_weight" className={styles.option}>Peso maximo</option>
                 </select>
             </div>
            )}

            <div className={styles.secondSection}>
            <Link to='/home' className={styles.linkNav}>
            <span onClick={handleHome} className={styles.itemNav}> Inicio </span>
            </Link>
            <Link to='/form' className={styles.linkNav}>
            <span onClick={handleForm} className={styles.itemNav}> ¡Crea tu perro acá! </span>
            </Link>
            <Link to='/' className={styles.linkNav}>
            <span onClick={handleExit} className={styles.itemNav}> Salir </span>
            </Link>
            {pathname === '/home' && (
            <div className={styles.search}>
            <SearchBar />
            </div>
            )}
            </div>
            
        </div>
    )
}

export default NavBar;

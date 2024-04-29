import { Link } from 'react-router-dom';
import styles from './LandingPage.module.scss'
import { useNavigate } from 'react-router-dom';


const LandingPage = () => {
    const navigate = useNavigate()
    const handleIngresar = (event) => {
        event.preventDefault()
        navigate('/home')
    }
    return (
      <div className={styles.divLading}>
        <div className={styles.landingItems}>
          <h1 className={styles.title}>Bienvenido a la APP de DOGS</h1>
          <p>¡Ingresa para saber más de tus perros y sus características!</p>
          <Link to='/'>
            <button 
            className={styles.landingButton}
            onClick={handleIngresar}>
                INGRESAR
                </button>
          </Link>
        </div>
      </div>
    );
  };
  
export default LandingPage;
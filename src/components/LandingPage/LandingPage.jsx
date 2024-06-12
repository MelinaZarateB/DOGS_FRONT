import { Link } from 'react-router-dom';
import styles from './LandingPage.module.scss'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getAllDogs } from '../../redux/actions';
import { useDispatch } from 'react-redux';

const LandingPage = () => {
    const navigate = useNavigate()
    const handleIngresar = (event) => {
        event.preventDefault()
        navigate('/home')
    }
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getAllDogs())
      dispatch(getTemperaments())
    },[])
    
    return (
      <div className={`${styles.divLading} container-fluid`}>
        <div className={`${styles.landingItems} col-9 col-md-5 d-flex justify-content-center align-items-center`}>
          <h1 className={styles.title}>Welcome to the Dog Breeds APP</h1>
          <p className={styles.description}>Come in to learn more about your dogs and their characteristics!</p>
          <Link to='/'  className={styles.landingButton}
            onClick={handleIngresar}>
                ENTER
          </Link>
        </div>
      </div>
    );
  };
  
export default LandingPage;
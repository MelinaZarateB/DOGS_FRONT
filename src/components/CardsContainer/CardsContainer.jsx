/* Importacion de Hooks */
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
/* Importacion de actions */
import { getAllDogs } from '../../redux/actions';
/* Components */
import Card from '../Card/Card';
import Pagination from '../Pagination/Pagination';
import styles from '../CardsContainer/Cards.module.scss';

const CardsContainer = () => {
    const dispatch = useDispatch()
    const dogFiltered = useSelector((state) => state.dogsFiltered)

    /* Estados para la paginacion */
    const [cardsPerPage, setCardsPerPage] = useState(8)
    const [currentPage, setCurrentPage] = useState(1)

    const lastIndex = currentPage * cardsPerPage; 
    const firstIndex = lastIndex - cardsPerPage; 

    useEffect(() => {
        dispatch(getAllDogs())
    },[]);
  return (
    <>
      <div className={styles.cardsContainer}>
          {dogFiltered?.map((dog) => ( 
             <Card 
             key={dog.id} 
             id={dog.id}
             image={dog.image}
             name={dog.name} 
             temperament={dog.temperament} 
             weight={dog.weight} />
          )).slice(firstIndex, lastIndex)}
      </div>
      <div>
        <Pagination 
        cardsPerPage={cardsPerPage} 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        />
      </div>
      </>
  );
};

export default CardsContainer;


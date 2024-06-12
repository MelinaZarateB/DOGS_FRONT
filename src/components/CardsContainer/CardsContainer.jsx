/* Importacion de Hooks */
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
/* Importacion de actions */
import { getAllDogs } from '../../redux/actions';
/* Components */
import Card from '../Card/Card';
import Card2 from '../Card/Card2';
import Pagination from '../Pagination/Pagination';
import styles from '../CardsContainer/Cards.module.scss';
import FilterOrder from '../FilterOrder/FilterOrder';
import FilterOrder2 from '../FilterOrder2/FilterOrder2';

const CardsContainer = () => {
    const dispatch = useDispatch()
    const dogFiltered = useSelector((state) => state.dogsFiltered)
    const showFiltersMobile = useSelector((state) => state.showFiltersMobile)

    /* Estados para la paginacion */
    const [cardsPerPage, setCardsPerPage] = useState(12)
    const [currentPage, setCurrentPage] = useState(1)

    const lastIndex = currentPage * cardsPerPage; 
    const firstIndex = lastIndex - cardsPerPage; 

    useEffect(() => {
        dispatch(getAllDogs())
    },[showFiltersMobile]);
  return (
    <>
    <div className={`container-fluid`}>
    <div className={`row ${styles.parent}`}>
        <div className={`col-2 ${styles.filterContainer}`}>
          <FilterOrder2/>
        </div> 
      <div className={`col-10 ${styles.cardsContainer} ${showFiltersMobile ? styles.opaque : ''}`}>
          {dogFiltered?.map((dog) => ( 
             <Card2
             key={dog.id} 
             id={dog.id}
             image={dog.image}
             name={dog.name} 
             temperament={dog.temperament} 
             weight={dog.weight} />
          )).slice(firstIndex, lastIndex)}
      </div>
    </div>
      <div>
        <Pagination 
        cardsPerPage={cardsPerPage} 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
      </>
  );
};

export default CardsContainer;


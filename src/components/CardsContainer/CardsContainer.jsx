import React, { useState, useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDogs } from '../../redux/actions';
import Pagination from '../Pagination/Pagination';
import styles from '../CardsContainer/Cards.module.scss';
import FilterOrder2 from '../FilterOrder2/FilterOrder2';

const Card2 = React.lazy(() => import('../Card/Card2'));

const CardsContainer = () => {
    const dispatch = useDispatch();
    const dogFiltered = useSelector((state) => state.dogsFiltered);
    const showFiltersMobile = useSelector((state) => state.showFiltersMobile);

    const [cardsPerPage, setCardsPerPage] = useState(12);
    const [currentPage, setCurrentPage] = useState(1);

    const lastIndex = currentPage * cardsPerPage;
    const firstIndex = lastIndex - cardsPerPage;

    useEffect(() => {
        dispatch(getAllDogs());
    }, [showFiltersMobile]);

    return (
        <div className="container-fluid">
            <div className={`row ${styles.parent}`}>
                <div className={`col-2 ${styles.filterContainer}`}>
                    <FilterOrder2 />
                </div>
                <Suspense fallback={<div style={{ color: 'black', textAlign: 'center' }}>Loading...</div>}>
                    <div className={`col-10 ${styles.cardsContainer} ${showFiltersMobile ? styles.opaque : ''}`}>
                        {dogFiltered?.slice(firstIndex, lastIndex).map((dog) => (
                            <Card2
                                key={dog.id}
                                id={dog.id}
                                image={dog.image}
                                name={dog.name}
                                temperament={dog.temperament}
                                weight={dog.weight}
                            />
                        ))}
                    </div>
                </Suspense>
            </div>
            <div>
                <Pagination 
                    cardsPerPage={cardsPerPage} 
                    currentPage={currentPage} 
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </div>
    );
};

export default CardsContainer;

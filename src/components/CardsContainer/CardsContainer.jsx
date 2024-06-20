import React, { useState, useEffect, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDogs } from "../../redux/actions";
import Pagination from "../Pagination/Pagination";
import styles from "../CardsContainer/Cards.module.scss";

const Card2 = React.lazy(() => import("../Card/Card2"));

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
      <div
        className={`${styles.cardsContainer} ${showFiltersMobile ? styles.opaque : ""}`} >
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

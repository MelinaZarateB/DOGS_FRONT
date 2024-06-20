import { useSelector } from "react-redux";
import style from "./Home.module.scss";
import React, { useEffect, Suspense } from "react";

const FilterOrder2 = React.lazy(() => import("../FilterOrder2/FilterOrder2"));
const CardsContainer = React.lazy(() => import("../CardsContainer/CardsContainer"));

const Home = () => {
  const showFiltersMobile = useSelector((state) => state.showFiltersMobile);

  useEffect(() => {
  }, [showFiltersMobile]);

  return (
    <section className={`${style.sectionContainer}`}>
      <div>
        <FilterOrder2 />
      </div>
      <div
        className={`${style.cardsContainer}`}>
        <CardsContainer />
      </div>
      <div className={`${showFiltersMobile ? style.opaque : "" }`}>
      </div>
    </section>
  );
};

export default Home;

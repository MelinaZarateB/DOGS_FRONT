import { useSelector } from "react-redux";
import style from "./Home.module.scss";
import React, { useEffect, Suspense } from "react";
import MyLoader from "../Loader/Loader";
import Home1 from "../Home1/Home1";
import { getAllDogs } from "../../redux/actions";
import { useDispatch } from "react-redux";

const FilterOrder2 = React.lazy(() => import("../FilterOrder2/FilterOrder2"));
const CardsContainer = React.lazy(() => import("../CardsContainer/CardsContainer"));

const Home = () => {
  const showFiltersMobile = useSelector((state) => state.showFiltersMobile);
  const dispatch = useDispatch()

  return (
    <>
    <section className={style.containerParent}>
      <section>
    <Home1></Home1>
      </section>
    <section className={`${style.sectionContainer}`}>
      <Suspense fallback={null}> {/* Le pasas cualquier cosa renderizable */}
      <div>
        <FilterOrder2 />
      </div>
      </Suspense>
      <Suspense fallback={<div className={style.loaderContainer}> <MyLoader /> </div>}> {/* Aca le estas pasando un elemento */}
      <div
        className={`${style.cardsContainer}`}>
        <CardsContainer />
      </div>
      </Suspense>
      <div className={`${showFiltersMobile ? style.opaque : "" }`}>
      </div>
    </section>
    </section>
    </>
  );
};

export default Home;

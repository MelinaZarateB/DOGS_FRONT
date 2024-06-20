import CardsContainer from "../CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import FilterOrder2 from "../FilterOrder2/FilterOrder2";
import style from "./Home.module.scss";

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

import {
  selectDogsByTemperaments,
  getAllDogs,
  orderByName,
  orderByOrigin,
  orderByWeight,
} from "./../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./FilterOrder.module.css";

const FilterOrder = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.temperaments);

  /* Handlers para filtros y ordenamiento */
  const handlerFilterTemperament = (event) => {
    event.preventDefault();
    dispatch(selectDogsByTemperaments(event.target.value));
  };
  /* Handler para ordenar por nombre*/
  const handlerOrderByName = (event) => {
    event.preventDefault();
    dispatch(orderByName(event.target.value));
  };
  const handleOrderByOrigin = (event) => {
    event.preventDefault();
    dispatch(orderByOrigin(event.target.value));
  };
  const handleOrderByWeight = (event) => {
    event.preventDefault();
    dispatch(orderByWeight(event.target.value));
  };

  return (
    <>
          <div className={styles.containerOptions}>
            <br />
            <p className={styles.title}>Filtering options:</p>
            <br />
            <div className={styles.containerSelects}>
            <select
              className={`form-select aria-label="Default select example ${styles.select}`}
              onChange={handlerFilterTemperament}
            >
              <option disabled>Temperaments</option>
              <option value="all" className={styles.option}>
              All temperaments
              </option>
              {temperaments?.map((temp, index) => (
                <option key={index} value={temp} className={styles.option}>
                  {temp}
                </option>
              ))}
            </select>
            <select className={`form-select aria-label="Default select example ${styles.select}`} onChange={handlerOrderByName}>
              <option>Sort by name</option>
              <option value="A-Z" className={styles.option}>
                A-Z
              </option>
              <option value="Z-A" className={styles.option}>
                Z-A
              </option>
            </select>
            <select className={`form-select aria-label="Default select example ${styles.select}`} onChange={handleOrderByOrigin}>
              <option>Sort by origin</option>
              <option value="all" className={styles.option}>
                All
              </option>
              <option value="API" className={styles.option}>
                API
              </option>
              <option value="DB" className={styles.option}>
                Data Base
              </option>
            </select>
            <select className={`form-select aria-label="Default select example ${styles.select}`} onChange={handleOrderByWeight}>
              <option>Sort by weight</option>
              <option value="min_weight" className={styles.option}>
              Minimum weight
              </option>
              <option value="max_weight" className={styles.option}>
              Maximum weight
              </option>
            </select>
            </div>
          </div>
    </>
  );
};
export default FilterOrder;

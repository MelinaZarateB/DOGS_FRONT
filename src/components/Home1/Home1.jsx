import styles from "./Home1.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectDogsByTemperaments } from "../../redux/actions";


const Home1 = () => {
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.temperaments);

  const handlerFilterTemperament = (event) => {
    event.preventDefault();
    dispatch(selectDogsByTemperaments(event.target.value));
  };
  return (
    <section className={styles.section1}>
      <section className={styles.container1}>
        <div>
          <h1>Learn more about 
            <br />
            your dog!</h1>
        </div>
        <div>
        <p className={styles.p}>Select by temperament</p>
        <select
              className={`form-select aria-label="Default select example ${styles.select}`}
              onChange={handlerFilterTemperament}
            >
              <option disabled>Temperaments</option>
              <option value="all" className={styles.option}>
              -- All temperaments --
              </option>
              {temperaments?.map((temp, index) => (
                <option key={index} value={temp} className={styles.option}>
                  {temp}
                </option>
              ))}
            </select>
        </div>
      </section>
    </section>
  );
};
export default Home1;

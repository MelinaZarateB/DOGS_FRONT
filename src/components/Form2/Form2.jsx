import styles from "./Form2.module.css";
import validations from "../utils/validations";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTemperaments, postDog } from "./../../redux/actions";
import { useEffect, Suspense } from "react";

const Form2 = () => {
  const temperaments = useSelector((state) => state.temperaments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTemperaments());
  }, []);

  const [createDog, setCreateDog] = useState({
    image: "",
    name: "",
    min_height: "",
    max_height: "",
    min_weight: "",
    max_weight: "",
    temperament: [],
    life_span: "",
  });
  console.log(createDog.name);
  const [touchedInput, setTouchedInput] = useState({});

  const handleTouched = (inputName) => {
    setTouchedInput({
      ...touchedInput,
      [inputName]: true,
    });
  };
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setCreateDog({
      ...createDog,
      [event.target.name]: event.target.value,
    });
    if (event.target.name === "temperament") {
      if (createDog.temperament.includes(event.target.value)) return;
      else {
        setCreateDog({
          ...createDog,
          temperament: [...createDog.temperament, event.target.value],
        });
      }
    }
    setErrors(
      validations({
        ...createDog,
        [event.target.name]: event.target.value,
      })
    );
  };
  const handleDeleteTemperament = (event) => {
    const temp = event.target.id;
    const temperamentDelete = createDog.temperament.filter(
      (temperament) => temperament !== temp
    );
    setCreateDog({
      ...createDog,
      temperament: temperamentDelete,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postDog(createDog));
  };

  return (
    <>
      <div className={styles.containerForm}>
        <form className={`container row g-3 justify-content-center ${styles.form}`}>
          <div className="d-flex justify-content-center">
            <h2 style={{fontFamily:'Poppins', marginBottom: '15px'}}>Complete the fields and create a new race!</h2>
          </div>
          <div className="col-md-4">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <div className={styles.containerInput}>
              <input
                type="text"
                className={`form-control ${
                  errors.name ? styles.inputInvalid : ""
                }`}
                value={createDog.name}
                id="validationServer01"
                name="name"
                onChange={handleChange}
                onBlur={() => handleTouched("name")}
                autoComplete="off"
                required
              />
              {errors.name && (
              <span className={styles.span}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-exclamation-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
                </svg>
              </span>
              )}
            </div>
            {errors.name && (
              <div className={styles.messageError}>{errors.name}</div>
            )}
          </div>
          <div className="col-md-3">
            <label className="form-label">Minimum height in cm:</label>
            <div className={styles.containerInput}>
            <input
              type="text"
              className={`form-control ${
                errors.min_height && touchedInput.min_height
                  ? styles.inputInvalid
                  : ""
              }`}
              id="validationServer02"
              name="min_height"
              value={createDog.min_height}
              onChange={handleChange}
              onBlur={() => handleTouched("min_height")}
              autoComplete="off"
              required
            />
             {errors.min_height && touchedInput.min_height && (
              <span className={styles.span}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-exclamation-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
                </svg>
              </span>
              )}
            </div>
            {touchedInput.min_height && errors.min_height && (
              <div className={styles.messageError}>{errors.min_height}</div>
            )}
            {errors.especial && (
              <div className={styles.messageError}>{errors.especial}</div>
            )}
          </div>
          <div className="col-md-3">
            <label className="form-label">Maximum height in cm:</label>
            <div className={styles.containerInput}>
            <input
              type="text"
              className={`form-control ${
                errors.max_height && touchedInput.max_height
                  ? styles.inputInvalid
                  : ""
              }`}
              id="validationServer02"
              name="max_height"
              value={createDog.max_height}
              onChange={handleChange}
              onBlur={() => handleTouched("max_height")}
              autoComplete="off"
              required
            />
            {errors.max_height && touchedInput.max_height && (
              <span className={styles.span}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-exclamation-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
                </svg>
              </span>
              )}
            </div>
            {touchedInput.max_height && errors.max_height && (
              <div className={styles.messageError}>{errors.max_height}</div>
            )}
            {errors.especial && (
              <div className={styles.messageError}>{errors.especial}</div>
            )}
          </div>
          <div className="col-md-3">
            <label for="validationServerUsername" className="form-label">
            Minimum weight in kg:
            </label>
            <div className={styles.containerInput}>
            <input
              type="text"
              className={`form-control ${
                errors.min_weight && touchedInput.min_weight
                  ? styles.inputInvalid
                  : ""
              }`}
              id="validationServerUsername"
              name="min_weight"
              value={createDog.min_weight}
              onChange={handleChange}
              onBlur={() => handleTouched("min_weight")}
              autoComplete="off"
              required
            />
             {errors.min_weight && touchedInput.min_weight && (
              <span className={styles.span}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-exclamation-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
                </svg>
              </span>
              )}
            </div>
            {touchedInput.min_weight && errors.min_weight && (
              <div className={styles.messageError}>{errors.min_weight}</div>
            )}
            {errors.especial2 && (
              <div className={styles.messageError}>{errors.especial2}</div>
            )}
          </div>
          <div className="col-md-3">
            <label for="validationServer03" className="form-label">
            Maximum weight in cm:
            </label>
            <div className={styles.containerInput}>
            <input
              className={`form-control ${
                errors.max_weight && touchedInput.max_height
                  ? styles.inputInvalid
                  : ""
              }`}
              id="validationServer03"
              aria-describedby="validationServer03Feedback"
              name="max_weight"
              value={createDog.max_weight}
              onChange={handleChange}
              onBlur={() => handleTouched("max_weight")}
              autoComplete="off"
              required
            />
             {errors.max_weight && touchedInput.max_weight && (
              <span className={styles.span}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-exclamation-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
                </svg>
              </span>
              )}
            </div>
            {touchedInput.max_weight && errors.max_height && (
              <div className={styles.messageError}>{errors.max_weight}</div>
            )}
          </div>
          <div className="col-md-3">
            <label for="validationServer03" className="form-label">
            Years of life:
            </label>
            <div className={styles.containerInput}> 
            <input
              className={`form-control ${
                errors.life_span && touchedInput.life_span
                  ? styles.inputInvalid
                  : ""
              }`}
              id="validationServer03"
              aria-describedby="validationServer03Feedback"
              name="life_span"
              value={createDog.life_span}
              onChange={handleChange}
              onBlur={() => handleTouched("life_span")}
              utoComplete="off"
              required
            />
             {errors.life_span && touchedInput.life_span && (
              <span className={styles.span}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-exclamation-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
                </svg>
              </span>
              )}
            </div>
            {touchedInput.life_span && (
              <div className={styles.messageError}>{errors.life_span}</div>
            )}
          </div>
          <div className="col-md-4">
            <label for="validationServer04" className="form-label">
              Temperaments
            </label>
            <select
              className={`form-select`}
              id="validationServer04"
              aria-describedby="validationServer04Feedback"
              onChange={handleChange}
              name="temperament"
              required
            >
              <option selected disabled value="">
              Select..
              </option>
              {temperaments?.map((tempetament, index) => (
                <option key={index} value={tempetament}>
                  {tempetament}
                </option>
              ))}
            </select>
            <div className={styles.options}>
              {createDog.temperament?.map((temperament) => (
                <div key={temperament}>
                  <span className={styles.spanTemperament}>{temperament}</span>
                  <button
                    className={styles.buttonOptions}
                    id={temperament}
                    onClick={handleDeleteTemperament}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-3">
            <label for="validationServer05" className="form-label">
              Image
            </label>
            <input
              type="file"
              className="form-control"
              id="validationServer05"
              aria-describedby="validationServer05Feedback"
              name="image"
              value={createDog.image}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-12 d-flex justify-content-center">
            <button
              className="btn btn-success"
              type="submit"
              onClick={handleSubmit}
              disabled={
                errors.name ||
                errors.min_height ||
                errors.max_height ||
                errors.min_weight ||
                errors.max_weight ||
                errors.life_span ||
                errors.especial ||
                errors.especial2 ||
                createDog.temperament.length === 0
              }
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Form2;

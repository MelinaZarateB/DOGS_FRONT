import style from "./SearchBar2.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterByName } from "./../../redux/actions";

const SearchBar2 = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setName(event.target.value);
  };
  const handleSubmit = () => {
    dispatch(filterByName(name));
    setName("");
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <>
      <div className={`d-flex ${style.formContainer}`} >
        <input
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={name}
          className="form-control me-2"
          type="search"
          placeholder='Search..' 
          aria-label="Search"
        />
        <button
          className={`btn btn-outline-success ${style.button}`}
          type="submit"
          onClick={() => handleSubmit()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </button>
      </div>
    </>
  );
};
export default SearchBar2;

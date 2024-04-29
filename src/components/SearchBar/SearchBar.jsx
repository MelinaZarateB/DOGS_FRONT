import { useState } from 'react';
import styles from '../SearchBar/SearchBar.module.scss';
import { useDispatch } from "react-redux";
import { filterByName } from '../../redux/actions';

const SearchBar = () => {
  
    const [name, setName] = useState("");
    const dispatch = useDispatch()

    const handleChange = (event) => {
         event.preventDefault()
        console.log(event.target.value)
        setName(event.target.value);
    }
    const handleSubmit = () => {
        dispatch(filterByName(name))
        setName("")
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
      };

    return (
        <div className={styles.searchBar}>
            <input 
            onChange={handleChange}
            type="search" 
            placeholder='Ingrese un nombre...' 
            value={name}
            onKeyDown={handleKeyDown}
            />
            <button onClick={() => handleSubmit()} className={styles.searchButton}>🔍</button>
        </div>
    )
}
export default SearchBar;

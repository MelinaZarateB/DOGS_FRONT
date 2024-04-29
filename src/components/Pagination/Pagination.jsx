import styles from '../Pagination/Pagination.module.scss'
import { useSelector } from "react-redux";
import { useEffect } from 'react';

const Pagination = ({ 
    cardsPerPage, 
    currentPage, 
    setCurrentPage, 
    }) => {

    const dogFiltered = useSelector((state) => state.dogsFiltered)
    let totalDogs = dogFiltered.length

    useEffect(() => {
        setCurrentPage(1)

    }, [dogFiltered])

    const pageNumbers = []; 

    for(let i = 1; i <= Math.ceil(totalDogs/cardsPerPage); i ++) {
        pageNumbers.push(i)
    };
   
    const onPreviusPage = () => {
        if(currentPage > 1) {
            setCurrentPage(currentPage - 1)
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    };
    const onNextPage = () => {
        if(currentPage < 22){
            setCurrentPage(currentPage + 1);
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    };
    const specificPage = (numPage) => {
        setCurrentPage(numPage)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  
    return(
        <div className={styles.pagination}>
            <div className={styles.pages}>
            <ul>  
                {pageNumbers.map((page) => (
                 <li className={styles.li} key={page} >
                     <a onClick={() => specificPage(page)}
                     className={`${styles.a} ${page === currentPage ? styles.isCurrent : ''}`} 
                     >
                     {page}
                   </a>
                 </li>
                ))}
            </ul>
            </div>
            <div className={styles.buttonsContainer}>
            <button 
            className={styles.button} 
            onClick={onPreviusPage}
            disabled={currentPage === 1}>
                Previus
                </button>
            <button 
            className={styles.button} 
            onClick={onNextPage}
            disabled={currentPage === 22}>
                Next
                </button>
            </div>
        </div>
    )
}
export default Pagination;
import CardsContainer from "../CardsContainer/CardsContainer";
import { useDispatch } from 'react-redux';
import { getTemperaments } from '../../redux/actions';
import { useEffect } from "react";
import { useSelector } from "react-redux";
import style from './Home.module.scss'
 const Home = () => {
    const dispatch = useDispatch();
    const showFiltersMobile = useSelector((state) => state.showFiltersMobile)


    useEffect(() => {
        dispatch(getTemperaments())
        
    },[showFiltersMobile])

    return(
        
        <div className={`${style.cardsContainer} ${showFiltersMobile ? style.opaque : ''}`}> 
            <CardsContainer />
        </div>
    )
 }

 export default Home;
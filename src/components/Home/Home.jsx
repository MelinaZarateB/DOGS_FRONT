import CardsContainer from "../CardsContainer/CardsContainer";
import { useDispatch } from 'react-redux';
import { getTemperaments } from '../../redux/actions';
import { useEffect } from "react";

 const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTemperaments())
        
    },[])

    return(
        <div> 
            <CardsContainer />
        </div>
    )
 }

 export default Home;
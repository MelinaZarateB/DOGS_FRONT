import { 
    GET_ALL_DOGS, 
    FILTER_BY_NAME,  
    CLEAN_FILTER_DOG,
    GET_DOGS_BY_ID, 
    CLEAN_DOGS_BY_ID,
    GET_TEMPERAMENTS,
    SELECT_DOGS_BY_TEMPERAMENTS,
    ORDER_BY_NAME,
    ORDER_BY_ORIGIN,
    ORDER_BY_WEIGHT,
    POST_DOG,
    SHOW_FILTERS_MOBILE
} from "./action-types";
import axios from "axios";
import Swal from 'sweetalert2'

export const showFiltersMobile = (boolean) => {
    return({
        type: SHOW_FILTERS_MOBILE,
        payload: boolean
    })

}
export const getAllDogs = () => {
    return async (dispatch) => {
        try{
             //const { data } = await axios.get('http://localhost:3001/dogs/');
             const { data } = await axios.get('https://dogs-back-pm16.onrender.com/dogs/');
            return dispatch({
                type: GET_ALL_DOGS,
                payload: data
            });
        } catch(err) {
            Swal.fire({
                icon: 'error',
                title: 'Error al cargar las razas',
                text: err,
            })
        };
    };
};
export const filterByName = (name) => {
    console.log(name)
    return async (dispatch) => {
        try{
              //const { data } = await axios.get(`http://localhost:3001/dogs/name?name=${name}`)
              const { data } = await axios.get(`https://dogs-back-pm16.onrender.com/dogs/name?name=${name}`)
            console.log(data)
            return dispatch({
                type: FILTER_BY_NAME,
                payload: data
            })
        }catch(err) {
            alert(err.response.data)
        };
    };
};

export const cleanFilterDogByName = () => {
    return {
        type: CLEAN_FILTER_DOG,
        payload: []
    }
}

export const getDogsById = (id) => {
    return async (dispatch) => {
        try{
             //const { data } = await axios.get(`http://localhost:3001/dogs/${id}`)
             const { data } = await axios.get(`https://dogs-back-pm16.onrender.com/dogs/${id}`)
            console.log(data)
            return dispatch({
                type: GET_DOGS_BY_ID,
                payload: data
            });
        }catch(err) {
            alert(err.response.data)
        };
    };
};

export const cleanDogsById = (cleanDog) => {
    return {
        type: CLEAN_DOGS_BY_ID,
        payload: cleanDog
    };
};

export const getTemperaments = () => {
    return async (dispatch) => {
        try{
            //const { data } = await axios.get('http://localhost:3001/temperaments') 
            const { data } = await axios.get('https://dogs-back-pm16.onrender.com/temperaments') 
            const temperaments= await data.map((temperament) => temperament.name)
            return dispatch ({
                type: GET_TEMPERAMENTS,
                payload: temperaments
            })
        }catch(err){
            console.log(err)
        }
    }
}

export const selectDogsByTemperaments = (temperament) => {
    return{
        type: SELECT_DOGS_BY_TEMPERAMENTS,
        payload: temperament
    }
}

export const orderByName = (order) => {
    return {
        type: ORDER_BY_NAME,
        payload: order
    }
}

export const orderByOrigin = (origin) => {
    return {
        type: ORDER_BY_ORIGIN,
        payload: origin
    }
}
export const orderByWeight = (order) => {
    return {
        type: ORDER_BY_WEIGHT,
        payload: order
    }
}

export const postDog = (createDog) => {
    // const endpoint= 'http://localhost:3001/dogs';
    const endpoint= 'https://dogs-back-pm16.onrender.com/dogs';
    console.log(createDog.temperament)
    return async (dispatch) => {
        try{
         const dogCreated = await axios.post(endpoint,createDog)
         Swal.fire({
            icon: 'success',
            title: dogCreated.data.success,
            showConfirmButton: false,
            timer: 2000
         })
        return dispatch({
            type: POST_DOG,
            payload: createDog
        })
        }catch(err){
            Swal.fire({
                icon: 'error',
                title: err.response.data,
                text: 'Retry!'
            })
        }
    }
}



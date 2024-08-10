import {
  GET_ALL_DOGS,
  FILTER_BY_NAME,
  GET_DOGS_BY_ID,
  CLEAN_DOGS_BY_ID,
  GET_TEMPERAMENTS,
  SELECT_DOGS_BY_TEMPERAMENTS,
  ORDER_BY_NAME,
  ORDER_BY_ORIGIN,
  ORDER_BY_WEIGHT,
  POST_DOG,
  SHOW_FILTERS_MOBILE,
} from "./action-types";

let initialState = {
  dogs: [],
  showFiltered: false,
  dogDetailById: {},
  dogDetailExists: false,
  temperaments: [],
  dogsFiltered: [],
  temperamentFilter: "",
  showFiltersMobile: false,
};
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RELOAD_ALL_DOGS':
        return{
            ...state,
            dogsFiltered: state.dogs
        }
    case SHOW_FILTERS_MOBILE:
      return {
        ...state,
        showFiltersMobile: action.payload,
      };
    case GET_ALL_DOGS:
      return {
        ...state,
        dogs: action.payload,
        dogsFiltered: action.payload,
      };
    case FILTER_BY_NAME:
      return {
        ...state,
        dogsFiltered: [action.payload],
      };
    case GET_DOGS_BY_ID:
      return {
        ...state,
        dogDetailById: action.payload,
        dogDetailExists: true,
      };
    case CLEAN_DOGS_BY_ID:
      return {
        ...state,
        dogDetailById: {},
        dogDetailExists: false,
      };
    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
      };
    case SELECT_DOGS_BY_TEMPERAMENTS:
      if (action.payload === "all") {
        return {
          ...state,
          dogsFiltered: [...state.dogs],
        };
      }
      let copyAllDogs = [...state.dogs];
      let selectDogsByTemperaments = copyAllDogs.filter((dog) => {
        if (dog.temperament) {
          const dogTemperaments = dog.temperament.split(", ");
          return dogTemperaments.includes(action.payload);
        }
        return false;
      });
      return {
        ...state,
        dogsFiltered: selectDogsByTemperaments,
        temperamentFilter: action.payload,
      };
    case ORDER_BY_NAME:
      let copyAllDogs2 = [...state.dogsFiltered];
      if (action.payload === "A-Z") {
        let AZ = copyAllDogs2.sort((a, b) => {
          const name1 = a.name.toLowerCase();
          const name2 = b.name.toLowerCase();
          if (name1 < name2) {
            return -1;
          }
          if (name1 > name2) {
            return 1;
          }
          return 0;
        });
        return {
          ...state,
          dogsFiltered: AZ,
        };
      }
      if (action.payload === "Z-A") {
        let ZA = copyAllDogs2.sort((a, b) => {
          const name1 = a.name.toLowerCase();
          const name2 = b.name.toLowerCase();
          if (name1 > name2) {
            return -1;
          }
          if (name1 < name2) {
            return 1;
          }
          return 0;
        });
        return {
          ...state,
          dogsFiltered: ZA,
        };
      }
    case ORDER_BY_ORIGIN:
      let copyAllDogs3 = [...state.dogsFiltered];
      let dogsFilter;
      if (action.payload === "DB") {
        dogsFilter = copyAllDogs3.filter((dog) => dog.createInDb);
      }
      if (action.payload === "API") {
        dogsFilter = copyAllDogs3.filter((dog) => !dog.createInDb);
      }
      if (action.payload === "all") {
        if (state.temperamentFilter !== "") {
          dogsFilter = [...state.dogs].filter((dog) => {
            if (dog.temperament) {
              const dogTemperaments = dog.temperament.split(", ");
              return dogTemperaments.includes(state.temperamentFilter);
            }
            return false;
          });
        }
      }
      return {
        ...state,
        dogsFiltered: dogsFilter,
      };
    case ORDER_BY_WEIGHT:
      let copyAllDogs4 = [...state.dogsFiltered];
      if (action.payload === "min_weight") {
        const dogsFilter = copyAllDogs4.sort((a, b) => {
          return (
            parseInt(a.weight.split(" - ")[0]) -
            parseInt(b.weight.split(" - ")[0])
          );
        });
        return {
          ...state,
          dogsFiltered: dogsFilter,
        };
      }
      if (action.payload === "max_weight") {
        const dogsFilter = copyAllDogs4.sort((a, b) => {
          return (
            parseInt(b.weight.split(" - ")[1]) -
            parseInt(a.weight.split(" - ")[1])
          );
        });
        return {
          ...state,
          dogsFiltered: dogsFilter,
        };
      }
    case POST_DOG:
      return {
        ...state,
        dogsFiltered: [...state.dogsFiltered, action.payload],
      };

    default:
      return state;
  }
};
export default Reducer;

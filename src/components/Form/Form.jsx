import validations from '../utils/validations';
import { useState } from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import styles from '../Form/Form.module.scss';
import { getTemperaments, postDog } from '../../redux/actions';
import { useEffect } from 'react';

const Form = () => {
    const temperaments = useSelector((state) => state.temperaments)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTemperaments())
    }, [])

    const [ createDog, setCreateDog ] = useState({
        image: "",
        name: "",
        min_height: "",
        max_height: "",
        min_weight: "",
        max_weight: "",
        temperament: [],
        life_span: ""
    })
    const [touchedInput, setTouchedInput] = useState({});

    const handleTouched = (inputName) => {
        setTouchedInput({
        ...touchedInput,
        [inputName]: true,
      })
    }
    const [ errors, setErrors ] = useState({})

    const handleChange = (event) => {
        setCreateDog({
            ...createDog,
            [event.target.name] : event.target.value
        })
        if(event.target.name === 'temperament') {
            if(createDog.temperament.includes(event.target.value)) return 
            else{
                setCreateDog({
                    ...createDog,
                    temperament: [...createDog.temperament, event.target.value]
                })
            }
        }
        setErrors(validations({
            ...createDog,
            [event.target.name] : event.target.value}))
    }
    const handleDeleteTemperament = (event) => {
        const temp = event.target.id
        const temperamentDelete = createDog.temperament.filter((temperament) => temperament !== temp)
        setCreateDog({
            ...createDog,
            temperament: temperamentDelete
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(postDog(createDog))
    }

    return(
        <div className={styles.containerForm}>
            <div className={styles.form}>
            <form action="">
                <div className={styles.divInputs}>
                <h2>¡Completa los campos y crea una nueva raza!</h2>
                
                <label htmlFor="image">Image:</label>
                <input type="file" name="image" value={createDog.image} className={styles.option} onChange={handleChange}  />
                
                <label htmlFor="name"> Nombre: </label>
                <input className={styles.option} type="text" name='name' value={createDog.name} onChange={handleChange} onBlur={() => handleTouched('name')} autoComplete='off' />
                {errors.name && <p style={{color: 'red'}}>{errors.name}</p>}
                
                <label htmlFor="min_height">Altura minima en cm: </label>
                <input className={styles.option} type="text" name='min_height' value={createDog.min_height} onChange={handleChange} onBlur={() => handleTouched('min_height')}  autoComplete='off'/>
                {touchedInput.min_height && errors.min_height && <p style={{color: 'red'}}>{errors.min_height}</p>}
                {errors.especial && <p style={{color: 'red'}}>{errors.especial}</p>}
                
                <label htmlFor="max_height">Altura maxima en cm: </label>
                <input className={styles.option} type="text" name='max_height'value={createDog.max_height} onChange={handleChange} onBlur={() => handleTouched('max_height')} autoComplete='off' />
                {touchedInput.max_height && errors.max_height && <p style={{color: 'red'}}>{errors.max_height}</p>}
                
                
                <label htmlFor="min_weight">Peso minimo en kg: </label>
                <input className={styles.option} type="text" name="min_weight" value={createDog.min_weight} onChange={handleChange} onBlur={() => handleTouched('min_weight')} autoComplete='off' />
                {touchedInput.min_weight && errors.min_weight && <p style={{color: 'red'}}>{errors.min_weight}</p>}
                {errors.especial2 && <p style={{color: 'red'}}>{errors.especial2}</p>}
                
                <label htmlFor="max_weight">Peso maximo en kg: </label>
                <input className={styles.option} type="text" name="max_weight"value={createDog.max_weight} onChange={handleChange} onBlur={() => handleTouched('max_weight')} autoComplete='off'  />
                {touchedInput.max_weight && errors.max_height && <p style={{color: 'red'}}>{errors.max_weight}</p>}
               
                
                <label htmlFor="life_span">Años de vida: </label>
                <input className={styles.option} type="text" name="life_span" value={createDog.life_span} onChange={handleChange} onBlur={() => handleTouched('life_span')} autoComplete='off' />
                {touchedInput.life_span && <p style={{color: 'red'}}>{errors.life_span}</p>}
                </div>
                </form>
            <div className={styles.selectTemperaments}>
                <label htmlFor="temperament">Selecciona los temperamentos: </label>
                <select onChange={handleChange} name="temperament" className={styles.option}>
                    {temperaments?.map((tempetament,index) => (
                    <option key={index} value={tempetament} >
                        {tempetament}
                        </option>
                        ))}
                        </select>
                        <div className={styles.options}>
                            {createDog.temperament?.map((temperament) => (
                                <div key={temperament}> 
                                <span className={styles.spanTemperament}>{temperament}</span> 
                                <button className={styles.buttonOptions} id={temperament} onClick={handleDeleteTemperament}>
                                    X
                                </button>
                                </div>
                                ))
                                
                            }
                        </div>
            </div>
                <button className={styles.buttonSubmit} type="submit" onClick={handleSubmit} 
                disabled={errors.name || errors.min_height || errors.max_height || errors.min_weight || errors.max_weight || errors.life_span || errors.especial || errors.especial2 || createDog.temperament.length === 0}
                >Crear
                </button>
            </div>
        </div>
    )
}
export default Form;

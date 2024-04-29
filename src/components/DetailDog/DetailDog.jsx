import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDogsById } from '../../redux/actions'
import styles from '../DetailDog/DetailDog.module.scss';
import { cleanDogsById } from '../../redux/actions';

const DetailDog = () => {
    const { id } = useParams()
    const dogDetailById = useSelector((state) => state.dogDetailById);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDogsById(id))
        return () => {
            dispatch(cleanDogsById(false));
        }
    },[id])

    return (
        <div className={styles.detailContainer}>
            {dogDetailById.name && (
                <>
            <div className={styles.detail}>
            <h2>ID: {dogDetailById.id} </h2>
            <div className={styles.divImage}>
            <img src={dogDetailById.image.url} alt={dogDetailById.name}/>
            </div>
            <h1>Nombre: {dogDetailById.name}</h1>
            <h2>Altura: {dogDetailById.height.metric} cm</h2>
            <h2>Peso: {dogDetailById.weight.metric} kg</h2>
            <h2>Temperamentos: {dogDetailById.temperament}</h2>
            <h2>Años de vida: {dogDetailById.life_span} </h2>
            </div>
                </>
            )}
        </div>
    )

}
export default DetailDog;
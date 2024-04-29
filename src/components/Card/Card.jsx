import styles from './Card.module.scss';
import { Link } from 'react-router-dom';

const Card = ({ 
    id, 
    image, 
    name, 
    temperament, 
    weight }) => {
    
    return (
        <div className={styles.cardContainer}>
                <div key={id} className={styles.card}>
                    <Link to={`/detail/${id}`} className={styles.linkDetail}>
                    <div className={styles.cardImage}>
                    <img src={image} alt={name} className={styles.img}/>
                    </div>
                    <h1>{name}</h1>
                    <h2>Temperamentos: {temperament}</h2>
                     <h2>Peso: {weight} kg</h2>
                    </Link>
                </div>
                
        </div>
    );
};

export default Card;
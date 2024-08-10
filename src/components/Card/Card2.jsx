import style from "./Card2.module.css";
import { Link } from "react-router-dom";

const Card2 = ({ id, image, name, temperament, weight }) => {
  return (
    <>
      <div className={`card ${style.cardContainer}`} style={{ width: "18rem" }}>
        <img
          src={image}
          className={`card-img-top ${style.imgDog} `}
          alt="..."
        />
        <div className={`card-body ${style.card}`}>
            <div className={style.cardInfo}>
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Temperaments: {temperament}</p>
          <p>Weight: {weight} kg</p>
            </div>
          <div>
          <Link to={`/detail/${id}`} className={style.linkDetail}>
            <span className="btn btn-success" style={{backgroundColor: '#e1b175', borderColor: '#e1b175'}}>More info</span>
          </Link>
        </div>
          </div>
      </div>
    </>
  );
};
export default Card2;

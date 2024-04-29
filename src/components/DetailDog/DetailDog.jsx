import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogsById } from "../../redux/actions";
import style from "../DetailDog/DetailDog.module.scss";
import { cleanDogsById } from "../../redux/actions";
import { IoPaw } from "react-icons/io5";

const DetailDog = () => {
  const { id } = useParams();
  const dogDetailById = useSelector((state) => state.dogDetailById);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogsById(id));
    return () => {
      dispatch(cleanDogsById(false));
    };
  }, [id]);

  return (
    <>
    {dogDetailById.name && (
      <div className={`container-fluid ${style.container}`}>
    <div className={`container ${style.detailContainer}`}>
         <div className={`row ${style.row}`}>
        <div className={`col-md-6 col-12 ${style.containerImg}`}>
            <img src={dogDetailById.image.url} alt="Imagen de la raza" className={`img-fluid ${style.img} `}/>
        </div>
        <div className={`col-md-6 col-12 ${style.containerInfo}`}>
            <h1 className={style.titulo}>{dogDetailById.name}</h1>
            <br />
            <hr className={style.hr}/>
            <br />
            <div className="d-flex">
            <IoPaw className={style.huella}/>
            <h5 className={style.caracteristica}>Altura: {dogDetailById.height.metric} cm</h5>
            </div>
            <div className="d-flex">
            <IoPaw className={style.huella}/>
            <h5 className={style.caracteristica}>Peso: {dogDetailById.weight.metric} kg</h5>
            </div>
            <div>
            <div className="d-flex">
            <IoPaw className={style.huella}/>
            <h5>Temperamentos: </h5>
                </div>
            <div className={style.temperaments}>
              <ul>
             {dogDetailById.temperament.split(', ').map((temperament) => (
              <li>{temperament}</li>
             ))}
              </ul>
            </div>
            </div>
            <div className="d-flex">
            <IoPaw className={style.huella}/>
            <h5 className={style.caracteristica}>Años de vida: {dogDetailById.life_span}</h5>
            </div>
        </div>
    </div>
    </div>
      </div>
    )}
    </>
  );
};
export default DetailDog;
/*<div className={styles.detailContainer}>
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
</div>*/

/*<div className="card mb-3" style={{maxWidth: "540px"}}>
<div className="row g-0">
  <div class="col-md-4">
    <img src={dogDetailById.image.url} className="img-fluid rounded-start" alt="..." />
  </div>
  <div className="col-md-8">
    <div className="card-body">
      <h5 className="card-title">{dogDetailById.name}</h5>
      <p className="card-text">
        Altura: {dogDetailById.height.metric} cm
      </p>
      <p className="card-text">
      Peso: {dogDetailById.weight.metric} kg
      </p>
      <p className="card-text">
        Temperamentos: {dogDetailById.temperament}
      </p>
      <p>
      </p>
    </div>
  </div>
</div>
</div>*/
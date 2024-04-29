import style from "./FilterOrder2.module.css";
import React, { useState } from "react";
import FilterOrder from "../FilterOrder/FilterOrder";
import { showFiltersMobile } from "../../redux/actions";
import { useDispatch } from "react-redux";

const FilterOrder2 = () => {
  const [showFiltros, setShowFiltros] = useState(window.innerWidth >= 1026);
  const [barraLateral, setBarraLateral] = useState(false);
  const dispatch = useDispatch();

  const desplegarBarra = () => {
    setBarraLateral(!barraLateral);
    dispatch(showFiltersMobile(true));
  };
  const ocultarBarra = () => {
    setBarraLateral(!barraLateral);
    dispatch(showFiltersMobile(false));
  };

  // Escuchar cambios en el tamaño de la ventana
  window.addEventListener("resize", () => {
    setShowFiltros(window.innerWidth >= 1026);
    setBarraLateral(false);
    dispatch(showFiltersMobile(false));
  });

  return (
    <>
      <div>
        {window.innerWidth < 1026 && (
          <button
            onClick={desplegarBarra}
            className={`btn btn-primary ${style.button}`}
          >
            Filtros
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-funnel-fill"
              viewBox="0 0 16 16"
              style={{ marginLeft: "4px" }}
            >
              <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5z" />
            </svg>
          </button>
        )}
        {showFiltros && (
          <section className={style.sectionDesktop}>
            <div className={style.filters}>
              <div className={style.filters2}>
                <FilterOrder></FilterOrder>
              </div>
            </div>
          </section>
        )}
        <section
          className={`${style.sidebarTransition} ${
            barraLateral ? style.sidebarVisible : ""
          }`}
        >
          {barraLateral && (
            <>
              <button
                type="button"
                className={`btn-close ${style.buttonMobile}`}
                onClick={ocultarBarra}
                aria-label="Close"
              ></button>
              <div className={style.filtersMobile}>
                <FilterOrder></FilterOrder>
              </div>
            </>
          )}
        </section>
      </div>
    </>
  );
};

export default FilterOrder2;

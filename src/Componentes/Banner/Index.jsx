import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Asegúrate de importar Bootstrap JS
import styles from './index.module.css';

function Banner({ imagen, texto, texto2 }) {
    return (
        <div className={styles.banner}>
            <div className={styles['floating-text']}>{texto}</div>
            <div className={styles['parrafo-text']}>{texto2}</div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <a href="https://www.aluracursos.com/blog/css-object-fit-trabajando-con-proporciones" target="_blank" rel="Trabajando con proporciones">
                            <img
                                src={imagen[0]}
                                className={`d-block mx-auto ${styles.imgBanner}`}
                                alt="Imagen 1"
                            />
                        </a>
                    </div>
                    <div className="carousel-item">
                        <a href="https://www.aluracursos.com/blog/ux-ui-conoce-las-similitudes-y-diferencias-entre-ambos" target="_blank" rel="ux-ui-conoce-las-similitudes-y-diferencias-entre-ambos">
                            <img
                                src={imagen[1]}
                                className={`d-block mx-auto ${styles.imgBanner}`}
                                alt="Imagen 2"
                            />
                        </a>
                    </div>
                    <div className="carousel-item">
                        <a href="https://www.aluracursos.com/blog/aprendizaje-continuo" target="_blank" rel="aprendizaje-continuo">
                            <img
                                src={imagen[2]}
                                className={`d-block mx-auto ${styles.imgBanner}`}
                                alt="Imagen 3"
                            />
                        </a>
                    </div>
                </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Banner;

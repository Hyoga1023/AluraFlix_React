import React from 'react';
import Banner from '../Banner/Index.jsx';
import Categorias from '../Categorias';
import PruebaImagen from '../PruebaImagen/Index.jsx';

function Home() {
    return (
        <>
            <Banner
                imagen={[
                    'https://res.cloudinary.com/dy6cvetui/image/upload/v1736638377/Joven_estudiandoPNG_ippzpz.png',
                    'https://res.cloudinary.com/dy6cvetui/image/upload/v1736638377/DesarrolladoresPNG_pu5zo0.png',
                    'https://res.cloudinary.com/dy6cvetui/image/upload/v1736638377/Programador_MangaPNG_fksxns.png'
                ]}
                texto="FRONT END"
                texto2="El front-end es la conexión directa entre los usuarios y la tecnología, transformando procesos complejos en experiencias intuitivas y atractivas. Agrega valor al convertir ideas en interfaces funcionales y usables, mejorando la interacción con el usuario y asegurando que cada proyecto destaque con diseño y eficiencia."
            />
            <PruebaImagen/>
            <Categorias />
        </>
    );
}

export default Home;

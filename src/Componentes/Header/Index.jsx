import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logoMain.png'; // Importación correcta si está en src/Componentes/Header
import styles from './index.module.css'; // Importa los estilos

function Header() {
    return (
        <header className={styles.header}>
            <img className={styles.logo} src={logo} alt="Logo" />
            <nav>
                <Link className={styles.link} to="/">Home</Link>
                <Link className={styles.link} to="/nuevo-video">Nuevo Video</Link>
            </nav>
        </header>
    );
}

export default Header;

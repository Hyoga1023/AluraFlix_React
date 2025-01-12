// src/Componentes/Footer/index.jsx
import React from 'react';
import logo from './LogoMain.png';
import styles from './index.module.css'; 
import logo2 from './Logo_letra_blanca_sin_fondo.png';

function Footer() {
    return (
        <footer className={styles.footer}>
            <img className={styles.logo} src={logo} alt="Logo" />
            <p>© 2025 Diseñado por Cesar Martinez. Todos los derechos reservados.</p>
            <img className={styles.logo2} src={logo2} alt="Logo Desarrollador" />
        </footer>
    );
}

export default Footer;
